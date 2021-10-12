import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// import pages
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import CommonPage from './components/pages/CommonPage.vue';

const routes = [
    {
         path: '/home', 
         component: Home,
    },
    {
         path: '/about-us', 
         component: About,
    },
    {
         path: '/', 
         component: CommonPage,
         name: 'Root',
    }
];


const router = createRouter({
        history: createWebHistory(),
        routes: routes,
        linkActiveClass: 'active',
})

const app = createApp(App);
app.use(router);
app.mount('#app');
