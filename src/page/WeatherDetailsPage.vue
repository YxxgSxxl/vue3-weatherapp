<script setup>
import OpenWeatherMapService from '../services/openweathermap.service'; // Service
import WdetailsCard from '../components/WdetailsCard.vue' // Component 1
import WdaysDetails from '../components/WdaysDetails.vue'; // Component 2
import { ref } from 'vue'; // Ref

  async () => {
    this.wname = this.$route.params.name;
    
    const weatherLatLon = await OpenWeatherMapService.getWeatherLatLon(this.wname); // First fetch to take Longitude and Latitude

    let data_coords = ref([]);

    data_coords.value.push(weatherLatLon);


    
    const weatherAll = await OpenWeatherMapService.getWeatherDetails(weatherLatLon.lat, weatherLatLon.lon); // Second fetch to take Weather Informations on multiple days

    console.log(weatherAll);

    let data_fullweather = ref([]);

    for (let i = 0; i < weatherAll.list.length; i++) {
      data_fullweather.value.push(weatherAll.list[i]);
    }

    console.log(data_fullweather);
  }
</script>

<template>
  <Suspense>
  <div>
    <!-- <p>{{ data_weather }}</p> -->
    <div class="wd-wrapper">
      <WdetailsCard :data_fullweather="data_fullweather"/>

      <WdaysDetails v-for="(data, i) in 3" :key="i" :dataFullWeather="data"/>
    </div>
  </div>
</Suspense>
</template>

<style lang="scss" scoped>
.wd-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>