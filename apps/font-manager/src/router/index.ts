import { createRouter, createWebHistory } from 'vue-router'
import files from './files'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/AppLayout.vue')
    },
    ...files
  ]
})

export default router
