import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import landlordsRoutes from './landlordsRoutes'
import propertiesRoutes from './propertiesRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...landlordsRoutes,
  ...propertiesRoutes
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
