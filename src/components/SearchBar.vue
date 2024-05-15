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
            api_icons: 'https://openweathermap.org/img/w/',
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

                // console.log(weather);

                // document.querySelector('p').innerHTML += this.$emit('wname', JSON.stringify(this.weather));

                // let searchres = document.querySelector('.searchbar-result');
                // let wicon = this.api_icons + this.weather + Object.values(this.weather) + ".png";
                // let wname = this.weather.name;
                // let wcountry = this.weather.sys.country;

                // searchres.innerHTML = '';
                // searchres.innerHTML += '<router-link class="wcard-wrapper" to="/Weather">';
                // searchres.innerHTML += `<div class="wcard-image"><img src="${wicon}" alt="Weather Card Image">${wicon + " " + this.weather}</div>`;
                // searchres.innerHTML += wname + ", " + wcountry;
                // searchres.innerHTML += '<router-link class="wcard-wrapper" to="/Weather">';
            } else {
                // let searchres = document.querySelector('.searchbar-result');
                
                // searchres.innerHTML = ""; 
                
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