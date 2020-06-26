let cardButton = document.querySelector('.card__btn');
let countNumber = document.querySelector('.header-nav__count');
let counter = 0;

cardButton.onclick = function () {
  counter++;
  countNumber.textContent = counter;
  cardButton.classList.toggle('added');
};
