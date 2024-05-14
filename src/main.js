import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/home.vue';
import Dashboard from './page/dashboard.vue';
import Weather from './page/weather.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Dashboard', component: Dashboard },
    { path: '/Weather', component: Weather }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);

VueApp.use(router);
VueApp.mount('#app');
