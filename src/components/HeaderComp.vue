<template>
  <header>
    <img src="/img/weather-logo.png" alt="">

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
    background-color: navy;
    color: white;
    height: 2rem;
    padding: 1rem 4rem 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 100%;
        height: auto;
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
</style>