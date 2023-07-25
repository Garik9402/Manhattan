import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
   {
      path: '/',
      name: 'Main',
      component: Main
   },
   {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery

   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
