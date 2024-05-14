<template>
    <div class="dashboard-wrapper">
        <h1>Search the city you want:</h1>
        
        <SearchBar/>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
    name: 'dashboardPage',

    components: {
    SearchBar,
  }
}
</script>

<style lang="scss" scoped>

</style>