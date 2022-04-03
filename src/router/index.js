import { createRouter, createWebHashHistory } from 'vue-router'
// 1.这样也可以导出 HomeView
// import HomeView from '../views/HomeView.vue'

// 2.路由懒加载的方式
const Home = () => import('../views/HomeView')
const About = () => import('../views/AboutView')
const Admin = () => import('../views/AdminView')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: About
  },
  {
    path: '/admin',
    name: 'admin',
    component:Admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
