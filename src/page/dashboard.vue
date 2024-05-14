<template>
    <HeaderComp/>

    <SearchBar/>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import HeaderComp from '../components/HeaderComp.vue';

export default {
    name: 'dashboardPage',

    components: {
    HeaderComp,
    SearchBar,
  }
}
</script>

<style lang="scss" scoped>

</style>