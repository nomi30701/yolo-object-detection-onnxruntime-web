import "./assets/App.css";
import * as ort from "onnxruntime-web/webgpu";
import { useState, useRef, useEffect, useCallback } from "react";
import { toggle_camera } from "./utils/toggle_camera.js";
import { inference_pipline } from "./utils/inference_pipline.js";

// config
const input_shape = [1, 3, 640, 640];
const topk = 100;
const iou_threshold = 0.45;
const score_threshold = 0.35;

const tensor_topk = new ort.Tensor("int32", new Int32Array([topk]));
const tensor_iou_threshold = new ort.Tensor(
  "float32",
  new Float32Array([iou_threshold])
);
const tensor_score_threshold = new ort.Tensor(
  "float32",
  new Float32Array([score_threshold])
);

function App() {
  // settings Ref
  const deviceSelectorRef = useRef(null); // device selector
  const modelSelectorRef = useRef(null); // model selector
  const [session, setSession] = useState(null); // model sessions
  const modelFileInputRef = useRef(null); // model file input element
  const [customModels, setCustomModels] = useState([]); // custom models
  const [isNMSChecked, setIsNMSChecked] = useState(false); // nms checkbox

  // content Ref
  const [imageSrc, setImageSrc] = useState(""); // image url source
  const input_canvasRef = useRef(null); // video input <canvas> element
  const camera_videoRef = useRef(null); // camera <video> element
  const input_imgRef = useRef(null); // <image> element
  const overlay_canvasRef = useRef(null); // overlay <canvas> element

  // buttons Ref
  const imgFileInputRef = useRef(null); // img file input element
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // set buttons disabled
  const [cameraOpened, setCameraOpened] = useState(false); // set camera button opened
  const [cameras, setCameras] = useState([]); // available cameras
  const [selectedCamera, setSelectedCamera] = useState(""); // selected camera

  // state Ref
  const [inferenceTime, setInferenceTime] = useState(0); // set inference time
  const [warmUpTime, setWarmUpTime] = useState(0); // set warm up time
  const modelInfoRef = useRef(null); // model info <p> element
  
  // if window on load
  useEffect(() => {
    loadModel();
    getCameras();
  }, [customModels]);

  // Load model and warm up
  const loadModel = async () => {
    setButtonsDisabled(true);
    const modelInfoEl = modelInfoRef.current;
    modelInfoEl.textContent = "Loading model...";
    modelInfoEl.style.color = "red";
    const device = deviceSelectorRef.current.value;
    const selectedModel = modelSelectorRef.current.value;
    const customModel = customModels.find(
      (model) => model.url === selectedModel
    ); // if selected custom model
    const model_path = customModel
      ? customModel.url
      : `${window.location.href}/models/${selectedModel}.onnx`;

    try {
      const start = performance.now(); // start timer
  
      // env flags
      ort.env.wasm.wasmPaths = `./`;
  
      // load model
      const yolo_model = await ort.InferenceSession.create(model_path, {
        executionProviders: [device],
      });
      const nms = await ort.InferenceSession.create(
        `${window.location.href}/yolo-decoder.onnx`
      );
  
      // warm up
      const dummy_input_tensor = new ort.Tensor(
        "float32",
        new Float32Array(input_shape.reduce((a, b) => a * b)),
        input_shape
      );
      const { output0 } = await yolo_model.run({ images: dummy_input_tensor });
      const { output_selected } = await nms.run({
        input: output0,
        topk: tensor_topk,
        iou_threshold: tensor_iou_threshold,
        score_threshold: tensor_score_threshold,
      });
  
      // end timer
      const end = performance.now();
      setWarmUpTime((end - start).toFixed(2));
  
      // dispose tensors and set session
      disposeTensors([dummy_input_tensor, output0, output_selected]);
      setSession({
        yolo: yolo_model,
        nms: nms,
        config: {
          isNMS: isNMSChecked,
          input_shape,
          tensor_topk,
          tensor_iou_threshold,
          tensor_score_threshold,
        },
      });
    } catch (error) {
      modelInfoEl.textContent = "Model loading failed.";
      modelInfoEl.style.color = "red";
      console.error(error);
      return;
    }
    // set btns and model info
    setButtonsDisabled(false);
    modelInfoEl.textContent = "Model loaded.";
    modelInfoEl.style.color = "green";
  };

  const disposeTensors = (tensors) => {
    tensors.forEach((tensor) => tensor.dispose());
  };

  const handleImageLoad = useCallback(() => {
    overlay_canvasRef.current.width = input_imgRef.current.width;
    overlay_canvasRef.current.height = input_imgRef.current.height;

    const src_mat = cv.imread(input_imgRef.current);
    inference_pipline(
      src_mat,
      session,
      setInferenceTime,
      overlay_canvasRef.current
    );
  }, [session]);

  const handleCloseImage = useCallback(() => {
    setImageSrc('');
    const overlay_canvas_el = overlay_canvasRef.current;
    overlay_canvas_el.width = 0;
    overlay_canvas_el.height = 0;
  }, []);

  const imgFileChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      event.target.value = null; // Reset input value to allow selecting the same file
    }
  }, []);

  const modelFileChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name.replace(".onnx", "");
      setCustomModels((prevModels) => [
        ...prevModels,
        { name: fileName, url: URL.createObjectURL(file) },
      ]);
    }
  }, []);

  const getCameras = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter((device) => device.kind === "videoinput");
    setCameras(videoDevices);
    if (videoDevices.length > 0) {
      setSelectedCamera(videoDevices[0].deviceId);
    }
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  // handle open camera
  const handleOpenCamera = async () => {
    toggle_camera(
      session,
      setInferenceTime,
      overlay_canvasRef.current,
      camera_videoRef.current,
      input_canvasRef.current,
      selectedCamera
    );
    setCameraOpened(!cameraOpened);
  };
  const handleNMSChange = (event) => {
    setIsNMSChecked(event.target.checked);
    loadModel();
  };
  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    setIsNMSChecked(!selectedModel.includes("yolov10"));
    loadModel();
  };
  

  return (
    <>
      <div>
        <h1>Yolo object detection App</h1>
        <h2>Powered by onnxruntime-web</h2>
      </div>

      <div id="setting-container">
        <div>
          <label htmlFor="device-selector">Backend:</label>
          <select
            name="device-selector"
            ref={deviceSelectorRef}
            onChange={loadModel}
          >
            <option value="webgpu">webGPU</option>
            <option value="wasm">Wasm(cpu)</option>
          </select>
        </div>

        <div>
          <div>
            <label htmlFor="model-selector">Model:</label>
            <select
              name="model-selector"
              ref={modelSelectorRef}
              onChange={handleModelChange}
            >
              {/* <option value="YOUR_FILE_NAME">CUSTOM-MODEL</option> */}
              <option value="yolo11n-simplify">yolo11n-2.6M</option>
              <option value="yolo11s-simplify">yolo11s-9.4M</option>
              <option value="yolo11m-simplify">yolo11m-20.1M</option>
              <option value="yolov10n-simplify">yolov10n-2.3M</option>
              <option value="yolov10s-simplify">yolov10s-7.2M</option>
              <option value="yolov9t-simplify">yolov9t-2.0M</option>
              <option value="yolov9s-simplify">yolov9s-7.1M</option>
              <option value="gelan-s2-simplify">gelan-s2</option>
              <option value="yolov8n-simplify">yolov8n-3.2M</option>
              <option value="yolov8s-simplify">yolov8s-11.2M</option>
              {customModels.map((model, index) => (
                <option key={index} value={model.url}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="NMS-checkbox">NMS:</label>
            <input
              type="checkbox"
              id="NMS-checkbox"
              checked={isNMSChecked}
              onChange={handleNMSChange}></input>
          </div>
        </div>

        <div id="camera-selector-container">
          <label htmlFor="camera-selector">Select Camera:</label>
          <select
            id="camera-selector"
            value={selectedCamera}
            onChange={handleCameraChange}
          >
            {cameras.map((camera, index) => (
              <option key={index} value={camera.deviceId}>
                {camera.label || `Camera ${index + 1}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div id="content-container">
        <canvas
          ref={input_canvasRef}
          width={input_shape[2]}
          height={input_shape[3]}
          hidden
        ></canvas>
        <video
          ref={camera_videoRef}
          style={{ display: imageSrc ? "none" : "block" }}
          autoPlay
        ></video>
        <img
          id="img"
          src={imageSrc}
          ref={input_imgRef}
          onLoad={handleImageLoad}
        />
        <canvas id="overlay" ref={overlay_canvasRef}></canvas>
      </div>

      <div id="btn-container">
        <input
          type="file"
          accept="image/*"
          ref={imgFileInputRef}
          style={{ display: "none" }}
          onChange={imgFileChange}
        />
        <button
          disabled={buttonsDisabled || cameraOpened}
          onClick={() => {
            if (imageSrc) {
              handleCloseImage();
            } else {
              imgFileInputRef.current.click();
            }
          }}
        >
          {imageSrc ? "Close Image" : "Open Image"}
        </button>
        <button
          disabled={buttonsDisabled || imageSrc || cameras.length === 0}
          onClick={handleOpenCamera}
        >
          {cameraOpened ? "Close Camera" : "Open Camera"}
        </button>

        <input
          type="file"
          accept=".onnx"
          onChange={modelFileChange}
          ref={modelFileInputRef}
          hidden
        />
        <button onClick={() => modelFileInputRef.current.click()}>
          Add model
        </button>
      </div>

      <div id="model-status-container">
        <p ref={modelInfoRef}>yolov10 model loaded.</p>
        <div id="inferenct-time-container">
          <p>Warm up time: {warmUpTime}ms</p>
          <p>Inference time: {inferenceTime}ms</p>
        </div>
      </div>
    </>
  );
}

export default App;