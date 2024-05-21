<template>
  <div>
    <p>Weather Details Page!</p>
    <!-- <p>{{ data_weather }}</p> -->
    <div class="wd-wrapper">
      <CardDetails/>
      <p>{{ $route.params.name }}</p>
    </div>
  </div>
</template>

<script>
// import * as AppConfig from '../../app.config';
// import { useRoute } from 'vue-router';
// import OpenWeatherMapService from '../services/openweathermap.service';
// import { ref } from 'vue';

import CardDetails from '../components/CardDetails.vue';

export default {
  name: 'weatherDetails',

  components: {
    CardDetails,
  },
  setup() {
  }
}
</script>

<style>

</style>