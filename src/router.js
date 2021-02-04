import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Dashboard = () => import('@/views/dashboard/Home')

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
