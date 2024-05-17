<template>
  <div class="wd-wrapper">
    <p>Weather Details Page!</p>
    <!-- <p>{{ data_weather.name }}</p> -->
  </div>
</template>

<script>
// import * as AppConfig from '../../app.config';
// import { useRoute } from 'vue-router';
// import { ref } from 'vue';

export default {
  name: 'weatherDetails',

  // setup() {
  //   const route = useRoute();
  //   const weatherName = route.params.name;
  //   // const weatherData = data_weather.value.find((weatherData) => weatherData.name === weatherName);

  //   let data_weather = ref([]);

  //   console.log(weatherName);

  //   async (weatherName) => {
  //     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherName}&units=metric&appid=${AppConfig.APIKEY}`)
  //     .then(response => response.json())
  //     .then(res => {
  //       data_weather.value.push({
  //         name: res.name,
  //         country: res.sys.country,
  //         temp: res.main.temp,
  //         description: res.weather[0].description,
  //         icon: res.weather[0].icon,
  //       })
  //     }).catch(error => {console.error(error)})
  //   }
  //   console.log(data_weather);
    
  //   return {
  //     data_weather,
  //   }
  // }
}
</script>

<style>

</style>