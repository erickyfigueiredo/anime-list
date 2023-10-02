import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Player from '../views/Player.vue'
import List from '../views/List.vue'

const routes = [
    { path: '/', component: Home, name:'Home' },
    { path: '/about/:slug', component: About, name:'About' },
    { path: '/player/:slug', component: Player, name:'Player' },
    { path: '/list', component: List, name:'List' },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router