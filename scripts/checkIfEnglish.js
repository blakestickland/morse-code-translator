
export const checkIfEnglish = (text) => {
    // should throw error if no arguments
    if (text === undefined) {
        throw new Error("No args found");
    }

    // should check all characters in the userInput for alphanumeric characters
    // and symbols other than morse code symbols.
    let isEnglishText = true;
    const regex = /[A-Za-z0-9,?'()&:;=+_"$!@]/;

    text.replace(/\s/g)
        .split("")
        .map((char) => {
            char.match(regex) ? 
            isEnglishText : 
            isEnglishText = false;
        });

    return isEnglishText;
};