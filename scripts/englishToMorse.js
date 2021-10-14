import {morseCodeList} from "./morseCodeList.js";

export const englishToMorse = (userInput) => {
  console.log("from engToMorse", userInput);

  const morseArray = userInput
    .toLowerCase()
    .split("")
    .map((character) => morseCodeList[character]);

  // add a space after each letter
  const morseString = morseArray.join(" ");

  return morseString;
};
