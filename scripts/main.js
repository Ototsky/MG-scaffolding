const burgerBtn = document.querySelector(".burger-menu");
const phoneMenu = document.querySelector(".phone-menu");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".close");
const preloader = document.querySelector('.preloader');

window.onload = function () {
  preloader.style.display = 'none';
}

burgerBtn.addEventListener("click", () => {
  phoneMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  phoneMenu.classList.remove("active");
  overlay.classList.remove("active");
});

