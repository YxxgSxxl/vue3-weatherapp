<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar @weather="show"/>
        
        <!-- WeatherCard here -->
        <router-link class="wcard-wrapper" to="/Weather">

        <!-- <div class="wcard-weather"></div>    

            <div class="wcard-temp"></div> -->
        </router-link>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
    name: 'dashboardPage',

    data() {
        return {
            api_icons: 'https://openweathermap.org/img/w/',
        }
    },
    components: {
    SearchBar,
  },
  props: {

  },
  methods: {
    // Fonction from SearchBar child comp
    show(weather) {
        document.querySelector('.wcard-wrapper').innerHTML = "";
        document.querySelector('.wcard-wrapper').innerHTML += `<div class="wcard-image"><img src="${this.api_icons}${weather.icon}.png"</div>`;
        document.querySelector('.wcard-wrapper').innerHTML += `<div class="wcard-location">${weather.name}, ${weather.country}</div>`;
        document.querySelector('.wcard-wrapper').innerHTML += `<div class="wcard-temp">${weather.temp}°C</div>`;
    }
  }
}
</script>

<style lang="scss">
/* Weather Card Comp */
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