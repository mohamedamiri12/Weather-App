import clearDay from "./assets/icons/clear-day.png";
import clearNight from "./assets/icons/clear-night.png";
import cloudy from "./assets/icons/cloudy.png";
import fog from "./assets/icons/fog.png";
import hail from "./assets/icons/hail.png";
import partlyCloudyDay from "./assets/icons/partly-cloudy-day.png";
import partlyCloudyNight from "./assets/icons/partly-cloudy-night.png";
import rainSnowShowersDay from "./assets/icons/rain-snow-showers-day.png";
import rainSnowShowersNight from "./assets/icons/rain-snow-showers-night.png";
import rainSnow from "./assets/icons/rain-snow.png";
import rain from "./assets/icons/rain.png";
import showersDay from "./assets/icons/showers-day.png";
import showersNight from "./assets/icons/showers-night.png";
import sleet from "./assets/icons/sleet.png";
import snowShowersDay from "./assets/icons/snow-showers-day.png";
import snowShowersNight from "./assets/icons/snow-showers-night.png";
import snow from "./assets/icons/snow.png";
import thunderRain from "./assets/icons/thunder-rain.png";
import thunderShowersDay from "./assets/icons/thunder-showers-day.png";
import thunderShowersNight from "./assets/icons/thunder-showers-night.png";
import thunder from "./assets/icons/thunder.png";
import wind from "./assets/icons/wind.png";


const displayCityInfo = (data,defaultdegree="°C") => {
    console.log(data)
    const cityInfo = document.querySelector(".city-info")
    cityInfo.innerHTML = ""

    let dateTimeParagraph = document.createElement("h4")
    dateTimeParagraph.textContent = data.currentConditions.datetime
    
    let conditionsParagraph = document.createElement("h4")
    conditionsParagraph.textContent = data.currentConditions.conditions

    let cityHeader = document.createElement("h1")
    let result = data.address.charAt(0).toUpperCase() + data.address.slice(1);
    cityHeader.textContent = result
    
    let addressHeader = document.createElement("h2")
    addressHeader.textContent = formatAddress(data.resolvedAddress)
    
    
    let weatherIcon = document.createElement("img")
    weatherIcon.src = setWeatherIcon(data.currentConditions.icon)
    
    let degree = document.createElement("h1")
    degree.textContent = data.currentConditions.feelslike + defaultdegree// it will be dynamic mn b3d
    
    let degreeDiv = document.createElement("div")
    degreeDiv.classList.add("degreeDiv")
    degreeDiv.append(weatherIcon,degree)
    
    let conditionsDiv = document.createElement("div")
    conditionsDiv.classList.add("conditionsDiv")
    // humidity div
    let humidityDiv = document.createElement("div")
    let humiditySpan = document.createElement("span")
    humiditySpan.textContent = "humidity"
    let humidityValue = document.createElement("span")
    humidityValue.textContent = data.currentConditions.humidity
    humidityDiv.classList.add("conditionDiv")
    humidityDiv.append(humiditySpan,humidityValue)
    
    // feelsLike div
    let feelsLikeDiv = document.createElement("div")
    let feelsLikeSpan = document.createElement("span")
    feelsLikeSpan.textContent = "feels like"
    let feelsLikeValue = document.createElement("span")
    feelsLikeValue.textContent = data.currentConditions.feelslike
    feelsLikeDiv.classList.add("conditionDiv")
    feelsLikeDiv.append(feelsLikeSpan,feelsLikeValue)

    // precipitationChance div
    let precipitationChanceDiv = document.createElement("div")
    let precipitationChanceSpan = document.createElement("span")
    precipitationChanceSpan.textContent = "feels like"
    let precipitationChanceValue = document.createElement("span")
    precipitationChanceValue.textContent = data.currentConditions.precip
    precipitationChanceDiv.classList.add("conditionDiv")
    precipitationChanceDiv.append(precipitationChanceSpan,precipitationChanceValue)
    
    conditionsDiv.append(humidityDiv,feelsLikeDiv,precipitationChanceDiv)

    cityInfo.append(dateTimeParagraph,conditionsParagraph,cityHeader,addressHeader,degreeDiv,conditionsDiv)
}

const showSevenDayForecast = (days,defaultdegree="°C") => {
    console.log(days)
    const nextDaysWeatherDiv = document.querySelector(".next-days-weather")
    nextDaysWeatherDiv.innerHTML = ""

    days.forEach(day => {
        const dayWeatherDiv = document.createElement("div")

        const weatherIcon = document.createElement("img")
        weatherIcon.src = setWeatherIcon(day.icon)
        
        const dayDetailDiv = document.createElement("div")
        const datetime = document.createElement("p")
        datetime.textContent = day.datetime
        const temperature = document.createElement("p")
        temperature.textContent = "Temperature "+defaultdegree
        temperature.style.setProperty("font-weight","Bold")
        const degrees = document.createElement("p")
        degrees.innerHTML = `${day.feelslikemax} <strong>${day.feelslike}</strong> ${day.feelslikemin}`;
        dayDetailDiv.append(datetime,temperature,degrees)
        dayDetailDiv.classList.add("day-detail")
        dayWeatherDiv.append(weatherIcon,dayDetailDiv)
        dayWeatherDiv.classList.add("day-weather")
        nextDaysWeatherDiv.append(dayWeatherDiv)
    });
}

const setWeatherIcon = (icon) => {
    switch (icon) {
        case "clear-day":
            return clearDay;
        case "clear-night":
            return clearNight;
        case "cloudy":
            return cloudy;
        case "fog":
            return fog;
        case "hail":
            return hail;
        case "partly-cloudy-day":
            return partlyCloudyDay;
        case "partly-cloudy-night":
            return partlyCloudyNight;
        case "rain-snow-showers-day":
            return rainSnowShowersDay
        case "rain-snow-showers-night":
            return rainSnowShowersNight
        case "rain-snow":
            return rainSnow
        case "rain":
            return rain
        case "showers-day":
            return showersDay
        case "showers-night":
            return showersNight
        case "sleet":
            return sleet
        case "snow-showers-day":
            return snowShowersDay
        case "snow-showers-night":
            return snowShowersNight
        case "snow":
            return snow
        case "thunder-rain":
            return thunderRain
        case "thunder-showers-day":
           return thunderShowersDay
        case "thunder-showers-night":
            return thunderShowersNight
        case "thunder":
            return thunder
        case "wind":
            return wind
        default:
            break;
    }
}


function formatAddress(address) {
    const parts = address.split(', ');
    parts.shift()
    const formattedAddress = parts.join(", ")
    return formattedAddress 
}

export { displayCityInfo, showSevenDayForecast }