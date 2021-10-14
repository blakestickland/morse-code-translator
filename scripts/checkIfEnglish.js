
export const checkIfEnglish = (text) => {
  let isEnglishText = false;
  const regex = /[A-Za-z0-9]/;

  // should throw error if no arguments
  if (text.trim() === undefined) {
    throw new Error("No args found");
  }

  // should check all characters in the userInput for alphanumeric characters
  // and symbols other than morse code symbols.
//   text.split("").map((char) => {
//     char.match(regex) ? isEnglishText : isEnglishText === false;
//   });
  return isEnglishText;
};