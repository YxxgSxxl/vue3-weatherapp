<template>
    <div class="home-wrapper">
        <h1>Welcome to the <span class="h1-gradient">Weather App!</span></h1>
    
        <router-link to="/Weather">
                <a href="#"><li>Home</li></a>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'homePage',

    components: {
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 2em;
    color: white;
  }

  .h1-gradient {
    background-color: rgba(123,183,253,1);
    background-image: linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    filter: drop-shadow(6px 3px 2px rgba(0, 0,0, .5));
    }
</style>