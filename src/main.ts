import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// import './style.css'
import './css/index.css'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
