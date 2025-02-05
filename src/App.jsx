import "./assets/App.css";
import { useEffect, useRef, useState, useCallback } from "react";
import * as ort from "onnxruntime-web/webgpu";
import { model_loader } from "./utils/model_loader";
import { inference_pipeline } from "./utils/inference_pipeline";
import { draw_bounding_boxes } from "./utils/draw_bounding_boxes";
import classes from "./utils/yolo_classes.json";

// config
const input_shape = [1, 3, 640, 640];
const topk = 100;
const iou_threshold = 0.45;
const score_threshold = 0.45;

// config tensor
const config = {
  input_shape: input_shape,
  tensor_topk: new ort.Tensor("int32", new Int32Array([topk])),
  tensor_iou_threshold: new ort.Tensor(
    "float32",
    new Float32Array([iou_threshold])
  ),
  tensor_score_threshold: new ort.Tensor(
    "float32",
    new Float32Array([score_threshold])
  ),
};

function App() {
  // setting Refs
  const deviceRef = useRef(null);
  const modelRef = useRef(null);
  const [customModels, setCustomModels] = useState([]);
  const [cameras, setCameras] = useState([]);
  const cameraSelectorRef = useRef(null);
  const [camera_stream, setCameraStream] = useState(null);
  const [sessionsConfig, setSessionsConfig] = useState(null);

  // content Refs
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const overlayRef = useRef(null);
  const cameraRef = useRef(null);
  const inputCanvasRef = useRef(null);

  // model status Ref
  const [warnUpTime, setWarnUpTime] = useState(0);
  const [inferenceTime, setInferenceTime] = useState(0);
  const modelStatusRef = useRef(null);
  const [details, setDetails] = useState([]);

  // button Refs
  const openImageRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    loadModel();
    getCameras();
  }, []);

  const loadModel = useCallback(async () => {
    const modelStatusEl = modelStatusRef.current;
    modelStatusEl.textContent = "Loading model...";
    modelStatusEl.style.color = "red";
    setIsModelLoaded(false);

    const device = deviceRef.current.value;
    const selectedModel = modelRef.current.value;
    const customModel = customModels.find(
      (model) => model.url === selectedModel
    ); // if selected custom model

    const model_path = customModel
      ? customModel.url
      : `${window.location.href}/models/${selectedModel}.onnx`;
    const nms_path = `${window.location.href}/yolo-decoder.onnx`;

    try {
      // load model and warm up
      const start = performance.now();
      const { yolo_model, nms } = await model_loader(
        device,
        model_path,
        nms_path,
        config
      );
      const end = performance.now();

      setSessionsConfig({
        yolo_model: yolo_model,
        nms: nms,
        input_shape: input_shape,
        tensor_topk: config.tensor_topk,
        tensor_iou_threshold: config.tensor_iou_threshold,
        tensor_score_threshold: config.tensor_score_threshold,
      });

      modelStatusEl.textContent = "Model loaded";
      modelStatusEl.style.color = "green";
      setWarnUpTime((end - start).toFixed(2));
      setIsModelLoaded(true);
    } catch (error) {
      modelStatusEl.textContent = "Model loading failed";
      modelStatusEl.style.color = "red";
      console.error(error);
    }
  }, [customModels]);

  // handles
  const handle_AddModel = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name.replace(".onnx", "");
      setCustomModels((prevModels) => [
        ...prevModels,
        { name: fileName, url: URL.createObjectURL(file) },
      ]);
    }
  }, []);

  const handle_OpenImage = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setImgSrc(URL.createObjectURL(file));
      openImageRef.current.disabled = true;
      event.target.value = null;
    }
  }, []);

  const handle_ImageLoad = useCallback(async () => {
    overlayRef.current.width = imgRef.current.width;
    overlayRef.current.height = imgRef.current.height;
    const [results, results_inferenceTime] = await inference_pipeline(
      imgRef.current,
      sessionsConfig
    );
    setDetails(results);
    setInferenceTime(results_inferenceTime);
    draw_bounding_boxes(results, overlayRef.current);
  }, [sessionsConfig]);

  const getCameras = useCallback(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );
    setCameras(videoDevices);
  }, []);

  const handle_ToggleCamera = useCallback(async () => {
    if (camera_stream) {
      // stop camera
      camera_stream.getTracks().forEach((track) => track.stop());
      cameraRef.current.srcObject = null;
      setCameraStream(null);
      overlayRef.current.width = 0;
      overlayRef.current.height = 0;
    } else {
      // start camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: cameraSelectorRef.current.value,
        },
        audio: false,
      });
      setCameraStream(stream);
      cameraRef.current.srcObject = stream;
    }
  }, [camera_stream]);

  const handle_cameraLoad = useCallback(() => {
    const inputCanvasCtx = inputCanvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });
    inputCanvasCtx.canvas.width = cameraRef.current.videoWidth;
    inputCanvasCtx.canvas.height = cameraRef.current.videoHeight;
    overlayRef.current.width = cameraRef.current.videoWidth;
    overlayRef.current.height = cameraRef.current.videoHeight;
    handle_frame_continuous(inputCanvasCtx);
  }, [sessionsConfig]);

  const handle_frame_continuous = useCallback(
    async (ctx) => {
      if (!cameraRef.current.srcObject) {
        return;
      }
      ctx.drawImage(
        cameraRef.current,
        0,
        0,
        cameraRef.current.videoWidth,
        cameraRef.current.videoHeight
      ); // Draw frame to input <canvas>
      const [results, results_inferenceTime] = await inference_pipeline(
        inputCanvasRef.current,
        sessionsConfig
      );
      setDetails(results);
      setInferenceTime(results_inferenceTime);
      draw_bounding_boxes(results, overlayRef.current);
      requestAnimationFrame(() => handle_frame_continuous(ctx));
    },
    [sessionsConfig]
  );

  return (
    <>
      <h1 className="my-8 text-4xl">Yolo Object Detection</h1>

      <div
        id="setting-container"
        className="container text-lg flex justify-evenly gap-10"
      >
        <div id="device-selector-container">
          <label htmlFor="device-selector">Backend:</label>
          <select name="device-selector" ref={deviceRef} onChange={loadModel}>
            <option value="webgpu">webGPU</option>
            <option value="wasm">Wasm(cpu)</option>
          </select>
        </div>
        <div id="model-selector-container">
          <label htmlFor="model-selector">Model:</label>
          <select name="model-selector" ref={modelRef} onChange={loadModel}>
            {/* <option value="YOUR_FILE_NAME">CUSTOM-MODEL</option> */}
            <option value="yolo11n-simplify-dynamic">yolo11n-2.6M</option>
            <option value="yolo11s-simplify-dynamic">yolo11s-9.4M</option>
            <option value="yolo11m-simplify-dynamic">yolo11m-20.1M</option>
            {customModels.map((model, index) => (
              <option key={index} value={model.url}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div id="camera-selector-container">
          <label htmlFor="camera-selector">Select Camera:</label>
          <select ref={cameraSelectorRef}>
            {cameras.map((camera, index) => (
              <option key={index} value={camera.deviceId}>
                {camera.label || `Camera ${index + 1}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container bg-stone-700 shadow-lg relative min-w-[640px] min-h-[320px] flex justify-center items-center">
        <canvas ref={inputCanvasRef} hidden></canvas>
        <video
          className="block max-w-[720px] max-h-[640px] rounded-lg"
          ref={cameraRef}
          onLoadedData={handle_cameraLoad}
          hidden={!camera_stream}
          autoPlay
        ></video>
        <img
          id="img"
          ref={imgRef}
          src={imgSrc}
          onLoad={handle_ImageLoad}
          className="block inset-0 max-w-[720px] max-h-[640px] rounded-lg"
        />
        <canvas ref={overlayRef} className="absolute"></canvas>
      </div>

      <div id="btn-container" className="container flex justify-around">
        <button
          className="btn"
          disabled={camera_stream || !isModelLoaded}
          onClick={() => {
            if (!imgSrc) {
              openImageRef.current.click();
            } else {
              setImgSrc("");
              openImageRef.current.disabled = false;
              overlayRef.current.width = 0;
              overlayRef.current.height = 0;
            }
          }}
        >
          {imgSrc ? "Close Image" : "Open Image"}
          <input
            type="file"
            accept="image/*"
            hidden
            ref={openImageRef}
            onChange={handle_OpenImage}
          />
        </button>

        <button
          className="btn"
          onClick={handle_ToggleCamera}
          disabled={cameras.length === 0 || imgSrc || !isModelLoaded}
        >
          {camera_stream ? "Close Camera" : "Open Camera"}
        </button>

        <label className="btn cursor-pointer">
          <input
            type="file"
            accept=".onnx"
            onChange={handle_AddModel}
            // ref={modelFileInputRef}
            hidden
          />
          <span>Add model</span>
        </label>
      </div>

      <div id="model-status-container" className="text-2xl">
        <div
          id="inferenct-time-container"
          className="flex justify-evenly text-xl my-6"
        >
          <p>
            Warm up time: <span className="text-lime-500">{warnUpTime}ms</span>
          </p>
          <p>
            Inference time:{" "}
            <span className="text-lime-500">{inferenceTime}ms</span>
          </p>
        </div>
        <p
          className={isModelLoaded ? "" : "animate-text-loading"}
          ref={modelStatusRef}
        >
          Model not loaded
        </p>
      </div>

      <details className="text-gray-200 group" open>
        <summary className="my-5 hover:text-gray-400 cursor-pointer transition-colors duration-300">
          Detected objects
        </summary>
        <div
          className="transition-all duration-300 ease-in-out transform origin-top
                  group-open:animate-details-show"
        >
          <table
            className="text-left w-1/2 mx-auto border-collapse table-auto text-sm 
                bg-gray-800 rounded-md overflow-hidden"
          >
            <thead className="bg-gray-700">
              <tr>
                <th className="border-b border-gray-600 p-4 text-gray-100">
                  Number
                </th>
                <th className="border-b border-gray-600 p-4 text-gray-100">
                  ClassName
                </th>
                <th className="border-b border-gray-600 p-4 text-gray-100">
                  Confidence
                </th>
              </tr>
            </thead>
            <tbody>
              {details.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700 transition-colors text-gray-300"
                >
                  <td className="border-b border-gray-600 p-4">{index + 1}</td>
                  <td className="border-b border-gray-600 p-4">
                    {classes.class[item.class_idx]}
                  </td>
                  <td className="border-b border-gray-600 p-4">
                    {(item.score * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </>
  );
}

export default App;
