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
    // loop through input rgb string array
    for (var i = 0; i < numArr.length; i++) {
        // turn each string in array into number
        numArr[i] = parseFloat(numArr[i]);
        // turn 16bit rgb into 8bit
        numArr[i] /= 255;
        // apply formula
        if (numArr[i] <= 0.04045) {
            numArr[i] /= 12.92;
        }
        else {
            numArr[i] = Math.pow(((numArr[i] + 0.055) / 1.055), 2.4);
        }
        // each channel gets multiplied by their corrosponding coefficient
        numArr[i] *= RGBcoeffiecients[i];
        // add each 8-bit channel to Luminance
        Luminance += numArr[i];
    }
    // return rounded answer
    luminanceAnswer.innerHTML = "Luminance (Rounded to four decimal places): " + Luminance.toFixed(4);
};
rgbButtonInput.addEventListener("click", getLuminance);
