async function getWeatherInfo(city,unit){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=8H285JQFGZY6447A58JMPYPGD`)
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return await response.json()
    } catch (error) {
        console.log(`Failed to fetch weather data: ${error}`);
        return null;
    }
    
}

async function getWeatherData(city="london",unit="metric"){
    const weatherData = await getWeatherInfo(city,unit)
    
    return weatherData
}

export { getWeatherData }