const luminanceAnswer = document.getElementById("luminanceAnswer");
const rgbTextInput = document.getElementById(
  "rgbTextInput"
) as HTMLInputElement;
const rgbButtonInput = document.getElementById("rgbButtonInput");

const getLuminance = () => {
  // split passed rgb string into array (e.g. rgb(nnn, nnn, nnn) -> ["nnn", "nnn", "nnn"])
  const marker = "(";
  const numArr: Array<string | number> = rgbTextInput.value
    .split(marker)
    .pop()
    .slice(0, -1)
    .split(",");

  let Luminance = 0;

  const RGBcoeffiecients = [0.2126, 0.7152, 0.0722];

  // loop through input rgb string array
  for (let i = 0; i < numArr.length; i++) {
    // turn each string in array into number
    numArr[i] = parseFloat(numArr[i] as string);

    // turn 16bit rgb into 8bit
    (numArr[i] as number) /= 255;

    // apply formula
    if (numArr[i] <= 0.04045) {
      (numArr[i] as number) /= 12.92;
    } else {
      numArr[i] = (((numArr[i] as number) + 0.055) / 1.055) ** 2.4;
    }

    // each channel gets multiplied by their corrosponding coefficient
    (numArr[i] as number) *= RGBcoeffiecients[i];

    // add each 8-bit channel to Luminance
    Luminance += numArr[i] as number;
  }

  // return rounded answer
  luminanceAnswer.innerHTML = `Luminance (Rounded to four decimal places): ${Luminance.toFixed(
    4
  )}`;
};

rgbButtonInput.addEventListener("click", getLuminance);
