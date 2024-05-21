import * as AppConfig from '../../app.config';

export default class OpenWeatherMapService {
    static getWeatherData(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${AppConfig.APIKEY}`)
        .then(response => response.json())
        .then(res => {
            return {
                name: res.name,
                country: res.sys.country,
                temp: res.main.temp,
                description: res.weather[0].description,
                icon: res.weather[0].icon,
            }
        })
    }
}