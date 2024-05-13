<template>
  <input type="text" name="" id="" v-model="query" @keydown.enter="search()" placeholder="Search the city you want...">
  <br>
  <p>{{ result }}</p>
</template>

<script>
export default {
    data() {
        return {
            query: ''
        }
    },

    methods: {
        search() {
            document.querySelector('p').innerHTML = "<a href='http://api.openweathermap.org/data/2.5/weather?q=" + this.query + "&appid=95542917d76459372397547a96610cd8' target='_blank'>" + this.query +"</a>";
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