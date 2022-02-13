const currentToDoInput = document.querySelector(".toDoListInput form input");
const currentToDoForm = document.querySelector(".toDoListInput form");

const CURRENT_TODO = "currentToDo";
const MAINFOCUS = "mainFocus";

function toDoSectionHandler(event) {
    event.preventDefault();
    const currentToDoValue = currentToDoInput.value;
    document.querySelector(".toDoListInput form input").value = "";
    localStorage.setItem(MAINFOCUS, currentToDoValue);
    showToDo();
};

function showToDo() {
    const currentToDo = localStorage.getItem(CURRENT_TODO);
    const div = document.createElement("div");
    // const showToDoDiv = div.
}

function receiveToDo() {
    currentToDoForm.addEventListener("submit", toDoSectionHandler);
};


function checkCurrentToDos() {
    const currentToDo = localStorage.getItem(CURRENT_TODO);
    currentToDo == null ? receiveToDo() : showToDo();
    console.log(currentToDo);
};

checkCurrentToDos();