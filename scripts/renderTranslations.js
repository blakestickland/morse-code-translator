
export const renderTranslations = (translatedText) => {
  let currentTranslations = [];
  let storedTranslations = window.sessionStorage.getItem("translations");
  if (storedTranslations) {
    currentTranslations = JSON.parse(storedTranslations)
  };
  let listItems = [];
  for (let i = currentTranslations.length -1 ; i >= 0; i--) {
    let listItem = "";
    const currentTranslation = currentTranslations[i];
    
    listItem += `<dd>${currentTranslation.englishText}</dd>`;
    listItem += `<dd>${currentTranslation.morseCode}</dd>`;
    listItem += `<br />`;
    listItems.push(listItem);
  }
  console.log(currentTranslations);

  let descList = document.getElementById("currentTranslations");
  descList.innerHTML = listItems.join("");
}
