import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/homepage.vue'
import productdetails from '../views/productdetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home, 
    },

    {
      path: '/productdetails/:id',
      name: 'productdetails',
      component: productdetails, 
      // props: true,
    },
    
  ]
})

export default router
