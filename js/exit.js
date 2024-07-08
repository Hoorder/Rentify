const exitButton = document.querySelector("#navigation--exit");
const hamburger = document.querySelector("#hamburger--icon")
const navigation = document.querySelector("#navigation");

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('navigation--show');
    navigation.style.transform = "translateX(0px)";
})

exitButton.addEventListener('click', () => {
    navigation.style.transform = "translateX(-300px)";
})

var currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;