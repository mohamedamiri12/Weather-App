import "./style.css";
import { displayCityInfo, showSevenDayForecast } from "./dom";
import { chooseDegreeListener, searchDegreeListener } from "./listeners";
import { getWeatherData } from "./apiService";




const display = async () => {
    let data = await getWeatherData()
    
    // dom creations
    displayCityInfo(data)
    showSevenDayForecast(data.days)
    
    // event listeners
    chooseDegreeListener()
    searchDegreeListener()
}

display()