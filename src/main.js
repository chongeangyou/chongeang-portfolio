import { createApp } from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import router from './routes'
import i18n from '@/i18n/index.js'
import pinia from '@/store/index.js'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(pinia)
app.use(VueTypedJs)
app.mount('#app')
