<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  weatherCardData: Object,
});

function imgSource(source) {
  return 'https://openweathermap.org/img/w/' + source + '.png';
}
</script>

<template>
  <div class="wdc">
    <div class="wdc-wrapper">
        <div class="wdc-image">
            <img :src="imgSource(source)" alt="Weather current state image" loading="eager">
        </div>

        {{ props.weatherCardData[0] }}

        <div class="wdc-location">
            <!-- {{ props.weatherCardData[0].name }}, {{ props.weatherCardData[0].country }}  -->
        </div>

        <div class="wdc-temp">
            <!-- {{ props.weatherCardData[0].temp }}°C -->
        </div>

        <div class="wdc-description">
            <!-- {{ props.weatherCardData[0].description }} -->
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.wdc {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &-wrapper {
        background-color: var(--secondary-bg-color);
        box-shadow:  0 4px 16px -2px #393F86;
        width: 80%;
        min-height: 24rem;
        border-radius: 10px;
        padding: 0.8rem;
    }

    &-image img {
        width: 20%;
    }
}

/* Large desktop Responsive */
@media (min-width: 1200px) {
    .wdc {
    &-image img {
        width: 10%;
    }

    &-wrapper {
        background-color: var(--secondary-bg-color);
        box-shadow:  0 4px 16px -2px #393F86;
        width: 40%;
        min-height: 24rem;
        border-radius: 10px;
        padding: 0.8rem;
    }
}
}
</style>