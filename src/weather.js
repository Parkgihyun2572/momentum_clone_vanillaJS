function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
}

function onGeoError() {
    alert("Can't find you. No wearher for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);