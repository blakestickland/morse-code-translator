import { renderTranslations } from "./renderTranslations.js";
import { checkUserInput } from "./checkUserInput.js";
import { getUserInput } from "./getUserInput.js";


  // create function to run on form submit
export const submitTranslation = () => {
  // prevent default
  // event.preventDefault();

  // UserInput is the taken from the text area whe the submit button is clicked.
  const userInput = getUserInput();

  let translationObject = checkUserInput(userInput);

  // create varibale for current translations; it will be an array
  let currentTranslations = [];

  // check to see if data is already in sessionStorage; if so, assign it to the currenttranslations variable
  if (window.sessionStorage.getItem("translations")) {
    currentTranslations = JSON.parse(
      window.sessionStorage.getItem("translations")
    );
  }
  console.log("currentTranslations", currentTranslations);

  // add the new form data to the currenttranslations array; then update the "translations" key in sessionStorage with the new data.
  currentTranslations.push(translationObject);
  window.sessionStorage.setItem(
    "translations",
    JSON.stringify(currentTranslations)
  );

  renderTranslations();
};