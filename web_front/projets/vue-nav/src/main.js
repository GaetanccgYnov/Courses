import './assets/grid-base.css'
import './assets/home.css'
import './assets/huge-table.css'
import './assets/team.css'
import './assets/testimonials.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
