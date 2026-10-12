const cityInput = document.getElementById("city-search")
const searchBtn = document.getElementById("search-btn")
const weatherDisplay = document.querySelector(".weather-display")

async function getWeather(cityName) {
    try{
        weatherDisplay.innerHTML = `<p class = "prompt"> Fetching weather</p>`    
    
    
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`)    
    const geoData = await geoRes.json()

    if(!geoData.results || geoData.results.length === 0) {
        weatherDisplay.innerHTML = `<p class = "prompt"> City not found </p>`
        return;
    }

    const {latitude, longitude, name, country} = geoData.results[0]

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    const weatherData = await weatherRes.json();
    
    const {temperature, windspeed, weathercode} = weatherData.current_weather
    const conditionText = getWeatherDescription(weathercode)
    
    weatherDisplay.innerHTML = `
    <div class = "city-name"> ${name}, ${country ||  ' ' }</div>
    <div class = "temp"> ${temperature}°C </div>
    <div class = "condtion"> ${conditionText}</div>
    <p> Wind ${windspeed} km/h </p>
    `
}
catch(error) {
    weatherDisplay.innerHTML = `<p class = "prompt"> Failed to fetch weather data. </p>`
    console.error(error)
}
}

function getWeatherDescription(code) {
    const weathercodes = {
     0 : "Clear Sky ☀️",
    1 : "Mainly clear 🌤️",
    2 : "Partly Cloudy ⛅",
    3 : "OverCast ☁️",
    45 : "Foggy 🌫️",
    51 : "Light drizzle 🌧️",
    61 : "Slight rain 🌧️",
    63 : "Moderate rain 🌧️",
    65 : "Heavy rain 🌧️",
    71 : "Snow fall ❄️",
    95 : "Thunderstorm ⚡⛈️"
    }

    return weathercodes[code] || "clear"
   
}

searchBtn.onclick = function () {
    const city = cityInput.value
    if(city) getWeather(city)
}
