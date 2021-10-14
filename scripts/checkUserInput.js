import { englishToMorse } from "./englishToMorse.js";
import { morseToEnglish } from "./morseToEnglish.js";
import { getUserInput } from "./getUserInput.js";
import { checkIfEnglish } from "./checkIfEnglish.js";

// Create test cases for the user input.
// check if it is English text or morse code input.
// if it is morse code, perform checks to look for:
//  ** a single space is used between each morse character.
//  ** a forward-space is used as a space between words.

export const checkUserInput = () => {
    
    // UserInput is the taken from the text area whe the submit button is clicked.
     const userInput = getUserInput();

     const isEnglishText = checkIfEnglish(userInput); // will return a boolean;

     console.log("isEnglishText", isEnglishText);
     
     // instantiate an object which will store the userInput and the translation;
     const translationObject = {
       englishText: "",
       morseCode: ""
     };

     if (isEnglishText) {
           console.log("includes alphaNumeric characters so must be English");
           // store userInput as english text in object
           translationObject.englishText = userInput;
           // translate english text to morse code and store in object
           translationObject.morseCode = englishToMorse(userInput);
         } else {
           console.log("includes alphaNumeric characters so must be English");
           translationObject.morseCode = userInput;
           translationObject.englishText = morseToEnglish(userInput);
       }
    return translationObject;
}