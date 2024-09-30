import { createRouter, createWebHistory } from 'vue-router'


import Home from '@/pages/Home.vue'
import AboutBackground from '@/components/AboutBackground.vue'


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: AboutBackground}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
