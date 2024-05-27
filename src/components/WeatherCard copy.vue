<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  weatherData: Object,
});

function imgSource(source) {
  return 'https://openweathermap.org/img/w/' + source + '.png';
}
</script>

<template>
  <router-link class="wcard-wrapper" :to="'/city/' + props.weatherData.name">
    <div class="wcard-image">
      <img :src="imgSource(props.weatherData.icon)" alt="Weather current state image" loading="eager">
    </div>

    <div class="wcard-location">
      {{ props.weatherData.name }}, {{ props.weatherData.country }}
    </div>

    <div class="wcard-temp">{{ props.weatherData.temp }}°C</div>

    <div class="wcard-description">{{ props.weatherData.description }}</div>
  </router-link>

  <div class="wcard-error" v-if="props.weatherData.error" style="color: red;">{{ props.weatherData.error }}</div>
</template>

<style lang="scss">
/* Weather Card Comp */
.wcard-row {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 4rem 4rem 4rem;
}

.wcard-wrapper {
  background-color: rgba(126, 137, 169, 0.3);
  width: 70%;
  min-height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
  border-radius: 15px;
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  box-shadow: 14px 12px 10px rgba($color: #101655, $alpha: 0.8);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 40%;
  }

  .wcard-image {
    min-height: 80px;
  }

  .wcard-location {
    font-size: 1.5em;
    font-weight: 500;
    text-shadow: 2px 3px rgba($color: #000000, $alpha: 0.35);
    margin-bottom: 1rem;
  }

  .wcard-temp {
    font-size: 2em;
    font-style: italic;
    text-shadow: 3px 4px rgba($color: #000000, $alpha: 0.35);
  }

  .wcard-description {
    font-size: 1.5em;
    font-style: italic;
    text-shadow: 3px 4px rgba($color: #000000, $alpha: 0.35);
    margin-bottom: 1rem;
  }
}

/* Large desktop Responsive */
@media (min-width: 1200px) {
  .wcard-wrapper {
    width: 26%;
  }

  .wcard-row {
    flex-direction: row;
  }
}
</style>
