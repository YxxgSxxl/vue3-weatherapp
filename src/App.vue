<script setup>
import HeaderComp from './components/HeaderComp.vue';
</script>

<template>
  <div id="app">
    <HeaderComp/>

    <router-view></router-view>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); /* Roboto Google Font imported */
@import url('./stylesheet/normalize.css'); /* Normalize.css imported */

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  /* Root Variables */
  --main-bg-color: #080838;
  --secondary-bg-color: #2F3576;

  --home-h1-color: rgba(123,183,253,1);
  --home-h1-gradient: linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );

  --details-loc-gradient: linear-gradient( 109.6deg,  rgba(0, 238, 255, 0.73) 11.2%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );
}

body {
  background-color: #080838;
}
</style>