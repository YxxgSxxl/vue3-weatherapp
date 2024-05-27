import * as AppConfig from '../../app.config';

export default class OpenWeatherMapService {
    // Function that fetches the weather datas of the city requested
    static getWeatherData(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${AppConfig.APIKEY}`)
            .then(response => response.json())
            .then(
                res => {
                    return {
                        name: res.name,
                        country: res.sys.country,
                        temp: res.main.temp,
                        description: res.weather[0].description,
                        icon: res.weather[0].icon,

                        lon: res.coord.lon,
                        lat: res.coord.lat,
                    }
                })
            .catch(error => {
                console.log(error);

                return {
                    error: "Erreur: " + error,
                }
            })
    }

    // Function that fetches the Latitude and the Longitude coordinates of the city requested
    static getWeatherLatLon(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${AppConfig.APIKEY}`)
            .then(response => response.json())
            .then(res => {
                return {
                    lon: res.coord.lon,
                    lat: res.coord.lat,
                }
            })
            .catch(error => {
                console.log(error);

                return {
                    error: "Erreur: " + error,
                }
            })
    }

    // Function that fetches more informations about a coordinate but on multiple days and times
    static getWeatherDetails(lat, lon) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${AppConfig.APIKEY}`)
            .then(response => response.json())
            .then(
                res => {
                    return {
                        list: res.list,
                    }
                })
            .catch(error => {
                console.log(error);

                return {
                    error: "Erreur: " + error,
                }
            })
    }
}