<script setup>
import OpenWeatherMapService from '../services/openweathermap.service'; // Service
import WdetailsCard from '../components/WdetailsCard.vue' // Component 1
import WdaysDetails from '../components/WdaysDetails.vue'; // Component 2
import { ref, onMounted } from 'vue'; // Ref & unMounted
import { useRoute } from 'vue-router'; // Vue Routeur


const route = useRoute(); // Route for the name of the city in the URL
const data_cardweather = ref([]); // Card Data
const data_fullweather = ref([]); // Final data of weather

async function prefetch() {
  console.clear() // Flush console for debugging

  try {
    const cardweather = await OpenWeatherMapService.getWeatherData(route.params.name) // 1st fetch to take the informations for the Weather Card comp
    
    // const weatherLatLon = await OpenWeatherMapService.getWeatherLatLon(route.params.name); // 2nd fetch to take Longitude and Latitude
    const weatherAll = await OpenWeatherMapService.getWeatherDetails(cardweather.lat, cardweather.lon); // 2.5th fetch to take Weather Informations on multiple days

  
    for (let i = 0; i < weatherAll.list.length; i++) {
      data_fullweather.value.push(weatherAll.list[i]);
    }

    data_cardweather.value.push(cardweather);
    
  } catch(error) {
      console.info(error);
  }
}

onMounted(async () => {
  prefetch()
  
  return {
    data_cardweather,
    data_fullweather,
  }
});
  
// console.log(data_fullweather);
</script>

<template>
  <Suspense>
  <div>
    <div class="wd-wrapper">
      <WdetailsCard :weatherCardData="data_cardweather"/>

      <WdaysDetails v-for="(data, i) in data_fullweather" :weatherData="data" :key="i"/>
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