import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UnauthorizedPage from '@/pages/UnauthorizedPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: UnauthorizedPage
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (
    to.path !== '/unauthorized' &&
    (!to.query.secret || to.query.secret !== import.meta.env.VITE_SECRET_URL_QUERY)
  ) {
    return next({ path: '/unauthorized' })
  } else {
    return next()
  }
})

export default router
