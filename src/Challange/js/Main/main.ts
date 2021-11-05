import GraphicsLib from "../GraphicsLib/graphics-library.js";

let cnv = document.getElementById("cnv") as HTMLCanvasElement;
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

const stars: Array<Record<string, number>> = [];
const starSize = 5;
// Initialize graphics library with ctx
const gl = new GraphicsLib(ctx);
let mousePos = { x: 0, y: 0 };

const undoStar = () => {
  document.addEventListener("keydown", (evt) => {
    // 'U' key
    if (evt.keyCode === 85 && stars.length > 0) {
      stars.pop();
    }
  });
};
const trackMousePos = () => {
  const getMousePos = (canvas: HTMLCanvasElement, evt: MouseEvent) => {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  };

  cnv.addEventListener(
    "mousemove",
    (evt: MouseEvent) => {
      mousePos = getMousePos(cnv, evt);
    },
    false
  );
};

const addStarOnClick = () => {
  document.addEventListener("mousedown", () => {
    if (mousePos.x <= cnv.width && mousePos.y <= cnv.height) {
      stars.push(mousePos);
    }
  });
};

const drawCnv = () => {
  // clear canvas for new frame
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // background
  gl.rect(0, 0, cnv.width, cnv.height, false, "black");

  // track mouse cursor with ball if stars array is empty
  gl.circle(mousePos.x, mousePos.y, starSize, false, "white");

  // display all stars
  for (let i = 0; i < stars.length; i++) {
    gl.circle(stars[i].x, stars[i].y, starSize, false, "white");

    if (stars[i + 1]) {
      gl.line(stars[i].x, stars[i].y, stars[i + 1].x, stars[i + 1].y);
    } else {
      gl.line(stars[i].x, stars[i].y, mousePos.x, mousePos.y);
    }
  }
};

const programLoop = () => {
  drawCnv();
  // calls itself recursively after each frame
  window.requestAnimationFrame(programLoop);
};

/*
 * outside of program loop to ensure it does not
 * run multiple times on a single call
 * */
trackMousePos();
addStarOnClick();
undoStar();
// start loop when window is rendered
window.onload = () => window.requestAnimationFrame(programLoop);
