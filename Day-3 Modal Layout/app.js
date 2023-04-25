const btnOpen = document.querySelector(".openModal");
const modal = document.querySelector(".modal");
const iconClose = document.querySelector(".modal__header--close");
const btnClose = document.querySelector(".modal__footer--close");

console.log(modal.classList.contains("show"));

const toggleShow = (e) => {
  modal.classList.toggle("show");
};

btnOpen.addEventListener("click", toggleShow);
iconClose.addEventListener("click", toggleShow);
btnClose.addEventListener("click", toggleShow);
modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return toggleShow();
});
