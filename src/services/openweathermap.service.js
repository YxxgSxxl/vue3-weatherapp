import * as AppConfig from '../../app.config';

export default class OpenWeatherMapService {
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
                    }
                })
            .catch(error => {
                console.log(error);

                return {
                    error: "Erreur: " + error,
                }
            })
    }

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

    static getWeatherDetails(lat, lon) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${AppConfig.APIKEY}`)
            .then(response => response.json())
            .then(res => {
                // return {
                //     res
                // }
                console.log(res);
            })
            .catch(error => {
                console.log(error);

                return {
                    error: "Erreur: " + error,
                }
            })
    }
}