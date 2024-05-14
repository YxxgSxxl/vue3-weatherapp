<template>
    <HeaderComp/>

    <h1>Welcome to the <span class="h1-gradient">Weather App!</span></h1>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';

export default {
    name: 'homePage',

    components: {
    HeaderComp,
  }
}
</script>

<style lang="scss" scoped>

</style>