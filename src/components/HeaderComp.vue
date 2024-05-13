<template>
  <header>
    <a href="index.html">
        <img src="/img/weather-logo.png" alt="">
    </a>

    <ul>
        <a href="index.html"><li>Home</li></a>
        <a href="#"><li>DashBoard</li></a>
    </ul>
  </header>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
    }
}
</script>

<style lang="scss" scoped>
header {
    // background-color: #393F86;
    background: linear-gradient( 109.6deg,  #393F86 50%, #252a63 100.2% );
    color: white;
    height: 2rem;
    padding: 1rem 2rem 1rem 2rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow:  0 4px 16px -2px #393F86;

    img {
        width: 48px;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        gap: 2rem;

        a {
            text-decoration: none;
            color: white;
        }

        a:hover {
            color: #a1d0ff;
        }
    }
}

/* Large desktop Responsive */
@media (min-width: 1200px) {
    header {
        background-color: #393F86;
        height: 3rem;
        padding: 1rem 8rem 1rem 8rem;
        font-size: 20px;

        img {
            width: 52px;
        }
    }
}
</style>