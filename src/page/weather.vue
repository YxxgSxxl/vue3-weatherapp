<template>
  <div class="weather-wrapper">
    <h1>Here is the weather tab</h1>

    <WeatherCard/>
  </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard.vue';

export default {
    name: 'weatherPage',
    components: {
      WeatherCard
    }
}
</script>

<style lang="scss" scoped>

</style>