const currentToDoInput = document.querySelector(".toDoListInput form input");
const currentToDoForm = document.querySelector(".toDoListInput form");

const CURRENT_TODO = "currentToDo";

function toDoSectionHandler(event) {
    event.preventDefault();
    const currentToDoValue = currentToDoInput.value;
    document.querySelector(".toDoListInput form input").value = "";
    console.log(currentToDoValue);
}

function receiveToDo(event) {
    currentToDoForm.addEventListener("submit", toDoSectionHandler);
};


function checkCurrentToDos() {
    const currentToDo = localStorage.getItem(CURRENT_TODO);
    currentToDo == null ? receiveToDo() : showToDo();
    console.log(currentToDo);
};

checkCurrentToDos();