import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
    },
    {
        path: '/Klass/:id',
        component: () => import('../components/Klass.vue')
    },
    {
        path: '/Cabinet/:studentId',
        component: () => import('../components/Cabinet.vue')
    }
]

export default createRouter({
    routes,
    history: createWebHistory(),
})