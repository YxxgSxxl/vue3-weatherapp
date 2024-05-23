<script setup>

</script>

<template>
  <header>

    <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 48 48"> <path fill="#FF9800" d="M11 11H37V37H11z"></path><path fill="#FF9800" d="M11.272 11.272H36.728V36.728H11.272z" transform="rotate(-45.001 24 24)"></path><path fill="#FFEB3B" d="M13,24c0,6.077,4.923,11,11,11c6.076,0,11-4.923,11-11s-4.924-11-11-11C17.923,13,13,17.923,13,24"></path> </svg>
    </a>

    <ul>
        <router-link to="/">
            <a href="#"><li>Home</li></a>
        </router-link>
        <router-link to="/dashboard">
            <a href="#"><li>DashBoard</li></a>
        </router-link>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
    background: linear-gradient( 109.6deg,  #393F86 50%, #252a63 100.2% );
    color: white;
    height: 2rem;
    padding: 1rem 2rem 1rem 2rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow:  0 4px 16px -2px #393F86;

    a svg {
        animation: spin linear infinite 12s;
    }

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }

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