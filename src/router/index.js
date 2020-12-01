import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IfElse from '../views/IfElse'
import Show from '../views/Show'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ifelse',
    name: 'IfElse',
    component: IfElse
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/vfor',
    name: 'VFor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VFor.vue')
  },
  {
    path: '/vtext',
    name: 'VText',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VText.vue')
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

const router = new VueRouter({
  routes
})

export default router
