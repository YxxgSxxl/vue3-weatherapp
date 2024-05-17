import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/home.vue';
import Dashboard from './page/dashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);

VueApp.use(router);
VueApp.mount('#app');
