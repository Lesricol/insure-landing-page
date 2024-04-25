// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";
import imageClose from "../assets/images/icon-close.svg";
import imageMenu from "../assets/images/icon-hamburger.svg";

const buttonElement = document.getElementById("button-menu");
const menuElement = document.getElementById("menu");

const handleMenu = () => {
  if (menuElement.classList.contains("menu--show")) {
    menuElement.classList.remove("menu--show");
    buttonElement.src = imageMenu;
  } else {
    menuElement.classList.add("menu--show");
    buttonElement.src = imageClose;
  }
};

buttonElement.addEventListener("click", handleMenu);
