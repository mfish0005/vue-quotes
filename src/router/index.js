import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Quotes from '../pages/Quotes/Quotes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: Quotes
  }
]

const router = new VueRouter({
  routes
})

export default router
