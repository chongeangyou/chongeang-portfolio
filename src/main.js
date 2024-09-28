import { createApp } from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import router from './routes'


const app = createApp(App)
app.use(router)
app.use(VueTypedJs)
app.mount('#app')
