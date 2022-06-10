const API_KEY = "8537670ff1a19fa7397d4b66d19a0a7d"; 
const COORDS = 'coords'; //좌표를 받을 변수 
var imgArray = new Array();
        imgArray[0] = "https://cdn.pixabay.com/photo/2019/04/11/13/38/blue-4119805_1280.jpg";
        imgArray[1] = "img/back1.jpg";
        imgArray[2] = "img/back2.jpg";
        imgArray[3] = "img/back3.jpg";
        imgArray[4] = "https://cdn.pixabay.com/photo/2018/07/15/05/25/night-view-3538984_1280.jpg";

//DOM객체들 
const weatherInfo = document.querySelector('.weatherInfo');
const weatherIconImg = document.querySelector('.weatherIcon');
const weathertravel = document.querySelector('.weathertravel');
const weatherimg = document.querySelector(".weatherimg");

//초기화 
function init() {
    askForCoords();
}

//좌표를 물어보는 함수 
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

//좌표를 얻는데 성공했을 때 쓰이는 함수 
function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.
}
//좌표를 얻는데 실패했을 때 쓰이는 함수 
function handleError() {
    console.log("can't not access to location");
}

//날씨 api를 통해 날씨에 관련된 정보들을 받아온다. 
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`).then(function(response) {
        return response.json();
    })
    .then(function(json) {
        //온도, 위치, 날씨묘사, 날씨아이콘을 받는다. 
        const temperature = json.main.temp;
        const place = json.name;
        const weatherDescription = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    
        //받아온 정보들을 표현한다. 
        weatherInfo.innerText = `${temperature} °C / ${weatherDescription} `;
        //@${place} / ${weatherDescription}
        weatherIconImg.setAttribute('src', weatherIconAdrs);
              
    })
    .catch((error) => console.log("error:", error));
}

init();