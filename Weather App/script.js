const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const time = document.getElementById('current-time');



const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
// const forecast_days = document.querySelectorAll('.day');


async function checkWeather(city){
    const api_key = "cf8b81298ae3e1d9b1d059c77eed464b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    // const place = inputBox.value;
    // const forecast_url = `api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${api_key}`;
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

    const weather_data = await fetch(`${url}`).then(response => response.json());
    // const forecast_data = await fetch(`${timezone_url}`).then(response => response.text());
    // console.log(forecast_data);

    // const local_time = new Date();

    // const hours = local_time.getHours().toString().padStart(2, '0');
    // const minutes = local_time.getMinutes().toString().padStart(2, '0');
    // const seconds = local_time.getSeconds().toString().padStart(2, '0');

    // time.innerHTML = `${hours}:${minutes}:${seconds}`;

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        forecast_days.forEach(day => day.innerHTML = "");
        console.log("error");
        return;
    }

    // console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    // forecast.style.display = "block";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;

    }
   
   
    // for (let i = 0; i < forecast_days.length; i++) {
    //     const forecast = weather_data.list[i + 1];
    //     forecast_days[i].innerHTML = `
    //         <p>${getDayOfWeek(forecast.day_name)}</p>
    //         <p>${Math.round(forecast.main.temp - 273.15)}°C</p>
    //         <p>${weather_data.weather[0].description}</p>

    //     `;
    // }
    console.log(weather_data);

    // const forecasts = forecast_data.list.filter((f, i) => i % 8 === 0); // Filter out forecasts for every 3 hours to get daily forecasts
    // forecast.innerHTML = '';
    //   forecasts.forEach(f => {
    //     const date = new Date(f.dt_txt);
    //     const day = date.toLocaleDateString(undefined, {weekday: 'long'});
    //     const icon = f.weather[0].icon;
    //     const temp = `${Math.round(f.main.temp - 273.15)}°C`;

    //     forecast.innerHTML += `
    //         <div class="forecast-item">
    //             <div class="day">${day}</div>
    //             <div class="icon"><img src="https://openweathermap.org/img/wn/${icon}.png" alt=""></div>
    //             <div class="temp">${temp}</div>
    //         </div>
    //     `;
    // });
}

// function getDayOfWeek(day){
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date(day);
//     return daysOfWeek[date.getDay()];
// }

// function getIconUrl(iconCode) {
//     return `http://openweathermap.org/img/w/${iconCode}.png`;
// }
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});


// updateCurrentTime();

// function getCurrentTime(timezone) {
//     const options = { timeZone: timezone };
//     const timeString = new Date().toLocaleString('en-US', options);
//     return timeString;
//   }
  
//   function updateCurrentTime() {
//     const currentTime = getCurrentTime(inputBox.value);
//     time.textContent = `Current time: ${currentTime}`;
//   }
  
//   // Call updateCurrentTime() function every second to update the time
//   setInterval(updateCurrentTime, 1000);



 
// Get the clock element from the DOM

// setInterval(() => {
//   const now = new Date();
  
//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const seconds = now.getSeconds().toString().padStart(2, '0');
//   const timeString = `${hours}:${minutes}:${seconds}`;
  //   clock.innerHTML = timeString;
// }, 1000);
