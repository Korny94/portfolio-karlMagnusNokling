const hamMenu = document.querySelector("#hamMenu");
const menuContainer = document.querySelector("#menuContainer");
const cardContainer = document.querySelector("#cardContainer");

let menuCount = 0;

hamMenu.onclick = function () {
  menuCount++;
  if (menuCount % 2 === 0) {
    menuContainer.style.display = "none";
    cardContainer.style.marginRight = "0";
  } else {
    menuContainer.style.display = "flex";
    cardContainer.style.marginRight = "20vw";
  }
};
