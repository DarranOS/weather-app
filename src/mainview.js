import { default as api } from "./api";

export default (function mainview() {
  console.log("Mainview");
  const body = document.getElementById("app");

  const createSearchField = () => {
    const searchInputDiv = document.createElement("div");
    searchInputDiv.classList.add("search");

    const searchInputText = document.createElement("input");
    searchInputText.classList.add("search-input");

    searchInputText.setAttribute("placeholder", "Where?");
    searchInputDiv.appendChild(searchInputText);

    searchInputText.addEventListener("change", (e) => api(e.target.value));
    return searchInputDiv;

    // Add Event Listeners for Search Input
  };

  body.appendChild(createSearchField());
})();
