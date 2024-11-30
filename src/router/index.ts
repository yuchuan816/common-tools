import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/MelodyPitchPractice',
      name: 'MelodyPitchPractice',
      component: () => import('../views//MelodyPitchPractice/MelodyPitchPractice.vue'),
    },
    {
      path: '/SightSinging',
      name: 'SightSinging',
      component: () => import('../views/SightSinging/SightSinging.vue'),
    },
  ],
})

export default router
