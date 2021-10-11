import { renderTranslations } from "./renderTranslations.js";

// create function for clearing messages
export const clearTranslations = (event) => {
  event.preventDefault();

  const storedTranslations = window.sessionStorage.getItem("translations");

  if (storedTranslations) {
    window.sessionStorage.removeItem("translations");
    return renderTranslations();
  } else {
    return;
  }
}
