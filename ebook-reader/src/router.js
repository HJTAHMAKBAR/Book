import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/store'
    },
    {
      path: '/ebook',
      component: () => import('./views/ebook/index.vue'),
      children: [
        {
          path: ':filename',
          component: () => import('./components/ebook/EReader.vue')
        }
      ]
    },
    {
      path: '/store',
      component: () => import('./views/store/index.vue'),
      redirect: '/store/home',
      children: [
        {
          path: 'home',
          component: () => import('./views/store/StoreHome.vue')
        },
        {
          path: 'shelf',
          component: () => import('./views/store/Shelf.vue')
        },
        ]
    }
  ]
})
