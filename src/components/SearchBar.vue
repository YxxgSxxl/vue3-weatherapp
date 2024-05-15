<template>
    <div class="searchbar-wrapper">
        <input type="text" name="" id="" v-model.trim="query" @keydown.enter="search()" placeholder="Search the city you want...">
        <p></p>
    </div>
</template>

<script>
import * as AppConfig from '../../app.config'; /* Config file (API key) initialized */

export default {    
    data() {
        return {
            api_base: 'http://api.openweathermap.org/data/2.5/weather?q=',
            query: '',
            weather: {},
        }
    },
    
    methods: {
        async search() {
            const query = await fetch(`${this.api_base}${this.query}&units=metric&appid=${AppConfig.APIKEY}`)
            .catch(error => console.log(error));
            // Check the statement of the query
            if (query.ok) {
                const weather = await query.json();

                document.querySelector('p').innerHTML = ""; 

                Object.keys(weather).forEach(key => {
                    console.log(key, weather[key]);
                });

                this.$emit('weather', {icon: weather.weather[0].icon, name: weather.name, country: weather.sys.country, temp: weather.main.temp});
            } else {                
                document.querySelector('.wcard-wrapper').innerHTML = ""; 
                
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