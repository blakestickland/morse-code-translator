import {morseCodeList} from "./morseCodeList.js";

export const englishToMorse = (userInput) => {
  // should throw error if no arguments
  if (userInput === undefined) {
    throw new Error("No args found");
  }
  const morseArray = userInput
    .toLowerCase()
    .split("")
    .map((character) => morseCodeList[character]);

  // add a space after each letter
  const morseString = morseArray.join(" ");

  return morseString;
};
