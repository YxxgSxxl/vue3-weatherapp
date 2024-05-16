<template>
    <div class="home-wrapper">
        <h1>Welcome to the <span class="h1-gradient">Weather App!</span></h1>
    
        <section class="home-suggests">
          <h2>City Featured:</h2>  

          <CardRow v-for="(data, i) in 1" :key="i"/>
        </section>
    </div>
</template>

<script>
import * as AppConfig from '../../app.config';
import CardRow from '../components/CardRow.vue';
// import { onMounted, ref } from 'vue';

export default {
  name: 'homePage',

  components: {
    CardRow,
  },
  setup() {
    let city1 = 'New Orleans';
    let city3 = 'Paris';
    let city2 = 'Toronto';

    const request1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&units=metric&appid=${AppConfig.APIKEY}`).then(response => response.json());
    const request2 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&units=metric&appid=${AppConfig.APIKEY}`).then(response => response.json());
    const request3 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city3}&units=metric&appid=${AppConfig.APIKEY}`).then(response => response.json());
    
    Promise.all([request1, request2, request3])
    .then(([data1, data2, data3]) => {
      class Weather {
        constructor(wname, wlang, wtemp, wdesc, wimg) {
          this.wname = wname;
          this.wlang = wlang;
          this.wtemp = wtemp;
          this.wdesc = wdesc;
          this.wimg = wimg;
        } 
      }
      // console.log(Weather);
      
      let data_weather = [];
      // console.log(data_weather);

      // console.log(data1, data2, data3);
      const makeDataWeather = () => {
        let three_weather = [];

        for (const weather of [data1, data2, data3]) {
          const new_weather = new Weather(weather.name, weather.sys.country, weather.main.temp, weather.weather[0].description, weather.weather[0].icon)
          
          three_weather.push(new_weather);
          // console.log(three_weather);
          data_weather.push(three_weather);
          console.log(data_weather);
          // data_weather.push(three_weather);
        }
      }

      makeDataWeather();
    })
    .catch(error => {
      console.error(error);
    });
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 2em;
    color: white;
  }

  .h1-gradient {
    background-color: rgba(123,183,253,1);
    background-image: linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    filter: drop-shadow(6px 3px 2px rgba(0, 0,0, .5));
    }
</style>