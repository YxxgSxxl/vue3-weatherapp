<template>
  <div>
    <Suspense>
    <!-- <p>{{ data_weather }}</p> -->
    <div class="wd-wrapper">
      <CardDetails :weatherAll="weatherAll"/>
      <p>{{ $route.params.name }}</p>
    </div>
  </Suspense>
  </div>
</template>

<script>
// import * as AppConfig from '../../app.config';
// import { useRoute } from 'vue-router';
// import OpenWeatherMapService from '../services/openweathermap.service';

import OpenWeatherMapService from '../services/openweathermap.service'; // Service
import CardDetails from '../components/CardDetails.vue'; // Component
import { ref } from 'vue'; // Ref

export default {
  name: 'weatherDetails',

  components: {
    CardDetails,
  },
  async mounted() {
    // Fetch latitude and longitude of the weather chosed
    this.wname = this.$route.params.name;
    
    const weatherLatLon = await OpenWeatherMapService.getWeatherLatLon(this.wname); // First fetch to take Longitude and Latitude

    let data_coords = ref([]);

    data_coords.value.push(weatherLatLon);

    console.log();

    const weatherAll = await OpenWeatherMapService.getWeatherDetails(weatherLatLon.lat, weatherLatLon.lon); // Second fetch to take Weather Informations on multiple days

    let data_fullweather = ref([]);

    data_fullweather.value.push(weatherAll);

    console.log(data_fullweather);

    return {
      data_fullweather,
    }
  }
}
</script>

<style>

</style>