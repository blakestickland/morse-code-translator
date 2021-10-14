import { morseCodeList } from "./morseCodeList.js";
import { swapObjectKVP } from "./swapObjectKVP.js";

export const morseToEnglish = (userInput) => {

  const swappedMorseCodeList = swapObjectKVP(morseCodeList);

  const englishArray = userInput
    .split(" ")
    .map((character) => swappedMorseCodeList[character]);

  const englishString = englishArray.join(""); 

  return englishString;
};
