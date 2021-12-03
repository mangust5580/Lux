const mainNavBtn = document.querySelector(".main-nav__btn");
const mainNavList = document.querySelector(".main-nav__list");

const handlerMenu = (evt) => {
  const target = evt.target;
  mainNavList.classList.toggle("main-nav__list--show");
  target.classList.toggle("btn-burger");
  target.classList.toggle("btn-close");
};

mainNavBtn.addEventListener("click", handlerMenu);
