import { createApp } from 'vue'; // Vue App instance
import { createPinia } from 'pinia'; // Pinia Store instance
import { createRouter, createWebHashHistory } from 'vue-router'; // Vue Rooter instance
import App from './App.vue'; // Vue App component

import HomePage from './page/HomePage.vue'; // Home page
import WeatherDetailsPage from './page/WeatherDetailsPage.vue'; // Weather Details page
import DashboardPage from './page/DashboardPage.vue'; // Dashboard page

// Vue Router routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/city/:name', component: WeatherDetailsPage },
    { path: '/dashboard', component: DashboardPage },
]

// Vue Router history
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App); // Create Vue App

VueApp.use(router); // Use Vue Router routes
VueApp.mount('#app'); // Mount the Vue App