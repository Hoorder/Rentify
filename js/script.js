const editButtons = document.querySelectorAll("#editButton");
const editExitButton = document.querySelector("#exitBtn");
const editContainer = document.querySelector(".edit__container");

editButtons.forEach(editButton => (editButton.addEventListener('click', ()=> {
    editContainer.classList.add("edit__container--visible");
})))

editExitButton.addEventListener('click', ()=> {
    editContainer.classList.remove("edit__container--visible");
})