<script setup>
import * as AppConfig from '../../app.config.js'; // Config file
import WeatherCard from '../components/WeatherCard.vue'; // WeatherCard comp
import { ref } from 'vue'; // Ref to make data reactive
      
import OpenWeatherMapService from '../services/openweathermap.service';
      

let cities = [AppConfig.CITY[0], AppConfig.CITY[1], AppConfig.CITY[2]];
let data_weather = ref([]);
      
cities.forEach(async (city) => {
  const weatherData = await OpenWeatherMapService.getWeatherData(city);
      
  data_weather.value.push(weatherData);
})
</script>

<template>
    <div class="home-wrapper">
      <h1>
        Welcome to the <span class="h1-gradient">Weather App!</span>
      </h1>
    
      <section class="home-suggests">
        <h2>City Featured:</h2>  

        <!-- 3 cards row -->
        <div class="wcard-row">
          <WeatherCard v-for="(data, i) in data_weather" :weatherData="data" :key="i"/>
        </div>
      </section>
    </div>
</template>


<style lang="scss">
  h1 {
    font-size: 2em;
    color: white;
    margin: 4rem 0 3rem 0;
  }

  .h1-gradient {
    background-color: var(--home-h1-color);
    background-image: var(--home-h1-gradient);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    filter: drop-shadow(6px 3px 2px rgba(0, 0,0, .5));
  }

  h2 {
    margin-bottom: 1rem;
    text-decoration: underline;
  }

/* Large desktop Responsive */
@media (min-width: 1200px) {
  h2 {
    margin-bottom: 2rem;
  }
}
</style>