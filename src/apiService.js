async function getWeatherInfo(city,unit){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=8H285JQFGZY6447A58JMPYPGD`)
    return await response.json()
}

async function getWeatherData(city="london",unit="metric"){
    const weatherData = await getWeatherInfo(city,unit)
    
    return weatherData
}

export { getWeatherData }