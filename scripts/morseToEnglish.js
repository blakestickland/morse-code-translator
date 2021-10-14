import { morseCodeList } from "./morseCodeList.js";
import { swapObjectKVP } from "./swapObjectKVP.js";

export const morseToEnglish = (userInput) => {
  // should throw error if no arguments
  if (userInput === undefined) {
    throw new Error("No args found");
  }

  const swappedMorseCodeList = swapObjectKVP(morseCodeList);

  const englishArray = userInput
    .split(" ")
    .map((character) => swappedMorseCodeList[character]);

  const englishString = englishArray.join("");

  return englishString;
};
