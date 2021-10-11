
export const renderTranslations = () => {
  let currentTranslations = [];
  let storedTranslations = window.sessionStorage.getItem("translations");
  if (storedTranslations) {
    currentTranslations = JSON.parse(storedTranslations)
  };
  let listItems = [];
  for (let i = 0; i < currentTranslations.length; i++) {
    console.log(currentTranslations)
    let listItem = "";
    const currentTranslation = currentTranslations[i];

    listItem += `<dd>${currentTranslation.translation}</dd>`;
    listItem += `<br />`;
    listItems.push(listItem);
  }

  let descList = document.getElementById("currentTranslations");
  descList.innerHTML = listItems.join("");
}
