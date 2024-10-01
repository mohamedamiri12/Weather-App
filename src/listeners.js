import { getWeatherData } from "./apiService"
import { displayCityInfo, showSevenDayForecast } from "./dom"
const chooseDegreeListener = () => {
    const chooseButton = document.querySelector("#choose-degree")
    const searchInput = document.querySelector("#city")
    chooseButton.addEventListener('click',async (e) => {
        console.log(chooseButton.innerHTML)
        if(chooseButton.innerHTML == "°C") {
            let data = await getWeatherData(searchInput.value || undefined,"us")
            if(data){
                chooseButton.innerHTML = "°F"
                displayCityInfo(data,chooseButton.innerHTML)
                showSevenDayForecast(data.days,chooseButton.innerHTML)
            }
        } else {
            let data = await getWeatherData(searchInput.value || undefined,"metric")
            if(data){
                chooseButton.innerHTML = "°C"
                displayCityInfo(data,chooseButton.innerHTML)
                showSevenDayForecast(data.days,chooseButton.innerHTML)
            }
        }
    })
}

const searchDegreeListener = () => {
    const searchInput = document.querySelector("#city")
    const chooseDegreeButton = document.querySelector("#choose-degree")
    const searchButton = document.querySelector("#search-city")
    let degree = (chooseDegreeButton.innerHTML == "°C") ? "metric" : "us"
    searchButton.addEventListener('click',async (e) => {
        let data = await getWeatherData(searchInput.value,degree)
        if(data){
            displayCityInfo(data,chooseDegreeButton.innerHTML)
            showSevenDayForecast(data.days,chooseDegreeButton.innerHTML)
        }
    })
}


export { chooseDegreeListener,searchDegreeListener }