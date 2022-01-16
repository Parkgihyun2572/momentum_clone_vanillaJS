const currentTimeSection = document.querySelector(".currentTimeSection div b");
const currentUserInputSection = document.querySelector(".currentUserInput");
const currentUserForm = document.querySelector(".currentUserInput form");
const currentUserInput = document.querySelector(".currentUserInput form input");

function timeHandler() {
    const currentTime = new Date();
    const currentHour = (currentTime.getHours()).toString();
    const currentMinute = (currentTime.getMinutes()).toString();

    currentTimeSection.innerText =
        `${currentHour.length == 1 ? currentHour.padStart(2, "0") : currentHour}:${currentMinute.length == 1 ? currentMinute.padStart(2, "0") : currentMinute}`;
}

function timePainter() {
    timeHandler();
    setInterval(timeHandler, 1000);
};

timePainter();
