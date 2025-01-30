import classes from "./yolo_classes.json";

/**
 * Draw bounding boxes in overlay canvas.
 * @param {Array[Object]} predictions - Bounding boxes, class and score objects
 * @param {HTMLCanvasElement} overlay_el - Show boxes in overlay canvas element.
 */
export async function draw_bounding_boxes(predictions, overlay_el) {
  const ctx = overlay_el.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, overlay_el.width, overlay_el.height);

  // Calculate diagonal length of the canvas
  const diagonalLength = Math.sqrt(
    Math.pow(overlay_el.width, 2) + Math.pow(overlay_el.height, 2)
  );
  const lineWidth = diagonalLength / 250;

  // Draw boxes and labels
  predictions.forEach((predict) => {
    // Get color for the class
    const color = Colors.getColor(predict.class_idx, 0.2); // get color with 20% transparency
    const borderColor = Colors.getColor(predict.class_idx, 0.8);
    const rgbaFillColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;
    const rgbaBorderColor = `rgba(${borderColor[0]}, ${borderColor[1]}, ${borderColor[2]}, ${borderColor[3]})`;

    const [x1, y1, width, height] = predict.bbox;

    // Draw filled rectangle with transparency
    ctx.fillStyle = rgbaFillColor;
    ctx.fillRect(x1, y1, width, height);

    // Draw border
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = rgbaBorderColor;
    ctx.strokeRect(x1, y1, width, height);

    // Draw text and background
    ctx.fillStyle = rgbaBorderColor;
    ctx.font = "16px Arial";
    const text = `${classes.class[predict.class_idx]} ${predict.score.toFixed(
      2
    )}`;
    const textWidth = ctx.measureText(text).width;
    const textHeight = parseInt(ctx.font, 10);

    // Calculate the Y position for the text
    let textY = y1 - 5;
    let rectY = y1 - textHeight - 4;

    // Check if the text will be outside the canvas
    if (rectY < 0) {
      // Adjust the Y position to be inside the canvas
      textY = y1 + textHeight + 5;
      rectY = y1 + 1;
    }

    ctx.fillRect(x1 - 1, rectY, textWidth + 4, textHeight + 4);
    ctx.fillStyle = "white";
    ctx.fillText(text, x1, textY);
  });
}

/**
 * Ultralytics default color palette https://ultralytics.com/.
 *
 * This class provides methods to work with the Ultralytics color palette, including converting hex color codes to
 * RGB values.
 */
class Colors {
  static palette = [
    "042AFF",
    "0BDBEB",
    "F3F3F3",
    "00DFB7",
    "111F68",
    "FF6FDD",
    "FF444F",
    "CCED00",
    "00F344",
    "BD00FF",
    "00B4FF",
    "DD00BA",
    "00FFFF",
    "26C000",
    "01FFB3",
    "7D24FF",
    "7B0068",
    "FF1B6C",
    "FC6D2F",
    "A2FF0B",
  ].map((c) => Colors.hex2rgba(`#${c}`));
  static n = Colors.palette.length;
  static cache = {}; // Cache for colors

  static hex2rgba(h, alpha = 1.0) {
    return [
      parseInt(h.slice(1, 3), 16),
      parseInt(h.slice(3, 5), 16),
      parseInt(h.slice(5, 7), 16),
      alpha,
    ];
  }

  static getColor(i, alpha = 1.0, bgr = false) {
    const key = `${i}-${alpha}-${bgr}`;
    if (Colors.cache[key]) {
      return Colors.cache[key];
    }
    const c = Colors.palette[i % Colors.n];
    const rgba = [...c.slice(0, 3), alpha];
    const result = bgr ? [rgba[2], rgba[1], rgba[0], rgba[3]] : rgba;
    Colors.cache[key] = result;
    return result;
  }
}
