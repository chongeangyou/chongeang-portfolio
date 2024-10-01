import { createRouter, createWebHistory } from 'vue-router'


//import Home from '@/pages/Home.vue'
const Home = () => import('@/pages/Home')
import About from '@/pages/About.vue'
import Skill from '@/pages/Skill.vue'
import Service from '@/pages/Service.vue'
import Blog from '@/pages/Blog.vue'
import Contact from '@/pages/Contact.vue'
import TestApi from '@/components/TestApi.vue'
import BlogDetial from '@/pages/BlogDetial.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/skill', component: Skill },
    {path: '/service', component: Service},
    {path: '/blog', component: Blog},
    {path: '/test/:id', component: BlogDetial},
    {path: '/contact', component: Contact},
    {path: '/test', component: TestApi}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
