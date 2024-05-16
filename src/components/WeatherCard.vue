<template>
  <div class="wcard-wrapper">
    <div class="wcard-image">
      <img src="../../public/img/weather-logo.png" alt="Weather current state image">
    </div>

    <div class="wcard-location">
      Charlotte, US
    </div>

    <div class="wcard-temp">25°C</div>

    <div class="wcard-description">Sun Covered</div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
}
</script>

<style lang="scss">
/* Weather Card Comp */
.wcard-wrapper {
  background-color: rgba(159, 159, 159, 0.3);
  width: 60%;
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
    font-size: 3em;
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
}
</style>
