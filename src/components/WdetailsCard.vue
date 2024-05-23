<script setup>

</script>

<template>
  <div class="wdc">
    <div class="wdc-wrapper">
        <div class="wdc-image">
            <img src="http://openweathermap.org/img/w/10n.png" alt="Weather current state image" loading="eager">
        </div>

        <div class="wdc-location">
            <!-- {{ weatherData.name }}, {{ weatherData.country }} -->
            Uckange, FR
        </div>

        <div class="wdc-temp">
            <!-- {{ weatherData.temp }}°C -->
            38°C
        </div>

        <div class="wdc-description">
            <!-- {{ weatherData.description }} -->
            Focused Clouds
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.wdc {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &-wrapper {
        background-color: var(--secondary-bg-color);
        box-shadow:  0 4px 16px -2px #393F86;
        width: 80%;
        min-height: 24rem;
        border-radius: 10px;
        padding: 0.8rem;
    }

    &-image img {
        width: 20%;
    }
}
</style>