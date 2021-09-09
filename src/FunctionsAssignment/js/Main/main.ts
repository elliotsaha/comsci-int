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
  for (let i = 0; i < numArr.length; i++) {
    // turn each string in array into number
    numArr[i] = parseFloat(numArr[i] as string);
    (numArr[i] as number) /= 255; // turn 16bit rgb into 8bit
    if (numArr[i] <= 0.04045) {
      (numArr[i] as number) /= 12.92;
    } else {
      numArr[i] = (((numArr[i] as number) + 0.055) / 1.055) ** 2.4;
    }
    (numArr[i] as number) *= RGBcoeffiecients[i];
    Luminance += numArr[i] as number;
  }

  luminanceAnswer.innerHTML = `Luminance: ${Luminance}`;
};

rgbButtonInput.addEventListener("click", getLuminance);
