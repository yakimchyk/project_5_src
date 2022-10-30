import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector('.menu-header__icon');
const menuBody = document.querySelector('.menu-header__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/