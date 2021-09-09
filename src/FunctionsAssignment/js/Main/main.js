"use strict";
var luminanceAnswer = document.getElementById("luminanceAnswer");
var rgbTextInput = document.getElementById("rgbTextInput");
var rgbButtonInput = document.getElementById("rgbButtonInput");
var getLuminance = function () {
    // split passed rgb string into array (e.g. rgb(nnn, nnn, nnn) -> ["nnn", "nnn", "nnn"])
    var marker = "(";
    var numArr = rgbTextInput.value
        .split(marker)
        .pop()
        .slice(0, -1)
        .split(",");
    var Luminance = 0;
    var RGBcoeffiecients = [0.2126, 0.7152, 0.0722];
    for (var i = 0; i < numArr.length; i++) {
        // turn each string in array into number
        numArr[i] = parseFloat(numArr[i]);
        numArr[i] /= 255; // turn 16bit rgb into 8bit
        if (numArr[i] <= 0.04045) {
            numArr[i] /= 12.92;
        }
        else {
            numArr[i] = Math.pow(((numArr[i] + 0.055) / 1.055), 2.4);
        }
        numArr[i] *= RGBcoeffiecients[i];
        Luminance += numArr[i];
    }
    luminanceAnswer.innerHTML = "Luminance: " + Luminance;
};
rgbButtonInput.addEventListener("click", getLuminance);
