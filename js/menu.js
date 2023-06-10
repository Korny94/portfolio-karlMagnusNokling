const hamMenu = document.querySelector("#hamMenu");
const menuContainer = document.querySelector("#menuContainer");
const cardContainer = document.querySelector("#cardContainer");

let menuOpen = false;

hamMenu.onclick = function (event) {
  if (menuOpen) {
    hideMenu();
  } else {
    showMenu();
  }
};

function showMenu() {
  menuContainer.style.display = "flex";
  cardContainer.style.marginRight = "20vw";
  menuOpen = true;

  // Add event listener to the document to handle clicks outside of menuContainer
  document.addEventListener("click", clickOutsideMenu);
}

function hideMenu() {
  menuContainer.style.display = "none";
  cardContainer.style.marginRight = "0";
  menuOpen = false;

  // Remove event listener from the document
  document.removeEventListener("click", clickOutsideMenu);
}

function clickOutsideMenu(event) {
  const targetElement = event.target;

  // Check if the clicked element is outside the menuContainer and hamMenu
  if (
    !menuContainer.contains(targetElement) &&
    !hamMenu.contains(targetElement)
  ) {
    hideMenu();
  }
}
