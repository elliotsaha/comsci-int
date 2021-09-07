import GraphicsLib from "./graphics-library.js";
var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
// Initialize graphics library with ctx
var gl = new GraphicsLib(ctx);
var drawStar = function (x, y, width, height, lineWidth, color) {
    if (color === void 0) { color = "black"; }
    gl.lineWidth(lineWidth);
    gl.stroke(color);
    gl.line(x + width / 2, y, x, y + height);
    gl.line(x + width / 2, y, x + width, y + height);
    gl.line(x, y + height, x + width, y + height / 2);
    gl.line(x + width, y + height, x, y + height / 2);
    gl.line(x, y + height / 2, x + width, y + height / 2);
};
var drawPlatform = function (x, y, width, height, surfaceColor, baseColor) {
    gl.fill(baseColor);
    gl.rect(x, y, width, height);
    gl.fill(surfaceColor);
    gl.rect(x, y, width, height / 3.5);
};
drawStar(0, 0, 100, 100, 2, "blue");
drawStar(120, 0, 120, 120, 3, "red");
drawStar(260, 0, 150, 120, 1);
drawPlatform(0, 150, 120, 12, "blue", "red");
drawPlatform(50, 170, 110, 20, "yellow", "green");
drawPlatform(190, 190, 150, 15, "orange", "cyan");
