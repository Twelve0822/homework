import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'description',
      component: () => import('../views/DescriptionView.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue')
    }
  ]
})

export default router
