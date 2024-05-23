<script setup>
import WeatherCard from './WeatherCard.vue';
</script>

<template>
  <div class="wcard-row">
    <WeatherCard v-for="(wcard, index) in 3" :key="index"/>
  </div>
</template>

<style lang="scss">

</style>