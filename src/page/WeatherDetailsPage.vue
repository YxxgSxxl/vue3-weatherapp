<script setup>
import OpenWeatherMapService from '../services/openweathermap.service'; // Service
import WdetailsCard from '../components/WdetailsCard.vue' // Component 1
import WdaysDetails from '../components/WdaysDetails.vue'; // Component 2
import { ref, onMounted } from 'vue'; // Ref & unMounted
import { useRoute } from 'vue-router'; // Vue Routeur


const route = useRoute(); // Route for the name of the city in the URL
let data_cardweather = ref(null) // Card Data
const data_fullweather = ref([]); // Final data of weather

let isVisible = ref(false);
let isLoading = ref(true);

async function prefetch() {
  // console.clear() // Flush console for debugging

  try {
    const cardweather = await OpenWeatherMapService.getWeatherData(route.params.name) // 1st fetch to take the informations for the Weather Card comp

    let lat = cardweather.lat;
    let lon = cardweather.lon

    const weatherAll = await OpenWeatherMapService.getWeatherDetails(lat, lon); // 2.5th fetch to take Weather Informations on multiple days

  
    for (let i = 0; i < weatherAll.list.length; i++) {
      data_fullweather.value.push(weatherAll.list[i]);
    }

    data_cardweather = cardweather;
    
    isLoading.value = false;
    isVisible.value = true;

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
  
</script>

<template>
  <div>
    <div class="wd-wrapper">
      <div class="weather-loading" v-if="isLoading">
            <!-- Loading icon from https://loading.io/css/ -->
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

      <WdetailsCard :weatherCardData="data_cardweather" v-if="isVisible"/>

      <WdaysDetails v-for="(data, i) in data_fullweather" :weatherData="data" :key="i"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wd-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>