<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  weatherCardData: Object,
});

function imgSource(source) {
  return 'https://openweathermap.org/img/w/' + source + '.png';
}
</script>

<template>
  <div class="wdc">
    <div class="wdc-wrapper">
        <div class="wdc-location">
            {{ props.weatherCardData?.name }}, {{ props.weatherCardData?.country }}

            <div class="wdc-image">
            <img :src="imgSource(props.weatherCardData?.icon)" alt="Weather current state image" loading="eager">
        </div>
        </div>
        
        <div class="wdc-description">
            <p>{{ props.weatherCardData?.description }}</p>

            <div class="wdc-temp">
                {{ props.weatherCardData?.temp }}°C
            </div>
        </div>
        

    </div>
  </div>
</template>


<style lang="scss" scoped>
.wdc {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    
    &-wrapper {
        background-color: var(--secondary-bg-color);
        box-shadow:  0 4px 16px -2px #393F86;
        width: 80%;
        min-height: 24rem;
        border-radius: 10px;
        padding: 2rem 0.8rem 2rem 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 0rem;
    }
    
    &-location {
        background: var(--details-loc-gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2.5em;
        font-weight: 500;

        display: flex;
        flex-direction: column;
        gap: 20px;

        .wdc-image img {
            width: 15%;
        }
    }
    
    &-description {
        p {
            font-size: 1.6em;
            margin: 0;
        }

        .wdc-temp {
            font-size: 2.5em;
            font-weight: 300;
        }
    }
    
}

/* Large desktop Responsive */
@media (min-width: 1200px) {
    .wdc {
        &-image img {
            width: 12%;
        }

        &-wrapper {
            background-color: var(--secondary-bg-color);
            box-shadow:  0 4px 16px -2px #393F86;
            width: 40%;
            min-height: 24rem;
            border-radius: 10px;
            padding: 2rem 0.8rem 2rem 0.8rem;
            gap: 3rem;
            justify-content: center;
        }

        &-location {
            font-size: 3.5em;
        }

        &-description {
            font-size: 2em;

            .wdc-temp {
                font-size: 1.6em;
                font-style: italic;
                font-weight: 500;
            }
        }

    }
}
</style>