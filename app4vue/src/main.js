import Vue from 'vue'
import App from './App.vue'
import vuex from "vuex";
import VueRouter from 'vue-router';
import vx from './vueStore/menu-index'
var routes = require('./router/routes').routes;
Vue.config.productionTip = false

Vue.use(vuex);
const store = new vuex.Store({
  actions: vx.actions,
  getters: vx.getters, 
  state: vx.state, 
  mutations: vx.mutations
})

Vue.use(VueRouter);
const router = new VueRouter({
  base: "/",
  mode: 'history',
  routes,
});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
