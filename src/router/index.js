import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue';
import HomeView from '../views/HomeView.vue';
import ChatView from '../views/ChatView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPageView
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    }
  ]
})

export default router
