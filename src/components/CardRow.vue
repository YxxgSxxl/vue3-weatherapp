<template>
  <div class="wcard-row">
    <WeatherCard v-for="(wcard, index) in 3" :key="index"/>
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue';

export default {
name: 'CardRow',

components: {
    WeatherCard,
},
}
</script>

<style lang="scss">

</style>