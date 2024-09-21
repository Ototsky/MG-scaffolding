const burgerBtn = document.querySelector(".burger-menu");
const phoneMenu = document.querySelector(".phone-menu");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".close");

burgerBtn.addEventListener("click", () => {
  phoneMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  phoneMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// for touch screens

// burgerBtn.addEventListener("touchstart", () => {
//   phoneMenu.classList.add("active");
//   overlay.classList.add("active");
// });

// closeBtn.addEventListener("touchstart", () => {
//   phoneMenu.classList.remove("active");
//   overlay.classList.remove("active");
// });
