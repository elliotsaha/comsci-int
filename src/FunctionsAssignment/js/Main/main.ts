const luminanceAnswer = document.getElementById("luminanceAnswer");
const rgbTextInput = document.getElementById(
  "rgbTextInput"
) as HTMLInputElement;
const rgbButtonInput = document.getElementById("rgbButtonInput");

// converts rgb string into number array
const rgbStringParser = (
  rgbString: HTMLInputElement,
  eightBit: boolean
): Array<string | number> => {
  // split passed rgb string into array (e.g. rgb(nnn, nnn, nnn) -> ["nnn", "nnn", "nnn"])
  const marker = "(";
  const numArr: Array<string | number> = rgbString.value
    .split(marker)
    .pop()
    .slice(0, -1)
    .split(",");
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseFloat(numArr[i] as string);
    if (eightBit) {
      (numArr[i] as number) /= 255;
    }
  }

  return numArr;
};

const applyChannelFormula = (rgb8BitArray: Array<number>): Array<number> => {
  const RGBcoeffiecients = [0.2126, 0.7152, 0.0722];
  // loop through input rgb string array
  for (let i = 0; i < rgb8BitArray.length; i++) {
    // apply formula
    if (rgb8BitArray[i] <= 0.04045) {
      (rgb8BitArray[i] as number) /= 12.92;
    } else {
      rgb8BitArray[i] = (((rgb8BitArray[i] as number) + 0.055) / 1.055) ** 2.4;
    }

    // each channel gets multiplied by their corrosponding coefficient
    (rgb8BitArray[i] as number) *= RGBcoeffiecients[i];
  }
  return rgb8BitArray;
};

const getLuminance = () => {
  const numArr = rgbStringParser(rgbTextInput, true);
  const channelManipulatedArr = applyChannelFormula(numArr as Array<number>);

  // add up channels to single luminance value
  let Luminance = 0;
  for (let i = 0; i < channelManipulatedArr.length; i++) {
    Luminance += channelManipulatedArr[i];
  }

  // return rounded answer
  luminanceAnswer.innerHTML = `Luminance (Rounded to four decimal places): ${Luminance.toFixed(
    4
  )}`;
};

rgbButtonInput.addEventListener("click", getLuminance);
