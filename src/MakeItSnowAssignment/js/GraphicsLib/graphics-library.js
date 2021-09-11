var GraphicsLib = /** @class */ (function () {
    function GraphicsLib(ctx) {
        var _this = this;
        // helper functions
        this.stroke = function (color) {
            _this.ctx.strokeStyle = color;
        };
        this.fill = function (color) {
            _this.ctx.fillStyle = color;
        };
        this.lineWidth = function (width) {
            _this.ctx.lineWidth = width;
        };
        // primary functions
        this.line = function (x1, y1, x2, y2) {
            _this.ctx.beginPath();
            _this.ctx.moveTo(x1, y1); // Endpoint 1
            _this.ctx.lineTo(x2, y2); // Endpoint 2
            _this.ctx.stroke();
        };
        this.rect = function (x, y, w, h, outline, color) {
            if (outline === void 0) { outline = false; }
            color ? _this.fill(color) : null;
            outline ? _this.ctx.strokeRect(x, y, w, h) : _this.ctx.fillRect(x, y, w, h);
        };
        this.circle = function (x, y, r, // radius of circle
        outline, color) {
            if (outline === void 0) { outline = false; }
            _this.ctx.beginPath();
            _this.ctx.arc(x, y, r, 0, 2 * Math.PI);
            color ? _this.fill(color) : null;
            outline ? _this.ctx.stroke() : _this.ctx.fill();
        };
        this.triangle = function (x1, y1, x2, y2, x3, y3, outline) {
            if (outline === void 0) { outline = false; }
            _this.ctx.beginPath();
            _this.ctx.moveTo(x1, y1); // Vertex 1
            _this.ctx.lineTo(x2, y2); // Vertex 2
            _this.ctx.lineTo(x3, y3); // Vertex 3
            if (outline) {
                _this.ctx.closePath();
                _this.ctx.stroke();
            }
            else {
                _this.ctx.fill();
            }
        };
        this.text = function (message, x, y, outline) {
            outline
                ? _this.ctx.strokeText(message, x, y)
                : _this.ctx.fillText(message, x, y);
        };
        this.ellipse = function (x, y, xRadius, yRadius, rotation, outline) {
            if (outline === void 0) { outline = false; }
            _this.ctx.beginPath();
            _this.ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
            outline ? _this.ctx.stroke() : _this.ctx.fill();
        };
        this.ctx = ctx;
    }
    return GraphicsLib;
}());
export default GraphicsLib;
