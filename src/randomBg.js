randomNum = Math.ceil(Math.random() * 5);

function getRandomBg() {
    document.body.setAttribute("style",
        `background-image: url("bgs/bg${randomNum}.jpg")`);
};

getRandomBg();

