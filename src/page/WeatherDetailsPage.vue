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

<script>
// import * as AppConfig from '../../app.config';
// import { useRoute } from 'vue-router';
// import OpenWeatherMapService from '../services/openweathermap.service';

import OpenWeatherMapService from '../services/openweathermap.service'; // Service
import WdetailsCard from '../components/WdetailsCard.vue' // Component 1
import WdaysDetails from '../components/WdaysDetails.vue'; // Component 2
import { ref } from 'vue'; // Ref

export default {
  name: 'weatherDetails',

  components: {
    WdetailsCard,
    WdaysDetails,
  },
  data() {
    return {
      data_FullWeather: null,
    }
  },  
  async mount() {
    this.wname = this.$route.params.name;
    // // FIRST QUERY
    // const weatherCard = await OpenWeatherMapService.getWeatherData(this.name);

    // SECOND QUERY
    // Fetch latitude and longitude of the weather chosed
    
    const weatherLatLon = await OpenWeatherMapService.getWeatherLatLon(this.wname); // First fetch to take Longitude and Latitude

    let data_coords = ref([]);

    data_coords.value.push(weatherLatLon);


    // THIRD QUERY
    const weatherAll = await OpenWeatherMapService.getWeatherDetails(weatherLatLon.lat, weatherLatLon.lon); // Second fetch to take Weather Informations on multiple days

    console.log(weatherAll);

    let data_fullweather = ref([]);

    for (let i = 0; i < weatherAll.list.length; i++) {
      data_fullweather.value.push(weatherAll.list[i]);
    }

    console.log(data_fullweather);

    return {
      data_fullweather,
    }
  }
}
</script>

<style lang="scss" scoped>
.wd-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>