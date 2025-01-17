import { inference_pipline } from "./inference_pipline";

/**
 * Toggle camera and inference.
 * @param {model_config} model_config - Model configuration.
 * @param {Function} setInferenceTime - Set inference time. useState function.
 * @param {HTMLCanvasElement} overlay_canvas_el - Show boxes in overlay canvas.
 * @param {HTMLVideoElement} camera_video_el - Camera video element.
 * @param {HTMLCanvasElement} input_canvas_el - Input canvas element for opencv read.
 * @param {string} selectedCamera - Selected camera device ID.
 */

let camera_stream = null;
let input_canvas_ctx = null;
let continuous = true;

export async function toggle_camera(
  model_config,
  setInferenceTime,
  overlay_canvas_el,
  camera_video_el,
  input_canvas_el,
  selectedCamera
) {
  // capture frame loop
  const capture_frame_continuous = async () => {
    if (!continuous) return;

    input_canvas_ctx.drawImage(
      camera_video_el,
      0,
      0,
      input_canvas_el.width,
      input_canvas_el.height
    ); // Draw frame to input <canvas>
    const frame_mat = cv.imread(input_canvas_el); // read frame to Cv.Mat
    await inference_pipline(
      frame_mat,
      model_config,
      setInferenceTime,
      overlay_canvas_el
    );

    requestAnimationFrame(capture_frame_continuous); // loop
  };

  if (camera_stream) {
    // stop camera
    camera_stream.getTracks().forEach((track) => track.stop());
    camera_video_el.srcObject = null;
    camera_stream = null;
    continuous = false;

    // Clear the overlay canvas
    overlay_canvas_el.width = 0;
    overlay_canvas_el.height = 0;
  } else {
    // get user media
    camera_stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: selectedCamera ? { exact: selectedCamera } : undefined },
      audio: false,
    });
    camera_video_el.srcObject = camera_stream; // set to <video>
    input_canvas_ctx = input_canvas_el.getContext("2d", {
      willReadFrequently: true,
    }); // get input <canvas> ctx

    camera_video_el.onloadedmetadata = () => {
      overlay_canvas_el.width = camera_video_el.videoWidth;
      overlay_canvas_el.height = camera_video_el.videoHeight;
    }; // set overlay size if open camera

    // start frame capture
    continuous = true;
    capture_frame_continuous();
  }
}