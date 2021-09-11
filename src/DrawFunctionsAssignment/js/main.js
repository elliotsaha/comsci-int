import { stroke } from "./graphics-library.js";
let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;
function drawStickman(x, y, color) {
    // Draw a Stickman with top-left corner (x, y)
    // and with the given color
    stroke(ctx, color);
    circle(ctx, x + 20, y + 20, 20, true); // Head
    line(ctx, x + 20, y + 40, x + 20, y + 80); // Body
    line(ctx, x, y + 70, x + 20, y + 50); // Left Arm
    line(ctx, x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(ctx, x, y + 110, x + 20, y + 80); // Left Leg
    line(ctx, x + 40, y + 110, x + 20, y + 80); // Right Leg
}
drawStickman(100, 100, "red");
