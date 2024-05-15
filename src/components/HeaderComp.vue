<template>
  <header>
    <nav-link>
        <a href="#">
            <img src="/img/weather-logo.png" alt="Header Logo">
        </a>
    </nav-link>

    <ul>
        <router-link to="/">
            <a href="#"><li>Home</li></a>
        </router-link>
        <router-link to="/Dashboard">
            <a href="#"><li>DashBoard</li></a>
        </router-link>
        
    </ul>
  </header>
</template>

<script>
export default {
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
        font-size: 18px;

        img {
            width: 64px;
        }
    }
}
</style>