// helper functions
export var stroke = function (ctx, color) {
    ctx.strokeStyle = color;
};
export var fill = function (ctx, color) {
    ctx.fillStyle = color;
};
export var lineWidth = function (ctx, width) {
    ctx.lineWidth = width;
};
// primary functions
export var line = function (ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Endpoint 1
    ctx.lineTo(x2, y2); // Endpoint 2
    ctx.stroke();
};
export var rect = function (ctx, x, y, w, h, outline) {
    outline ? ctx.strokeRect(x, y, w, h) : ctx.fillRect(x, y, w, h);
};
export var circle = function (ctx, x, y, r, // radius of circle
outline) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    outline ? ctx.stroke() : ctx.fill();
};
export var triangle = function (ctx, x1, y1, x2, y2, x3, y3, outline) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3
    if (outline) {
        ctx.closePath();
        ctx.stroke();
    }
    else {
        ctx.fill();
    }
};
export var text = function (ctx, message, x, y, outline) {
    outline ? ctx.strokeText(message, x, y) : ctx.fillText(message, x, y);
};
export var ellipse = function (ctx, x, y, xRadius, yRadius, rotation, outline) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    outline ? ctx.stroke() : ctx.fill();
};
