import { createApp } from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'


const routes = [
    {path: '/', component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.use(VueTypedJs)
app.mount('#app')
