<script setup>
import * as AppConfig from '../../app.config.js'; // Config file
import WeatherCard from '../components/WeatherCard.vue'; // WeatherCard comp
import { ref } from 'vue'; // Ref to make data reactive
      
import OpenWeatherMapService from '../services/openweathermap.service';
      

let cities = [AppConfig.CITY[0], AppConfig.CITY[1], AppConfig.CITY[2]];
let data_weather = ref([]);
let isLoading = ref(true);
      
cities.forEach(async (city) => {
  const weatherData = await OpenWeatherMapService.getWeatherData(city);

  isLoading.value = false;
      
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

        <div class="weather-loading" v-if="isLoading">
            <!-- Loading icon from https://loading.io/css/ -->
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

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
  }

  .weather-loading {
      margin-top: 6rem;
      color: #2F3576;

      // LOADING ICON from https://loading.io/css/
      .lds-default,
      .lds-default div {
        box-sizing: border-box;
      }
      .lds-default {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-default div {
        position: absolute;
        width: 6.4px;
        height: 6.4px;
        background: currentColor;
        border-radius: 50%;
        animation: lds-default 1.2s linear infinite;
      }
      .lds-default div:nth-child(1) {
        animation-delay: 0s;
        top: 36.8px;
        left: 66.24px;
      }
      .lds-default div:nth-child(2) {
        animation-delay: -0.1s;
        top: 22.08px;
        left: 62.29579px;
      }
      .lds-default div:nth-child(3) {
        animation-delay: -0.2s;
        top: 11.30421px;
        left: 51.52px;
      }
      .lds-default div:nth-child(4) {
        animation-delay: -0.3s;
        top: 7.36px;
        left: 36.8px;
      }
      .lds-default div:nth-child(5) {
        animation-delay: -0.4s;
        top: 11.30421px;
        left: 22.08px;
      }
      .lds-default div:nth-child(6) {
        animation-delay: -0.5s;
        top: 22.08px;
        left: 11.30421px;
      }
      .lds-default div:nth-child(7) {
        animation-delay: -0.6s;
        top: 36.8px;
        left: 7.36px;
      }
      .lds-default div:nth-child(8) {
        animation-delay: -0.7s;
        top: 51.52px;
        left: 11.30421px;
      }
      .lds-default div:nth-child(9) {
        animation-delay: -0.8s;
        top: 62.29579px;
        left: 22.08px;
      }
      .lds-default div:nth-child(10) {
        animation-delay: -0.9s;
        top: 66.24px;
        left: 36.8px;
      }
      .lds-default div:nth-child(11) {
        animation-delay: -1s;
        top: 62.29579px;
        left: 51.52px;
      }
      .lds-default div:nth-child(12) {
        animation-delay: -1.1s;
        top: 51.52px;
        left: 62.29579px;
      }
      @keyframes lds-default {
        0%, 20%, 80%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.5);
        }
      }
  }

/* Large desktop Responsive */
@media (min-width: 1200px) {
  h2 {
    margin-bottom: 2rem;
  }
}
</style>