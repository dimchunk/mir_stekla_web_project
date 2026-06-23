import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/HomeView.vue'
import DeliveryView from '@/DeliveryView.vue'
import ContactsView from '@/ContactsView.vue'
import CalculatorView from '@/CalculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: DeliveryView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView,
    },
  ],
})

export default router
