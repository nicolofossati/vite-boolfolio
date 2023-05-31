import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppList from './pages/AppList.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import AppProject from './pages/AppProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects-list',
            name: 'projects',
            component: AppList
        },
        {
            path: '/about-us',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contact-us',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: AppProject
        }
    ]

});
export { router };