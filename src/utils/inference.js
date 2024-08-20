import * as ort from "onnxruntime-web/webgpu"
import { draw_bounding_boxes } from "./draw_bounding_boxes";

/**
 * @typedef {Object} model_config
 * @property {ort.InferenceSession} session - YOLO and NMS session.
 * @property {Array[Number]} input_shape - Yolo model input shape.
 * @property {ort.Tensor} tensor_topk - Topk value for NMS.
 * @property {ort.Tensor} tensor_iou_threshold - IOU threshold value for NMS.
 * @property {ort.Tensor} tensor_score_threshold - Score threshold value for NMS.
 */

/**
 * Inference and show boxes in overlay canvas.
 * @param {cv.Mat} input_mat - Input image mat for detect.
 * @param {model_config} model_config - Configuration for the model.
 * @param {Function} setInferenceTime - Set inference time. useState function.
 * @param {HTMLCanvasElement} overlay_canvas_el - Show boxes in overlay canvas.
 */
export async function inference(
    input_mat,
    model_config,
    setInferenceTime,
    overlay_canvas_el
) {
    // model settings
    const { session, input_shape, tensor_topk, tensor_iou_threshold, tensor_score_threshold } = model_config;

    const input_mat_pre_processed = await pre_process(input_mat, input_shape[2], input_shape[3]);

    const input_tensor = new ort.Tensor(
        'float32',
        input_mat_pre_processed.data32F,
        input_shape
    )
    // delete mat
    input_mat_pre_processed.delete();

    // start timer
    const start = performance.now();
    
    // predict boxes
    const { output0 } = await session.yolo.run({ images: input_tensor });
    const { output_selected } = await session.nms.run({
        input: output0,
        topk: tensor_topk, 
        iou_threshold: tensor_iou_threshold, 
        score_threshold: tensor_score_threshold
    });

    // end timer
    const end = performance.now();
    setInferenceTime((end - start).toFixed(2));

    // delete input tensor
    input_tensor.dispose();
    output0.dispose();

    // set xRatio, yRatio
    const xRatio = input_mat.cols / input_shape[2];
    const yRatio = input_mat.rows / input_shape[3];
    const predictions = [];

    // delete mat
    input_mat.delete();

    // post process
    for (let i = 0; i < output_selected.dims[1]; i++) {
        const row_data = output_selected.data.slice(
            i * output_selected.dims[2], 
            (i + 1) * output_selected.dims[2]
        );
        const box = row_data.slice(0, 4);
        const scores = row_data.slice(4); 
        const score = Math.max(...scores); 
        const class_index = scores.indexOf(score); 

        // [x_center, y_center, width, height] -> [x, y, w, h] and scale to image size
        const [x, y, w, h] = [
            (box[0] - 0.5 * box[2]) * xRatio, 
            (box[1] - 0.5 * box[3]) * yRatio, 
            box[2] * xRatio, 
            box[3] * yRatio, 
        ];

        // push predictions
        predictions.push({
            bbox: [x, y, w, h],
            class_idx: class_index,
            score: score
        });
    }

    // delete output_selected tensor
    output_selected.dispose();

    // Draw boxes in overlay canvas
    draw_bounding_boxes(predictions, overlay_canvas_el);

}
/**
 * Pre process yolo model input image.
 * 
 * Resize and normalize input image, inference time is faster
 * 
 * No padding, but if add zeros padding, good for predict, but inference time is lower.
 * 
 * @param {cv.Mat} mat - Pre process yolo model input image. 
 * @param {Number} input_width - Yolo model input width.
 * @param {Number} input_height - Yolo model input height.
 * @returns Processed input mat.
 */
function pre_process(
    mat,
    input_width,
    input_height,
) {
    // input image mat (8UC4 RGBA) convert to BGR
    cv.cvtColor(mat, mat, cv.COLOR_RGBA2BGR);

    // resize and normalize
    const input_mat = cv.blobFromImage(
        mat,
        1/255.0,
        new cv.Size(input_width, input_height),
        new cv.Scalar(0, 0, 0),
        true,
        false
    );

    return input_mat;
}
