import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landlords from '../components/landlords/Landlords'
import Landlord from '../components/landlords/Landlord'

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
  {
    path: "/landlords",
    name: "Landlords",
    component: Landlords
  },
  {
    path: "/landlords/:landlordId",
    // name: "landlord",
    component: Landlord,
    
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
