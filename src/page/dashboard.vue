<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar/>

        <!-- <WeatherCard v-for="(data, i) in 1" :weatherData="data" :key="i"/> -->
    </div>
</template>

<script>
import SearchBar from '../components/WeatherCard.vue';

export default {
    name: 'dashboardPage',

    components: {
    SearchBar,
  },
}
</script>

<style lang="scss">

</style>