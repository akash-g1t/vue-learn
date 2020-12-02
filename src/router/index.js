import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IfElse from '../views/IfElse'
import Show from '../views/Show'
import VBind from '../views/VBind'
import VOn from '../views/VOn'
import VForm from '../views/VForm'

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
  },
  {
    path: '/vbind',
    name: 'VBind',
    component: VBind
  },
  
  {
    path: '/von',
    name: 'VOn',
    component: VOn
  },
  {
    path: '/vform',
    name: 'VForm',
    component: VForm
  },
]

const router = new VueRouter({
  routes
})

export default router
