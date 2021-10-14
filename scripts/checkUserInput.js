import { englishToMorse } from "./englishToMorse.js";
import { morseToEnglish } from "./morseToEnglish.js";
import { checkIfEnglish } from "./checkIfEnglish.js";

export const checkUserInput = (userInput) => {
  // should throw error if no arguments
  if (userInput === undefined) {
    throw new Error("No args found");
  }

  const isEnglishText = checkIfEnglish(userInput); // will return a boolean;

  // instantiate an object which will store the userInput and the translation;
  const translationObject = {
    englishText: "",
    morseCode: "",
  };

  if (isEnglishText) {
    // store userInput as english text in object
    translationObject.englishText = userInput;
    // translate english text to morse code and store in object
    translationObject.morseCode = englishToMorse(userInput);
  } else {
    console.log("includes alphaNumeric characters so must be English");
    translationObject.morseCode = userInput;
    translationObject.englishText = morseToEnglish(userInput);
  }
  console.log(translationObject);
  return translationObject;
};