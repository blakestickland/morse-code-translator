import { renderTranslations } from "./renderTranslations.js";
import { englishToMorse } from "./englishToMorse.js";

  // create function to run on form submit
export const submitTranslation = async () => {
      // prevent default
      // event.preventDefault();
      
      // create variables to store the form data; one per field
      const translation = document.getElementById("translation").value;
      
      // translate english text to morse code
      const morseTranslation = englishToMorse(translation);
      
      // store the form data in an object
      const translationObject = {
        englishText: translation,
        morseCode: morseTranslation
      };

      // create varibale for current translations; it will be an array
      let currentTranslations = [];
      
      // check to see if data is already in sessionStorage; if so, assign it to the currenttranslations variable
      if (window.sessionStorage.getItem("translations")) {
        currentTranslations = await 
        JSON.parse(
          window.sessionStorage.getItem("translations")
          );
        };
        console.log("currentTranslations", currentTranslations)

      // add the new form data to the currenttranslations array; then update the "translations" key in sessionStorage with the new data.
      currentTranslations.push(translationObject);
      window.sessionStorage.setItem("translations", JSON.stringify(currentTranslations));

      renderTranslations(morseTranslation);
    };