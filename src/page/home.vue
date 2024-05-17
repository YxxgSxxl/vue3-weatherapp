<template>
    <div class="home-wrapper">    
        <section class="home-suggests">
          <h2>City Featured:</h2>  

          <div class="wcard-row">
            <WeatherCard v-for="(data, i) in data_weather" :weatherData="data" :key="i"/>
          </div>
        </section>
    </div>
</template>

<script>
import * as AppConfig from '../../app.config';
import WeatherCard from '../components/WeatherCard.vue';
import { ref } from 'vue';

export default {
  name: 'homePage',

  components: {
    WeatherCard,
  },
  setup() {
    let cities = ['New Orleans', 'Paris', 'Toronto'];
    let data_weather = ref([]);

    cities.forEach(async (city) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${AppConfig.APIKEY}`)
      .then(response => response.json())
      .then(res => {
        data_weather.value.push({
          name: res.name,
          country: res.sys.country,
          temp: res.main.temp,
          description: res.weather[0].description,
          icon: res.weather[0].icon,
        })
      }).catch(error => {console.error(error)})
    })
    
    console.log(data_weather);

    return {
      data_weather,
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 2em;
    color: white;
  }

  .h1-gradient {
    background-color: rgba(123,183,253,1);
    background-image: linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    filter: drop-shadow(6px 3px 2px rgba(0, 0,0, .5));
    }
</style>