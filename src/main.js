import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './page/HomePage.vue';
import WeatherDetailsPage from './page/WeatherDetailsPage.vue';
import DashboardPage from './page/DashboardPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/city/:name', component: WeatherDetailsPage },
    { path: '/dashboard', component: DashboardPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);

VueApp.use(router);
VueApp.mount('#app');