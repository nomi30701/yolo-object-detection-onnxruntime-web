# yolo object detect onnxruntime-web

<img src="https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/preview.png" height=60% width=60%>

This is yolo model object detect web app, powered by ONNXRUNTIME-WEB.

Support Webgpu and wasm(cpu).

## Models
### Available Yolo Models
| Model | Input Size | Param. |
| :-- | :-: | :-: |
| [YOLO11-N](https://github.com/ultralytics/ultralytics) | 640 | 2.6M |
| [YOLO11-S](https://github.com/ultralytics/ultralytics) | 640 | 9.4M |
| [YOLO11-M](https://github.com/ultralytics/ultralytics) | 640 | 20.1M |
| [YOLOv10-N](https://github.com/THU-MIG/yolov10) | 640 | 2.3M |
| [YOLOv10-S](https://github.com/THU-MIG/yolov10) | 640 | 7.2M |
| [YOLOv9-T](https://github.com/WongKinYiu/yolov9) | 640 | 2.0M |
| [YOLOv9-S](https://github.com/WongKinYiu/yolov9) | 640 | 7.1M |
| [GELAN-S2](https://github.com/WongKinYiu/yolov9) | 640 | |
| [YOLOv8-N](https://github.com/ultralytics/ultralytics) | 640 | 3.2M |
| [YOLOv8-S](https://github.com/ultralytics/ultralytics) | 640 | 11.2M |

### NMS decoder
Build decoder model from [onnx-modifier](https://github.com/ZhangGe6/onnx-modifier) by myself.

View model graph detail in [netron.app](https://netron.app/?url=https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/public/yolo-decoder.onnx)

<details>
  <summary>Click to see graph.</summary>
  <img src="https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/yolo-decoder-graph-1.png" height=70% width=70%>
  <img src="https://github.com/nomi30701/yolo-object-detection-onnxruntime-web/blob/main/yolo-decoder-graph-2.jpg" height=70% width=70%>
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
1. Conver YOLO model to onnx format. Read more on [Ultralytics](https://docs.ultralytics.com/).
  ```Python
  from ultralytics import YOLO

  # Load a model
  model = YOLO("yolo11n.pt")

  # Export the model
  model.export(format="onnx", opset=12)  
  ```
2. Copy your yolo model to `./public/models` folder. (Also can click **`Add model`** button)
3. Add `<option>` HTML element in `App.jsx`,`value="YOUR_FILE_NAME"`. 
    ```HTML
    ...
    <option value="YOUR_FILE_NAME">CUSTOM-MODEL</option>
    <option value="yolov10n-simplify">yolov10n-2.3M</option>
    <option value="yolov10s-simplify">yolov10s-7.2M</option>
    ...
    ```
4. select your model on page.
5. DONE!👍
> ✨ Support Webgpu
> 
> For onnx format support Webgpu, export model set **`opset=12`**.

> ✨ NMS setting
> 
> If custom model does not need nms, please click **`NMS check box`**.

> ⚠️ Classes label
>
> If your model are custom data (classes), please update `./src/utils/yolo_classes.json` classes label.