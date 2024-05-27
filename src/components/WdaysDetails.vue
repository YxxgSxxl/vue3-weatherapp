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
  <div class="cd">
    <div class="cd-wrapper">
      <div class="cd-date">
        {{ props.weatherData.dt_txt }}
      </div>

      <div class="cd-col">
        <div class="cd-desc">
            <p>{{ props.weatherData.weather[0].description }}</p>
          </div>
        <div class="cd-img">
          <img :src="imgSource(props.weatherData.weather[0].icon)" alt="Weather Days Image" loading="lazy">
        </div>
      </div>
      
      <div class="cd-temp">
        <p class="temp--1">
          {{ props.weatherData.main.temp }}°C
        </p>
        <p>｜</p>
        <p class="temp--2">
          {{ props.weatherData.main.feels_like }}°C
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cd {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-wrapper {
    background-color: #2F3576;
    box-shadow:  0 4px 16px -2px #393F86;
    width: 80%;
    min-height: 4rem;
    border-radius: 10px;
    align-content: center;
    align-items: center;
    justify-content: space-between;

    display: flex;
    padding: 0.8rem;
  }

  &-date {
    font-size: 1em;
    color: #898dad;
    max-width: 7rem;
  }

  &-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding-top: 15px;

    &-img {
      text-align: start;
      min-height: auto;
      width: fit-content;
    }

    p {
      margin: 0;
    }
    
    &-desc {
      width: 100%;
      height: fit-content;
      text-align: center;
    }
  }

  &-temp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    font-size: smaller;

    p:nth-child(2) {
      color: #cacfff;
    }

    .temp--1 {
      font-size: 1.3em;
      color: rgb(160, 168, 255);
    }

    .temp--2 {
      font-size: 1em;
      color: #7e85d7;
    }
  }
}

  /* Large desktop Responsive */
  @media (min-width: 1200px) {
  .cd {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: larger;

    &-wrapper {
      background-color: #2F3576;
      box-shadow:  0 4px 16px -2px #393F86;
      width: 40%;
      min-height: 4rem;
      border-radius: 10px;
      align-content: center;
      align-items: center;
      justify-content: space-between;

      display: flex;
      padding: 0.8rem;
    }

    &-date {
      font-size: 1em;
      color: #c9cfff;
    }

    &-img {
      text-align: start;
      min-height: auto;
      width: fit-content;
    }
  
    &-desc {
      width: 100%;
      text-align: center;
    }

    &-temp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      font-size: smaller;

      p:nth-child(2) {
        color: #cacfff;
      }

      .temp--1 {
        font-size: 1.3em;
        color: rgb(160, 168, 255);
      }

      .temp--2 {
        font-size: 1em;
        color: #7e85d7;
      }
    }
  }
}
</style>