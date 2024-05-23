<script setup>

</script>

<template>
  <div class="cd">
    <div class="cd-wrapper">
      <!-- <p>{{ $route.params.name }}</p> -->
      <!-- {{ dataFullWeather.all }} -->
      <div class="cd-date">
        05/22
      </div>
      <div class="cd-img">
        <img src="http://openweathermap.org/img/w/10n.png" alt="Weather Days Image" loading="lazy">
      </div>
      <div class="cd-desc">
          <p>Overclast Clouds</p>
        </div>
      <div class="cd-temp">
        <p class="temp--1">
          38.7°C
        </p>
        <p>｜</p>
        <p class="temp--2">
          35.2°C
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
    margin-right: 0.8rem;
    color: #898dad;
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
      margin-right: 0.8rem;
      color: #898dad;
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