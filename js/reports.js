const money = document.querySelector("#moneyCheckbox");
const apartament = document.querySelector("#apartamentCheckbox");
const tentants = document.querySelector("#tentantsCheckbox");

const moneyContainer = document.querySelector("#moneyContainer");
const apartamentContainer = document.querySelector("#apartamentContainer");
const tentantsContainer = document.querySelector("#tentantsContainer");

money.addEventListener('click', () => {
    moneyContainer.classList.toggle("checkbox__item--none");
})
apartament.addEventListener('click', () => {
    apartamentContainer.classList.toggle("checkbox__item--none");
})
tentants.addEventListener('click', () => {
    tentantsContainer.classList.toggle("checkbox__item--none");
})