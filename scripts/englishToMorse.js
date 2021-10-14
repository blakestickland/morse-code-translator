import {morseCodeList} from "./morseCodeList.js";

export const englishToMorse = (translation) => {
    console.log("from engToMorse", translation);

    const morseArray = translation
        .toLowerCase()
        .split("")
        .map(character => morseCodeList[character]);


    const morseString = morseArray.join(" "); // add a space after each letter

    console.log("morse", morseString);
    return morseString;
};
