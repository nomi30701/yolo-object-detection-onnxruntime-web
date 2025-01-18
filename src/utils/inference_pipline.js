import * as ort from "onnxruntime-web/webgpu";
import { draw_bounding_boxes } from "./draw_bounding_boxes";

/**
 * @typedef {Object} config
 * @property {Array<number>} input_shape - Yolo model input shape.
 * @property {ort.Tensor} tensor_topk - Topk value for NMS.
 * @property {ort.Tensor} tensor_iou_threshold - IOU threshold value for NMS.
 * @property {ort.Tensor} tensor_score_threshold - Score threshold value for NMS.
 */

/**
 * @typedef {Object} model_config
 * @property {ort.InferenceSession} yolo - YOLO session.
 * @property {ort.InferenceSession} nms - nms session.
 * @property {config} config - nms config and input shape.
 */

/**
 * Yolo v8 and v9 inference pipline.
 * @param {cv.Mat} input_mat - Input image mat for detect.
 * @param {model_config} model_config - Configuration for the model.
 * @param {Function} setInferenceTime - Set inference time, useState function.
 * @param {HTMLCanvasElement} overlay_canvas_el - Overlay <canvas> element.
 */
export async function inference_pipline(
  input_mat,
  model_config,
  setInferenceTime,
  overlay_canvas_el
) {
  // model settings
  const { yolo, nms, config } = model_config;
  const {
    isNMS,
    input_shape,
    tensor_topk,
    tensor_iou_threshold,
    tensor_score_threshold,
  } = config;

  // pre process input image
  const input_mat_pre_processed = await pre_process(
    input_mat,
    input_shape[2],
    input_shape[3]
  );
  const input_tensor = new ort.Tensor(
    "float32",
    input_mat_pre_processed.data32F,
    input_shape
  );
  input_mat_pre_processed.delete(); // delete mat

  // inference
  const start = performance.now();
  const { output0 } = await yolo.run({ images: input_tensor });
  const end = performance.now();
  setInferenceTime((end - start).toFixed(2));
  input_tensor.dispose();

  // set xRatio, yRatio
  const xRatio = input_mat.cols / input_shape[2];
  const yRatio = input_mat.rows / input_shape[3];
  input_mat.delete(); // delete mat

  const predictions = [];
  const score_threshold = tensor_score_threshold.data[0];

  // post process
  if (isNMS) {
    // Yolo v10 does not need NMS
    // post process
    for (let i = 0; i < output0.dims[1]; i++) {
      const raw_data = output0.data.slice(
        i * output0.dims[2],
        (i + 1) * output0.dims[2]
      ); // every 6 values are [x1, y1, x2, y2, score, class_index]

      const score = raw_data[4];
      if (score > score_threshold) {
        const [x1, y1, x2, y2] = raw_data.slice(0, 4);
        const [x, y, w, h] = [
          x1 * xRatio,
          y1 * yRatio,
          (x2 - x1) * xRatio,
          (y2 - y1) * yRatio,
        ];

        predictions.push({
          bbox: [x, y, w, h],
          class_idx: raw_data[5],
          score: score,
        }); // push predictions
      }
    }
  } else {
    // yolov8 and yolov9 need NMS
    const { output_selected } = await nms.run({
      input: output0,
      topk: tensor_topk,
      iou_threshold: tensor_iou_threshold,
      score_threshold: tensor_score_threshold,
    });

    // post process
    for (let i = 0; i < output_selected.dims[1]; i++) {
      const raw_data = output_selected.data.slice(
        i * output_selected.dims[2],
        (i + 1) * output_selected.dims[2]
      ); // every 84 values are [x_center, y_center, width, height, scores....]
      const [x_center, y_center, width, height] = raw_data.slice(0, 4);
      const scores = raw_data.slice(4);
      const score = Math.max(...scores);
      const class_index = scores.indexOf(score);

      // [x_center, y_center, width, height] -> [x, y, w, h] and scale to image size
      const [x, y, w, h] = [
        (x_center - 0.5 * width) * xRatio,
        (y_center - 0.5 * height) * yRatio,
        width * xRatio,
        height * yRatio,
      ];

      predictions.push({
        bbox: [x, y, w, h],
        class_idx: class_index,
        score: score,
      }); // push predictions
    }
    output_selected.dispose(); // dispose tensor
  }
  output0.dispose(); // dispose tensor

  // Draw boxes in overlay canvas
  draw_bounding_boxes(predictions, overlay_canvas_el);
}

/**
 * Pre process input image.
 *
 * Resize and normalize image.
 *
 * If add zeros padding, good for predict.
 *
 * @param {cv.Mat} mat - Pre process yolo model input image.
 * @param {Number} input_width - Yolo model input width.
 * @param {Number} input_height - Yolo model input height.
 * @returns Processed input mat.
 */
function pre_process(mat, input_width, input_height) {
  // input image mat (8UC4 RGBA) convert to RGB
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2RGB);

  // resize and normalize
  const input_mat = cv.blobFromImage(
    mat,
    1 / 255.0,
    new cv.Size(input_width, input_height),
    new cv.Scalar(0, 0, 0),
    true,
    false
  );

  return input_mat;
}
