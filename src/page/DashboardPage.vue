<script setup>
import WeatherCard from '../components/WeatherCard.vue'; // WeatherCard comp
import SearchBar from '../components/SearchBar.vue'; // SearchBar comp
import { ref } from 'vue'; // Ref to pass data_weather before the DOM loading
        
import OpenWeatherMapService from '../services/openweathermap.service';
        
let data_weather = ref([]);
let isSearched = ref(false);
let isLoading = ref(false);
let error = ref("");
        
// function isLoad() {
//     isLoading = false;
// }

async function search(query) {
    // isLoading = false;
    data_weather.value = [];

    const weatherData = await OpenWeatherMapService.getWeatherData(query.value);
    
    // console.log(data_weather);
    data_weather.value.push(weatherData);
    
    // Error Handling
    if (data_weather.value[0].error) {
        error = data_weather.value[0].error;

        setTimeout(() => {
            console.error(data_weather.value[0].error);
        }, 1000);

        isSearched.value = false;
        isLoading.value = false;
    } else {
        error = "";

        isSearched.value = true;
        console.log("B");
    }
    isLoading.value = false;


    return {
        data_weather,
    }
}
</script>

<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar @keydown.enter="isLoading=true" @query="search"/>

        <div class="weather-loading" v-if="isLoading">
            <!-- Loading icon from https://loading.io/css/ -->
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

        <div class="weather-wrapper" v-if="isSearched">
            <WeatherCard v-for="(data, i) in data_weather" :weatherData="data" :key="i"/>
        </div>

        <div class="weather-error">
            {{ error }}
        </div>
    </div>
</template>


<style lang="scss">
.dashboard-wrapper {
    .weather-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .weather-error {
        color: red;
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
}
</style>