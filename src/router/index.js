import { createRouter, createWebHashHistory } from 'vue-router'
// 1.这样也可以导出 HomeView
// import HomeView from '../views/HomeView.vue'

// 2.路由懒加载的方式
const Home = () => import('../views/HomeView')
const About = () => import('../views/AboutView')
const Admin = () => import('../views/AdminView')
const NotFound = () => import('../views/NotFoundView')
const User = () => import('../views/UserView')

const routes = [
  {
    path: '/',
    redirect:'home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        component: About
      },
      {
        path: 'admin',
        name: 'admin',
        component:Admin
      },
      {
        //path: 'user/:id', // URL 传参
        path: 'user',
        name: 'user',
        component: User
      }
    ]
  },
  {path: '/404', name: '404', component:NotFound},
  {path: '/:pathMatch(.*)*', redirect: '/404'},
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
