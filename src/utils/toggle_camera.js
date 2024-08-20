import { inference } from "./inference";

/**
 * Toggle camera and inference.
 * @param {HTMLVideoElement} camera_video_el - Camera video element
 */

let camera_stream = null;
let input_canvas_ctx = null;
let continuous = true;
let animation_frame_id = null;

export async function toggle_camera(
    camera_video_el,
    input_canvas_el,
    model_config,
    setInferenceTime,
    overlay_canvas_el
) {
    if (camera_stream) {
        // stop camera
        camera_stream.getTracks().forEach(track => track.stop());
        camera_video_el.srcObject = null;
        camera_stream = null;
        
        // stop frame capture
        cancelAnimationFrame(animation_frame_id);
        continuous = false;
        animation_frame_id = null;

        // Clear the overlay canvas
        overlay_canvas_el.width = 0;
        overlay_canvas_el.height = 0;
    } else {
        // get user media
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream) => {
                // camera stream set to HTML video element
                camera_video_el.srcObject = stream;
                camera_stream = stream;

                // Set input canvas context
                input_canvas_ctx = input_canvas_el.getContext('2d', { willReadFrequently: true });

                // Set overlay canvas size
                camera_video_el.onloadedmetadata = () => {
                    overlay_canvas_el.width = camera_video_el.videoWidth;
                    overlay_canvas_el.height = camera_video_el.videoHeight;
                };

                // start frame capture
                continuous = true;
                capture_frame_continuous();
            })
            .catch((error) => {
                console.error('Error accessing the camera.', error);
            });
    }

    const capture_frame_continuous = async () => {
        if (!continuous) return;
        input_canvas_ctx.drawImage(camera_video_el, 0, 0, input_canvas_el.width, input_canvas_el.height); // draw video frame to canvas
        const frame_mat = cv.imread(input_canvas_el); // read frame to Cv.Mat
        await inference(
            frame_mat, 
            model_config,
            setInferenceTime,
            overlay_canvas_el
        );
        animation_frame_id = requestAnimationFrame(capture_frame_continuous); // loop
    };
}