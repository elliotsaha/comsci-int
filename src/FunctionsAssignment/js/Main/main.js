"use strict";
var luminanceAnswer = document.getElementById("luminanceAnswer");
var rgbTextInput = document.getElementById("rgbTextInput");
var rgbButtonInput = document.getElementById("rgbButtonInput");
// converts rgb string into number array
var rgbStringParser = function (rgbString, eightBit) {
    // split passed rgb string into array (e.g. rgb(nnn, nnn, nnn) -> ["nnn", "nnn", "nnn"])
    var marker = "(";
    var numArr = rgbString.value
        .split(marker)
        .pop()
        .slice(0, -1)
        .split(",");
    for (var i = 0; i < numArr.length; i++) {
        numArr[i] = parseFloat(numArr[i]);
        if (eightBit) {
            numArr[i] /= 255;
        }
    }
    return numArr;
};
var applyChannelFormula = function (rgb8BitArray) {
    var RGBcoeffiecients = [0.2126, 0.7152, 0.0722];
    // loop through input rgb string array
    for (var i = 0; i < rgb8BitArray.length; i++) {
        // apply formula
        if (rgb8BitArray[i] <= 0.04045) {
            rgb8BitArray[i] /= 12.92;
        }
        else {
            rgb8BitArray[i] = Math.pow(((rgb8BitArray[i] + 0.055) / 1.055), 2.4);
        }
        // each channel gets multiplied by their corrosponding coefficient
        rgb8BitArray[i] *= RGBcoeffiecients[i];
    }
    return rgb8BitArray;
};
var getLuminance = function () {
    var numArr = rgbStringParser(rgbTextInput, true);
    var channelManipulatedArr = applyChannelFormula(numArr);
    // add up channels to single luminance value
    var Luminance = 0;
    for (var i = 0; i < channelManipulatedArr.length; i++) {
        Luminance += channelManipulatedArr[i];
    }
    // return rounded answer
    return Luminance.toFixed(4);
};
var renderLuminance = function () {
    var result = getLuminance();
    luminanceAnswer.innerHTML = "Luminance (Rounded to four decimal places): " + result;
};
rgbButtonInput.addEventListener("click", renderLuminance);
