import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Testimonials from '../components/Testimonials.vue'
import Rates from '../components/Rates.vue'
import Team from '../components/Team.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/testimonials', component: Testimonials },
  { path: '/rates', component: Rates },
  { path: '/team', component: Team }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
