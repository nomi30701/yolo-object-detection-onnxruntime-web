import './assets/App.css'
import * as ort from "onnxruntime-web/webgpu"
import { useState, useRef, useEffect, useCallback } from 'react'
import { toggle_camera } from './utils/toggle_camera.js'
import { inference } from './utils/inference.js'

// config
const input_shape = [1, 3, 640, 640];
const topk = 100;
const iou_threshold = 0.45;
const score_threshold = 0.25;

const tensor_topk = new ort.Tensor('int32', new Int32Array([topk]));
const tensor_iou_threshold = new ort.Tensor('float32', new Float32Array([iou_threshold]));
const tensor_score_threshold = new ort.Tensor('float32', new Float32Array([score_threshold]));

function App() {
  // settings Ref
  const deviceRef = useRef(null); // device selector
  const modelRef = useRef(null); // model selector
  const [session, setSession] = useState(null); // model sessions

  // content Ref
  const [imageSrc, setImageSrc] = useState(''); // image source
  const imgRef = useRef(null); // image element
  const overlay_canvasRef = useRef(null); // overlay canvas element
  const input_canvasRef = useRef(null);   // input canvas element
  const camera_videoRef = useRef(null); // camera video element
  const fileInputRef = useRef(null); // file input element
  const [showVideo, setShowVideo] = useState(false); // show video or image
  const [imageOpened, setImageOpened] = useState(false); // image opened state
  const [cameraOpened, setCameraOpened] = useState(false); // camera opened state

  // state Ref
  const [inferenceTime, setInferenceTime] = useState(0); // set inference time 
  const [warmUpTime, setWarmUpTime] = useState(0);  // set warm up time
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // set buttons disabled
  const modelInfoRef = useRef(null); // model info element

  // if window on load
  useEffect(() => {    
    loadModel();
  }, []);

  // Load model and warm up
  const loadModel = async () => {
    setButtonsDisabled(true);
    const modelInfoEl = modelInfoRef.current;
    modelInfoEl.textContent = "Loading model...";
    modelInfoEl.style.color = "red";

    const device = deviceRef.current.value;
    const model_path = `${window.location.href}/models/${modelRef.current.value}.onnx`;
    
    try {
      // start timer
      const start = performance.now();
      
      // load model
      const yolo_model = await ort.InferenceSession.create(model_path, {executionProviders: [device]});
      const nms = await ort.InferenceSession.create(`${window.location.href}/yolo-decoder.onnx`); 

      // warm up
      const dummy_input_tensor = new ort.Tensor("float32", new Float32Array(input_shape.reduce((a, b) => a * b)), input_shape);
      const {output0} = await yolo_model.run({ images: dummy_input_tensor });
      const { output_selected } = await nms.run({
        input: output0,
        topk: tensor_topk, 
        iou_threshold: tensor_iou_threshold, 
        score_threshold: tensor_score_threshold
      });

      // end timer
      const end = performance.now();
      setWarmUpTime((end - start).toFixed(2));
      
      // dispose tensors and set session
      disposeTensors([dummy_input_tensor, output0, output_selected]);
      setSession({yolo: yolo_model, nms: nms});

    } catch (error) {
      modelInfoEl.textContent = "Model loading failed.";
      modelInfoEl.style.color = "red";
      console.error(error);
      return;
    }

    setButtonsDisabled(false);
    modelInfoEl.textContent = "Model loaded.";
    modelInfoEl.style.color = "green";
  };

  const disposeTensors = (tensors) => {
    tensors.forEach(tensor => tensor.dispose());
  }

  // if image loaded
  const handleImageLoad = () => {
    const src_mat = cv.imread(imgRef.current); // read image
    
    // set overlay canvas size
    overlay_canvasRef.current.width = imgRef.current.width; 
    overlay_canvasRef.current.height = imgRef.current.height;
    inference(
      src_mat, 
      {
        session,
        input_shape, 
        tensor_topk,
        tensor_iou_threshold,
        tensor_score_threshold
      },
      setInferenceTime,
      overlay_canvasRef.current
    ); // start inference
  };

  // if file changed
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setShowVideo(false); // Show image
      setImageOpened(true); // Set image opened state
    }
  };

  // handle close image
  const handleCloseImage = () => {
    setImageSrc('');
    setImageOpened(false);
    // Clear the overlay canvas
    const overlay_canvas_el = overlay_canvasRef.current;
    overlay_canvas_el.width = 0;
    overlay_canvas_el.height = 0;
  };

  // handle toggle camera
  const handleToggleCamera = () => {
    toggle_camera(
      camera_videoRef.current,
      input_canvasRef.current,
      {
        session,
        input_shape, 
        tensor_topk,
        tensor_iou_threshold,
        tensor_score_threshold
      },
      setInferenceTime,
      overlay_canvasRef.current
    );
    setShowVideo(!showVideo);
    setCameraOpened(!cameraOpened);
  };

  return (
    <>
      <h1>Yolo object detection App</h1>
      <h2>Powered by onnxruntime-web</h2>
      <div id='setting-container'>
          <div>
            <label htmlFor="device-selector">Backend:</label>
            <select name="device-selector" ref={deviceRef} onChange={loadModel}>
              <option value="webgpu">webGPU</option>
              <option value="wasm">Wasm(cpu)</option>
            </select>
          </div>
          
          {/* add model here */}
          <div id='selector-container'>
            <label htmlFor="model-selector">Model:</label>
            <select name="model-selector" ref={modelRef} onChange={loadModel}>
              <option value="yolov9-t-converted-simplify">yolov9t-2.0M</option>
              <option value="yolov9-s-converted-simplify">yolov9s-7.1M</option>
              <option value="gelan-s2-simplify">gelan-s2</option>
              <option value="yolov8n-slim">yolov8n-3.2M</option>
              <option value="yolov8s-slim">yolov8s-11.2M</option>
            </select>
          </div>
      </div>
      <p>Yolov8 only support wasm(cpu)</p>

      <div id="content-container">
        <canvas ref={input_canvasRef} width={input_shape[2]} height={input_shape[3]} hidden></canvas>
        <video ref={camera_videoRef} style={{ display: showVideo ? 'block' : 'none' }} autoPlay></video>
        <img id="img" src={imageSrc} ref={imgRef} onLoad={handleImageLoad} style={{ display: showVideo ? 'none' : 'block' }}/>
        <canvas id="overlay" ref={overlay_canvasRef}></canvas>
      </div>

      <div id='btn-container'>
        <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        <button
          disabled={buttonsDisabled}
          onClick={() => {
            if (imageOpened) {
              handleCloseImage();
            } else {
              fileInputRef.current.click();
            }
          }}
        >
          {imageOpened ? 'Close Image' : 'Open Image'}
        </button>
        <button className='btn'>Save Image</button>
        <button disabled={buttonsDisabled} onClick={handleToggleCamera}>
          {cameraOpened ? 'Close Camera' : 'Open Camera'}
        </button>
      </div>

      <div id='model-status-container'>
        <p ref={modelInfoRef}>yolov10 model loaded.</p>
        <div id='inferenct-time-container'>
          <p>Warm up time: {warmUpTime}ms</p>
          <p>Inference time: {inferenceTime}ms</p>
        </div>
      </div>
    </>
  )
}

export default App