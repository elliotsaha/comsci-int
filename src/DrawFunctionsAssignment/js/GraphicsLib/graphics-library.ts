type CanvasType = CanvasRenderingContext2D;

class GraphicsLib {
  ctx: CanvasType;
  constructor(ctx: CanvasType) {
    this.ctx = ctx;
  }

  // helper functions
  stroke = (color: string): void => {
    this.ctx.strokeStyle = color;
  };

  fill = (color: string): void => {
    this.ctx.fillStyle = color;
  };

  lineWidth = (width: number): void => {
    this.ctx.lineWidth = width;
  };

  // primary functions

  line = (x1: number, y1: number, x2: number, y2: number): void => {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1); // Endpoint 1
    this.ctx.lineTo(x2, y2); // Endpoint 2
    this.ctx.stroke();
  };

  rect = (
    x: number,
    y: number,
    w: number,
    h: number,
    outline: boolean = false
  ): void => {
    outline ? this.ctx.strokeRect(x, y, w, h) : this.ctx.fillRect(x, y, w, h);
  };

  circle = (
    x: number,
    y: number,
    r: number, // radius of circle
    outline: boolean = false
  ): void => {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    outline ? this.ctx.stroke() : this.ctx.fill();
  };

  triangle = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    outline: boolean = false
  ): void => {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1); // Vertex 1
    this.ctx.lineTo(x2, y2); // Vertex 2
    this.ctx.lineTo(x3, y3); // Vertex 3
    if (outline) {
      this.ctx.closePath();
      this.ctx.stroke();
    } else {
      this.ctx.fill();
    }
  };

  text = (message: string, x: number, y: number, outline: boolean): void => {
    outline
      ? this.ctx.strokeText(message, x, y)
      : this.ctx.fillText(message, x, y);
  };

  ellipse = (
    x: number,
    y: number,
    xRadius: number,
    yRadius: number,
    rotation: number,
    outline: boolean = false
  ): void => {
    this.ctx.beginPath();
    this.ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    outline ? this.ctx.stroke() : this.ctx.fill();
  };
}

export default GraphicsLib;
