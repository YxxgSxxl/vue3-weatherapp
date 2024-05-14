<template>
    <div class="searchbar-wrapper">
        <input type="text" name="" id="" v-model.trim="query" v-bind:class="[isActive ? 'displayed' : 'hidden']" @keydown.enter="search()" placeholder="Search the city you want...">
        <p></p>
        <div class="searchbar-result" v-if="typeof weather.cod != '200'">
            <WeatherCard/>
        </div>
    </div>
</template>

<script>
import * as AppConfig from '../../app.config'; /* Config file (API key) initialized */
import WeatherCard from './WeatherCard.vue'; /* Weather Card component initialized */

export default {    
    data() {
        return {
            api_base: 'http://api.openweathermap.org/data/2.5/weather?q=',
            query: '',
            weather: {}
        }
    },

    components: {
        WeatherCard,
    },
    
    methods: {
        // search() {
        //     fetch(`${this.api_base}${this.query}&units=metric&appid=${AppConfig.APIKEY}`)
        //     .then(res => {
        //         res.json();
        //     }).then(this.results);
        // },
        // results(results) {
        //     this.weather = results;
        // },
        async search() {
            const query = await fetch(`${this.api_base}${this.query}&units=metric&appid=${AppConfig.APIKEY}`)
            .catch(error => console.log(error));
            // Check the statement of the query
            if (query.ok) {
                const weather = await query.json();

                document.querySelector('p').innerHTML = ""; 

                Object.keys(weather).forEach(key => {
                console.log(key, weather[key]);

                return WeatherCard;
            });
                
                // document.querySelector('p').innerHTML = "<a href='http://api.openweathermap.org/data/2.5/weather?q=" + this.query + "&units=metric&appid=" + AppConfig.APIKEY +"' target='_blank'>" + this.query +"</a><br><br>";
                
                // console.log(weather);
    
                // document.querySelector('p').innerHTML += JSON.stringify(weather);                
            } else {
                let error = 'Ville non trouvée';
                document.querySelector('p').innerHTML = "<span style='color: #b45252;'>" + error + "</span>";
            }
        },
    },

}
</script>

<style lang="scss" scoped>
input[type=text] {
	appearance: none;
	border: none;
	outline: none;
	border-bottom: .2em solid #393F86;
	background: rgba(#393F86, .2);
	border-radius: .2em .2em 0 0;
	padding: .4em;
	color: #8d96ff;
}

.displayed {
    display: inline;
}

.hidden {
    display: hidden;
}
</style>