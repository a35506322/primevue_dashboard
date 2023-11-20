import { createRouter, createWebHistory } from 'vue-router'
import DefaultDashBoardLayout from '../layouts/DefaultDashBoardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultDashBoardLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
