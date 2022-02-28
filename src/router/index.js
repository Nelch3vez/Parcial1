import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import lugares from '../views/LugaresTuristicos.vue'
import occidente from '../views/Occidente.vue'
import central from '../views/Central.vue'
import paracentral from '../views/Paracentral.vue'
import oriente from '../views/Oriental.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lugares',
    name: 'Lugares',
    component: lugares
  },
  {
    path: '/occidente',
    name: 'Occidente',
    component: occidente
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
