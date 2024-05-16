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
.wcard-row {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 4rem 4rem 4rem;
}

/* Large desktop Responsive */
@media (min-width: 1200px) {
  .wcard-row {
    flex-direction: row;
  }
}
</style>