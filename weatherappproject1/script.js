const apiKey  = "1b34518032fab590487fb9edeec8c1d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h" ;

    if(data.weather[0].main == "Clouds"){
   weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Raiin"){
        weatherIcon.src = "images/raiin.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
   
   
}

searchbtn.addEventListener("click",()=>{
   checkWeather(searchbox.value); 
})

