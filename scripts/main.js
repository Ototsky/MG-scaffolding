const burgerBtn = document.querySelector(".burger-menu");
const phoneMenu = document.querySelector(".phone-menu");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".close");
const preloader = document.querySelector(".preloader");
const phoneMenuBtns = document.querySelectorAll(".phone-ul li");

window.onload = function () {
  preloader.style.visibility = "hidden";
  preloader.style.display = "none";
};

burgerBtn.addEventListener("click", () => {
  phoneMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  phoneMenu.classList.remove("active");
  overlay.classList.remove("active");
});

phoneMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    phoneMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
