import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import Router from './router'
import GlobalComponents from './globals'

const app = createApp(App)
app.use(Router)
app.use(GlobalComponents)
app.mount('#app')
