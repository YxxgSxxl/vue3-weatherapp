<template>
    <div class="searchbar-wrapper">
        <input type="text" name="" id="" v-model.trim="query" @keydown.enter="search()" placeholder="Search the city you want...">
        <p></p>
        <div class="searchbar-result"></div>
    </div>
</template>

<script>
import * as AppConfig from '../../app.config.js'; /* Config file initialized */

export default {
    data() {
        return {
            query: ''
        }
    },

    methods: {
        async search() {
            document.querySelector('p').innerHTML = "<a href='http://api.openweathermap.org/data/2.5/weather?q=" + this.query + "&units=metric&appid=" + AppConfig.APIKEY +"' target='_blank'>" + this.query +"</a><br><br>";

            const query = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.query + "&units=metric&appid=" + AppConfig.APIKEY + "")
            .catch(error => console.log(error));
            if (query.ok) {
                const weather = await query.json();

                console.log(weather);

                document.querySelector('p').innerText += JSON.stringify(weather);
            } else {
                let error = 'Ville non trouvée';
                document.querySelector('p').innerText += error;
            }
        }
    }
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
</style>