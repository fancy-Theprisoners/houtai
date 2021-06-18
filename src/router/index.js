import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page001 from '../views/page/page001.vue'
import Manage from '../views/manage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Page001',
    name: 'Page001',
    component: Page001
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
