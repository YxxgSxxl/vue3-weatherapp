<script setup>
import WeatherCard from '../components/WeatherCard.vue'; // WeatherCard comp
import SearchBar from '../components/SearchBar.vue'; // SearchBar comp
import { ref } from 'vue'; // Ref to pass data_weather before the DOM loading
        
import OpenWeatherMapService from '../services/openweathermap.service';
        
let data_weather = ref(undefined);
        
let isSearched = ref(false);
        
async function search(query) {
    const data_weather = await OpenWeatherMapService.getWeatherData(query);
        
    console.log(data_weather);
                
    isSearched.value = true;
}
</script>

<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar @query="search"/>
        <p></p>

        <div class="weather-wrapper" v-if="isSearched">
            <WeatherCard :weatherData="data_weather"/>
        </div>
    </div>
</template>


<style lang="scss">

</style>