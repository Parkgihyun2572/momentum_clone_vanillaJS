const welcomeUserSection = document.querySelector(".welcomeUser");
const welcomeUser = document.querySelector(".welcomeUser p");

const CURRENT_USER = "currentUser";

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
    currentUserInputSection.classList.toggle("hidden");
    welcomeUserSection.classList.toggle("hidden");
}

function checkCurrentUser() {
    currentUser = localStorage.getItem(CURRENT_USER);
    currentUser == null ? receiveUsername() : showCurrentUser();
    console.log(currentUser);
}

checkCurrentUser();