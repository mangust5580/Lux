const mainNavBtn = document.querySelector(".main-nav__btn");
const mainNavList = document.querySelector(".main-nav__list");

mainNavBtn.addEventListener("click", () => {
  mainNavList.classList.toggle("main-nav__list--show");
  mainNavBtn.classList.toggle("btn-burger");
  mainNavBtn.classList.toggle("btn-close");
});
