import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Header from '../components/demo/Header'
import Tablebar from '../components/demo/Tablebar'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
    path: '/header',
    name: 'Header',
    component: () => import('../components/demo/Header')
  }
  ,
  {
    path: '/tablebar',
    name: 'Tablebar',
    component: () => import('../components/demo/Tablebar')
  },
  {
    path: '/yuyue',
    name: 'Yuyue',
    component: () => import('../views/Yuyue')
  },
  {
    path: '/phone',
    name: 'Phone',
    component: () => import('../views/Phone')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail')
  }
  ,
  {
    path: '/time',
    name: 'Time',
    component: () => import('../views/Time')
  }
  ,
  {
    path: '/baojia',
    name: 'Baojia',
    component: () => import('../views/Baojia')
  },
  {
    path: '/node',
    name: 'Node',
    component: () => import('../views/Node')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
