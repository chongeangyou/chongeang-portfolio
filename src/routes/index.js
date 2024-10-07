import { createRouter, createWebHistory } from 'vue-router'


//import Home from '@/pages/Home.vue'
const Home = () => import('@/pages/Home')
const About = () => import('@/pages/About.vue')
const Skill = () => import('@/pages/Skill.vue')
const Service = () => import('@/pages/service/Service.vue')
const Blog = () => import('@/pages/blog/Blog.vue')
const Contact  = () => import('@/pages/Contact.vue')
const TestApi  = () => import('@/components/TestApi.vue')
const BlogDetial  = () => import('@/pages/blog/BlogDetial.vue')
const NotFound  = () => import('@/pages/NotFound.vue')
const ServiceDetial = () => import('@/pages/service/ServiceDetial.vue')

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/skill', component: Skill },
    {path: '/service', component: Service},
    {path: '/service-detial', component: ServiceDetial},
    {path: '/blog', component: Blog},
    {path: '/blog/:id', component: BlogDetial},
    {path: '/contact', component: Contact},
    {path: '/test', component: TestApi},
    {path: '/test:id', component: TestApi},
    {path: '/:pathMatch(.*)*', component: NotFound}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
