const welcomeUserSection = document.querySelector(".welcomeUser");
const welcomeUser = document.querySelector(".welcomeUser p");
const toDoListSection = document.querySelector(".toDoListSection");
const currentUserInputSection = document.querySelector(".currentUserInput");
const currentUserForm = document.querySelector(".currentUserInput form");
const currentUserInput = document.querySelector(".currentUserInput form input");

const CURRENT_USER = "currentUser";
const CLASSNAME_HIDDEN = "hidden";

function userSectionHandler(event) {
    event.preventDefault();
    const currentUsername = currentUserInput.value;
    document.querySelector(".currentUserInput form input").value = "";
    localStorage.setItem(CURRENT_USER, currentUsername);
    showCurrentUser();
}

function receiveUsername() {
    currentUserForm.addEventListener("submit", userSectionHandler);
}

function showCurrentUser() {
    currentUser = localStorage.getItem(CURRENT_USER);
    welcomeUser.innerText = `Good Day! ${currentUser}`;
    currentUserInputSection.classList.toggle(CLASSNAME_HIDDEN);
    welcomeUserSection.classList.toggle(CLASSNAME_HIDDEN);
    toDoListSection.classList.toggle(CLASSNAME_HIDDEN);
}

function checkCurrentUser() {
    currentUser = localStorage.getItem(CURRENT_USER);
    currentUser == null ? receiveUsername() : showCurrentUser();
    console.log(currentUser);
}

checkCurrentUser();