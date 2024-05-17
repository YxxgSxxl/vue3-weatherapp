<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar @query="search"/>
        <p></p>

        <div class="weather-wrapper">
            <WeatherCard v-for="(data, i) in data_weather" :weatherData="data" :key="i"/>
        </div>
    </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue'; // WeatherCard comp
import SearchBar from '../components/SearchBar.vue'; // SearchBar comp
import { ref } from 'vue'; // Ref to pass data_weather before the DOM loading

import OpenWeatherMapService from '../services/openweathermap.service';

export default {
    name: 'dashboardPage',

    data() {
        return {
        }
    },
    components: {
    SearchBar,
    WeatherCard,
  },
  methods: {
    async search(query) {
        let data_weather = ref([]);
        // alert(query);

        const weatherData = OpenWeatherMapService.getWeatherData(query);

        data_weather.value.push(weatherData);

        return {
        data_weather,
        }
    },
  },
} 
</script>

<style lang="scss">

</style>