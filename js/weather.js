const API_KEY = "1f5449e689efbf71d0494977c9a095f0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}  |  ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("사용자의 정보를 찾을 수 없습니다. 위치 검색을 수락해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);