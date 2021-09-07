type CanvasType = CanvasRenderingContext2D;

// helper functions
export const stroke = (ctx: CanvasType, color: string) => {
  ctx.strokeStyle = color;
};

export const fill = (ctx: CanvasType, color: string) => {
  ctx.fillStyle = color;
};

export const lineWidth = (ctx: CanvasType, width: number) => {
  ctx.lineWidth = width;
};

// primary functions
export const line = (
  ctx: CanvasType,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void => {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
};

export const rect = (
  ctx: CanvasType,
  x: number,
  y: number,
  w: number,
  h: number,
  outline: boolean
): void => {
  outline ? ctx.strokeRect(x, y, w, h) : ctx.fillRect(x, y, w, h);
};

export const circle = (
  ctx: CanvasType,
  x: number,
  y: number,
  r: number, // radius of circle
  outline: boolean
): void => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  outline ? ctx.stroke() : ctx.fill();
};

export const triangle = (
  ctx: CanvasType,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  outline: boolean
): void => {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Vertex 1
  ctx.lineTo(x2, y2); // Vertex 2
  ctx.lineTo(x3, y3); // Vertex 3
  if (outline) {
    ctx.closePath();
    ctx.stroke();
  } else {
    ctx.fill();
  }
};

export const text = (
  ctx: CanvasType,
  message: string,
  x: number,
  y: number,
  outline: boolean
): void => {
  outline ? ctx.strokeText(message, x, y) : ctx.fillText(message, x, y);
};

export const ellipse = (
  ctx: CanvasType,
  x: number,
  y: number,
  xRadius: number,
  yRadius: number,
  rotation: number,
  outline: boolean
): void => {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  outline ? ctx.stroke() : ctx.fill();
};
