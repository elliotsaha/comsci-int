import GraphicsLib from "../GraphicsLib/graphics-library.js";

let cnv = document.getElementById("cnv") as HTMLCanvasElement;
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Initialize graphics library with ctx
const gl = new GraphicsLib(ctx);

interface SnowflakeProps {
  x: number;
  y: number;
  size: number;
  xSpeed: number;
  ySpeed: number;
  xDir: "r" | "l"; // is the snowflake going left or right
}

const snowflakes: Array<SnowflakeProps> = [];
const snowflakesAmount = 20;

const genRandomSnowflake = (): SnowflakeProps => ({
  x: Math.random() * cnv.width,
  y: Math.random() * cnv.height,
  size: Math.max(Math.random() * 4, 1.5), // min size of 1.5 for visibility
  xSpeed: Math.random() * 1.5,
  ySpeed: Math.random() * 1.5,
  // determines whether snowflake has a positive or a negative x direction
  xDir: Math.round(Math.random()) === 1 ? ("r" as "r") : ("l" as "l"),
});

const pushRandomSnowflake = (): void => {
  const randomSnowflake: SnowflakeProps = genRandomSnowflake();
  snowflakes.push(randomSnowflake);
};

// Initial Snowflakes
for (let i = 0; i < snowflakesAmount; i++) {
  pushRandomSnowflake();
}

const drawSnowflakes = () => {
  // clear canvas for new frame
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // background
  gl.rect(0, 0, cnv.width, cnv.height, false, "black");

  // generate initial snowflakes
  for (let i = 0; i < snowflakes.length; i++) {
    gl.circle(
      snowflakes[i].x,
      snowflakes[i].y,
      snowflakes[i].size,
      false,
      "white"
    );
  }
};

// adds snowflake on any keyboard or mouse input
const addSnowflakeOnInput = () => {
  document.addEventListener("keydown", () => {
    pushRandomSnowflake();
  });

  document.addEventListener("mousedown", () => {
    pushRandomSnowflake();
  });
};

const updateSnowflakes = () => {
  for (let i = 0; i < snowflakes.length; i++) {
    // change xSpeed based on direction
    if (snowflakes[i].xDir === "r") {
      snowflakes[i].x += snowflakes[i].xSpeed; // snowflake goes in right direction
    } else {
      snowflakes[i].x -= snowflakes[i].xSpeed; // snowflake goes in left direction
    }

    // if snowflake hits right wall change direction to left
    if (snowflakes[i].x >= cnv.width) {
      snowflakes[i].xDir = "l";
    }

    // if snowflake hits left wall change direction to right
    if (snowflakes[i].x <= 0) {
      snowflakes[i].xDir = "r";
    }

    /*
     * snowflake does not bounce when hitting top or bottom of canvas so
     * ySpeed is constantly incrementing
     */
    snowflakes[i].y += snowflakes[i].ySpeed;
    // teleport snowflake to random x position and set y position to 10px above canvas
    if (snowflakes[i].y >= cnv.height) {
      snowflakes[i].y = -10;
      const randX = Math.random() * cnv.width;
      snowflakes[i].x = randX;
    }
  }
};

const programLoop = () => {
  updateSnowflakes();
  drawSnowflakes();

  // calls itself recursively after each frame
  window.requestAnimationFrame(programLoop);
};

/*
 * outside of program loop to ensure it does not
 * run multiple times on a single call
 * */
addSnowflakeOnInput();

// start loop when window is rendered
window.onload = () => window.requestAnimationFrame(programLoop);
