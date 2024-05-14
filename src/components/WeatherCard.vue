<template>
  <router-link class="wcard-wrapper" to="/Weather">
    <div class="wcard-image">
      <img src="/img/weather/sun.png" alt="Weather Card Image">
    </div>
    <div class="wcard-weather">Sunny</div>    
    <div class="wcard-location">Mulhouse, FR</div>
    <div class="wcard-temp">25°C</div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wcard-wrapper {
  background-color: rgba(159, 159, 159, .3);
  width: 50%;
  min-height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
  border-radius: 15px;
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  box-shadow: 14px 12px 10px rgba($color: #101655, $alpha: .8);

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
    text-shadow: 2px 3px rgba($color: #000000, $alpha: .35);
  }

  .wcard-temp {
    font-size: 3em;
    font-style: italic;
    text-shadow: 3px 4px rgba($color: #000000, $alpha: .35);
  }
}

/* Large desktop Responsive */
@media (min-width: 1200px) {
  .wcard-wrapper {
    width: 30%;
  }
}
</style>