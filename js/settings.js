const resetPasswordButton = document.querySelector("#passwordChange");
const resetPasswordContainer = document.querySelector("#settings__forms--password__container");

resetPasswordButton.addEventListener('click', ()=> {
    resetPasswordContainer.classList.toggle("settings__form--none")
})