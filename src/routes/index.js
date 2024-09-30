import { createRouter, createWebHistory } from 'vue-router'


//import Home from '@/pages/Home.vue'
const Home = () => import('@/pages/Home')
import About from '@/pages/About.vue'
import Skill from '@/pages/Skill.vue'
import Service from '@/pages/Service.vue'
import Blog from '@/pages/Blog.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/skill', component: Skill },
    {path: '/service', component: Service},
    {path: '/blog', component: Blog},
    {path: '/contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
