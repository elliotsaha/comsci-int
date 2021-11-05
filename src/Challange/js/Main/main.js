import GraphicsLib from "../GraphicsLib/graphics-library.js";
var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
var stars = [];
var starSize = 5;
// Initialize graphics library with ctx
var gl = new GraphicsLib(ctx);
var mousePos = { x: 0, y: 0 };
var undoStar = function () {
    document.addEventListener("keydown", function (evt) {
        // 'U' key
        if (evt.keyCode === 85 && stars.length > 0) {
            stars.pop();
        }
    });
};
var trackMousePos = function () {
    var getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top,
        };
    };
    cnv.addEventListener("mousemove", function (evt) {
        mousePos = getMousePos(cnv, evt);
    }, false);
};
var addStarOnClick = function () {
    document.addEventListener("mousedown", function () {
        if (mousePos.x <= cnv.width && mousePos.y <= cnv.height) {
            stars.push(mousePos);
        }
    });
};
var drawCnv = function () {
    // clear canvas for new frame
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    // background
    gl.rect(0, 0, cnv.width, cnv.height, false, "black");
    // track mouse cursor with ball if stars array is empty
    gl.circle(mousePos.x, mousePos.y, starSize, false, "white");
    // display all stars
    for (var i = 0; i < stars.length; i++) {
        gl.circle(stars[i].x, stars[i].y, starSize, false, "white");
        if (stars[i + 1]) {
            gl.line(stars[i].x, stars[i].y, stars[i + 1].x, stars[i + 1].y);
        }
        else {
            gl.line(stars[i].x, stars[i].y, mousePos.x, mousePos.y);
        }
    }
};
var programLoop = function () {
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
window.onload = function () { return window.requestAnimationFrame(programLoop); };
