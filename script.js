const footerYearEl = document.querySelector('.footer__year')
let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;

const faEl = document.querySelector('.fa-bars');
const navEl = document.querySelector('.nav');

faEl.addEventListener('click', function (e) {
    navEl.style.left = 0;
});

const closeEl = document.querySelector('.fa-xmark');

closeEl.addEventListener('click', function (e) {
    navEl.style.left = '-100%';
});