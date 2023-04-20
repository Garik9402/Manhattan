import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
   {
      path: '/',
      name: 'Main',
      component: Main
   },
   {
      path: '/Gallery',
      name: 'Gallery',
      // route level code- splitting
      // this generates a separate chunk(menu.[hash].js) for this route
      // which is lazy - loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menu" */ '../views/Gallery.vue')
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
