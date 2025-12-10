import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import AboutView from '@/views/AboutView.vue'
import DramaView from '@/views/DramaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/drama',
      name: 'drama',
      component: DramaView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ],
})

export default router
