# yolo object detect onnxruntime-web

<img src="https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/preview.png">

This is yolo model object detect web app, powered by ONNXRUNTIME-WEB.

Support Webgpu and wasm(cpu).

## Models
### Available Yolo Models
| Model | Input Size | Param. | WebGPU |
| :-- | :-: | :-: | :-: |
| YOLOv9-T | 640 | **2.0M** | Yes |
| YOLOv9-S | 640 | **7.1M** | Yes |
| GELAN-S2 | 640 | | Yes
| YOLOv8-N | 640 | **3.2M** | No | 
| YOLOv8-S | 640 | **11.2M** | No |

### NMS decoder
Build decoder model from [onnx-modifier](https://github.com/ZhangGe6/onnx-modifier) by myself.

View model graph detail in [netron.app](https://netron.app/)

<details>
  <summary>Click to see graph.</summary>
  <img src="https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/yolo-decoder-graph-1.png">
  <img src="https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/yolo-decoder-graph-2.jpg">


</details>

## Setup
```bash
git clone https://github.com/nomi30701/yolo-object-detection-onnxruntime-web.git
cd yolo-object-detection-onnxruntime-web
yarn install # install dependencies
```
## Scripts
```bash
yarn dev # start dev server 
```

## Use other YOLO model
1. Conver YOLO model to onnx format. Read more on [Ultralytics](https://docs.ultralytics.com/)
2. Copy your yolo model to `./public` folder.
3. Add `<option>` HTML element in `App.jsx`,`value="YOUR_FILE_NAME"`.
    ```HTML
    ...
    <option value="yolov8n-slim">yolov8n-3.2M</option>
    <option value="yolov8s-slim">yolov8s-11.2M</option>
    <option value="YOUR_FILE_NAME">YOLO-model</option>
    ...
    ```
4. select your model on page.
5. DONE!👍