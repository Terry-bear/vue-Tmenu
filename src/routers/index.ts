import Vue from 'vue'
import Router from 'vue-router'
import dyRouter from './dynamic-router'
import CloudHome from '@/views/CloudHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'CloudHome',
    component: CloudHome,
    // 动态路由
    children: dyRouter
  }]
})
