const API_KEY = "6c03ebfcd5a9176af2b683887a609f2c";

function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".currentWeatherSection span:first-child");
            const location = document.querySelector(".currentWeatherSection span:last-child");
            location.innerText = data.name;
            weather.innerText = data.weather[0].main;
            console.log(location, weather);
        });
}

function onGeoError() {
    alert("Can't find you. No wearher for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);