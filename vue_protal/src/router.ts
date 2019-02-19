import Vue from 'vue'
import Router from 'vue-router'
import permission from './permission'

Vue.use(Router)

const router: Router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // todo requiresAuth: boolean 需要权限检查的项,true则不需要检查权限
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '测试页',
        requiresAuth: false
      },
      component: (r: any) =>
      (require as any).ensure([], () => r(require('./views/login/Home.vue')), 'Home')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页',
        requiresAuth: true
      },
      component: (r: any) =>
      (require as any).ensure([], () => r(require('./views/login/index.vue')), 'login')
    },
    {
      path: '/menu',
      name: 'menu',
      meta: {
        title: '菜单页',
        requiresAuth: false
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: (r: any) =>
      (require as any).ensure([], () => r(require('./views/layout/index.vue')), 'layout')
    }
  ]
})

// 路由勾子数据(全局守卫)
// https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
Object.keys(permission).forEach(hook => {
  router.beforeEach((permission as any)[hook])
})

export default router
