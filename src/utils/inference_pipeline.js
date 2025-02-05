import * as ort from "onnxruntime-web/webgpu";

/**
 * @typedef {Object} sessionsConfig
 * @property {ort.InferenceSession} yolo_model - YOLO session.
 * @property {ort.InferenceSession} nms - nms session.
 * @property {[Number]} input_shape  - input shape of the model.
 * @property {ort.Tensor<Int32Array>} tensor_topk - Topk value for nms, must be Int32Array.
 * @property {ort.Tensor<Float32Array>} tensor_iou_threshold - IOU threshold for nms.
 * @property {ort.Tensor<Float32Array>} tensor_score_threshold - Score threshold for nms.
 */
/**
 * Yolov11 inference pipeline.
 * @param {(HTMLImageElement|HTMLCanvasElement)} input_el - Input <img> or <canvas> element for detect.
 * @param {sessionsConfig} sessionsConfig - Configuration for the model.
 *
 * @returns {[Array[Object], Number]} - Array of predictions and inference time.
 */
export const inference_pipeline = async (input_el, sessionsConfig) => {
  const src_mat = cv.imread(input_el);

  // pre process input image
  // const [src_mat_preProcessed, xRatio, yRatio] = await preProcess(
  //   src_mat,
  //   sessionsConfig.input_shape[2],
  //   sessionsConfig.input_shape[3]
  // );

  const [src_mat_preProcessed, div_width, div_height] =
    preProcess_dynamic(src_mat);
  const xRatio = src_mat.cols / div_width;
  const yRatio = src_mat.rows / div_height;

  src_mat.delete();

  const input_tensor = new ort.Tensor("float32", src_mat_preProcessed.data32F, [
    1,
    3,
    div_height,
    div_width,
  ]);
  src_mat_preProcessed.delete();

  // inference
  const start = performance.now();
  const { output0 } = await sessionsConfig.yolo_model.run({
    images: input_tensor,
  });
  const { output_selected } = await sessionsConfig.nms.run({
    input: output0,
    topk: sessionsConfig.tensor_topk,
    iou_threshold: sessionsConfig.tensor_iou_threshold,
    score_threshold: sessionsConfig.tensor_score_threshold,
  });
  const end = performance.now();
  output0.dispose();

  // post process
  const results = [];

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

    results.push({
      bbox: [x, y, w, h],
      class_idx: class_index,
      score: score,
    }); // push predictions
  }
  output_selected.dispose();
  return [results, (end - start).toFixed(2)];
};

/**
 * Pre process input image.
 *
 * Resize and normalize image.
 *
 *
 * @param {cv.Mat} mat - Pre process yolo model input image.
 * @param {Number} input_width - Yolo model input width.
 * @param {Number} input_height - Yolo model input height.
 * @returns {cv.Mat} Processed input mat.
 */
const preProcess = (mat, input_width, input_height) => {
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2RGB);

  // Resize to dimensions divisible by 32
  const [div_width, div_height] = divStride(32, mat.cols, mat.rows);
  cv.resize(mat, mat, new cv.Size(div_width, div_height));

  // Padding to square
  const max_dim = Math.max(div_width, div_height);
  const right_pad = max_dim - div_width;
  const bottom_pad = max_dim - div_height;
  cv.copyMakeBorder(
    mat,
    mat,
    0,
    bottom_pad,
    0,
    right_pad,
    cv.BORDER_CONSTANT,
    new cv.Scalar(0, 0, 0)
  );

  // Calculate ratios
  const xRatio = mat.cols / input_width;
  const yRatio = mat.rows / input_height;

  // Resize to input dimensions and normalize to [0, 1]
  const preProcessed = cv.blobFromImage(
    mat,
    1 / 255.0,
    new cv.Size(input_width, input_height),
    new cv.Scalar(0, 0, 0),
    false,
    false
  );

  return [preProcessed, xRatio, yRatio];
};

/**
 * Pre process input image.
 *
 * Normalize image.
 *
 * @param {cv.Mat} mat - Pre process yolo model input image.
 * @param {Number} input_width - Yolo model input width.
 * @param {Number} input_height - Yolo model input height.
 * @returns {cv.Mat} Processed input mat.
 */
const preProcess_dynamic = (mat) => {
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2RGB);

  // resize image to divisible by 32
  const [div_width, div_height] = divStride(32, mat.cols, mat.rows);
  // resize, normalize to [0, 1]
  const preProcessed = cv.blobFromImage(
    mat,
    1 / 255.0,
    new cv.Size(div_width, div_height),
    new cv.Scalar(0, 0, 0),
    false,
    false
  );
  return [preProcessed, div_width, div_height];
};

/**
 * Return height and width are divisible by stride.
 * @param {Number} stride - Stride value.
 * @param {Number} width - Image width.
 * @param {Number} height - Image height.
 * @returns {[Number]}[width, height] divisible by stride.
 **/
const divStride = (stride, width, height) => {
  width =
    width % stride >= stride / 2
      ? (Math.floor(width / stride) + 1) * stride
      : Math.floor(width / stride) * stride;

  height =
    height % stride >= stride / 2
      ? (Math.floor(height / stride) + 1) * stride
      : Math.floor(height / stride) * stride;

  return [width, height];
};
