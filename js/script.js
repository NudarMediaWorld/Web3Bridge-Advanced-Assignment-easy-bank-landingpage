// Selectors 
let harmburger = document.querySelector(".harmburger");
let menu = document.querySelector(".menu");

// Events
harmburger.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);

// Functions
function openMenu() {
    menu.classList.remove("hide");
    icon.src = "images/icon-close.svg";
}
function closeMenu() {
    menu.classList.add("hide");
    icon.src = "images/icon-hamburger.svg";
}