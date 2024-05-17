<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar @query="search"/>

        <div class="weather-wrapper">
            <WeatherCard v-for="(data, i) in data_weather" :weatherData="data" :key="i"/>
        </div>
    </div>
</template>

<script>
import * as AppConfig from '../../app.config'; // Configuration file for the API key
import WeatherCard from '../components/WeatherCard.vue'; // WeatherCard comp
import SearchBar from '../components/SearchBar.vue'; // SearchBar comp
import { ref } from 'vue'; // Ref to pass data_weather before the DOM loading

export default {
    name: 'dashboardPage',

    components: {
    SearchBar,
    WeatherCard,
  },
  methods: {
    async search(query) {
        let data_weather = ref([]);
        // alert(query);

        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${AppConfig.APIKEY}`)
        .then(response => response.json())
        .then(res => {
            data_weather.value.push({
                name: res.name,
                country: res.sys.country,
                temp: res.main.temp,
                description: res.weather[0].description,
                icon: res.weather[0].icon,
            })

            // console.log(res);
            console.log(data_weather);
        })

        return {
        data_weather,
        }
    },
  },
} 
</script>

<style lang="scss">

</style>