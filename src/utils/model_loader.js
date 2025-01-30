import * as ort from "onnxruntime-web/webgpu";

export async function model_loader(device, model_path, nms_path, config) {
  ort.env.wasm.wasmPaths = `./`;

  // load model
  const yolo_model = await ort.InferenceSession.create(model_path, {
    executionProviders: [device],
  });
  const nms = await ort.InferenceSession.create(nms_path, {
    executionProviders: [device],
  });

  // warm up
  const dummy_input_tensor = new ort.Tensor(
    "float32",
    new Float32Array(config.input_shape.reduce((a, b) => a * b)),
    config.input_shape
  );
  const { output0 } = await yolo_model.run({ images: dummy_input_tensor });
  const { output_selected } = await nms.run({
    input: output0,
    topk: config.tensor_topk,
    iou_threshold: config.tensor_iou_threshold,
    score_threshold: config.tensor_score_threshold,
  });
  output0.dispose();
  output_selected.dispose();
  return { yolo_model, nms };
}
