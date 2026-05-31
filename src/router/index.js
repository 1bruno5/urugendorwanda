import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
    },
    {
      path: '/Services',
      name: 'services',
      component: () => import('../components/Services.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue'),
    },
    {
      path: '/gallery/photos',
      name: 'photos',
      component: () => import('../components/Photos.vue'),
    },
    {
      path: '/gallery/videos',
      name: 'videos',
      component: () => import('../components/Videos.vue'),
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: () => import('../components/Destinations.vue'),
    },
    // ── Province pages ──────────────────────────────
    {
      path: '/destinations/northern',
      name: 'northern',
      component: () => import('../components/provinces/north.vue'),
    },
    {
      path: '/destinations/southern',
      name: 'southern',
      component: () => import('../components/provinces/south.vue'),
    },
    {
      path: '/destinations/kigali',
      name: 'kigali',
      component: () => import('../components/provinces/kigali.vue'),
    },
    {
      path: '/destinations/eastern',
      name: 'eastern',
      component: () => import('../components/provinces/east.vue'),
    },
    {
      path: '/destinations/western',
      name: 'western',
      component: () => import('../components/provinces/west.vue'),
    },
  ],
  // Scroll to top on every navigation
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router