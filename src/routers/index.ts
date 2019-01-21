import Vue from 'vue'
import Router from 'vue-router'
import dyRouter from './dynamic-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'MainHome',
    component: () => import('@/views/layout/index.vue')
    // 动态路由
    // children: dyRouter
  }]
})
