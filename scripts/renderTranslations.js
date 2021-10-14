
export const renderTranslations = () => {
  let currentTranslations = [];
  let storedTranslations = window.sessionStorage.getItem("translations");
  if (storedTranslations) {
    currentTranslations = JSON.parse(storedTranslations)
  };
  let listItems = [];
  for (let i = currentTranslations.length -1 ; i >= 0; i--) {
    let listItem = "";
    const currentTranslation = currentTranslations[i];
    
    listItem += `<dd class="english">${currentTranslation.englishText}</dd>`;
    listItem += `<dd class="morse">${currentTranslation.morseCode}</dd>`;
    listItem += `<br />`;
    // const translationDiv = document.createElement("div");
    // translationDiv.setAttribute("class", "translationDiv");
    // translationDiv.appendChild()
    listItems.push(listItem);
  }
  console.log(currentTranslations);

  let descList = document.getElementById("currentTranslations");
  descList.innerHTML = listItems.join("");
}
