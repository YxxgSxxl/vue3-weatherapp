<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar/>
        <WeatherCard/>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import WeatherCard from '@/components/WeatherCard.vue';

export default {
    name: 'dashboardPage',

    components: {
    SearchBar,
    WeatherCard,
  },
  props: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>