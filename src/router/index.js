import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'CartView',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/order',
    name: 'OrderView',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/howtobuy',
    name: 'HowToBuy',
    component: () => import('../views/HowToBuyView.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
  }
})

export default router
