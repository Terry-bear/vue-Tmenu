import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import vuex from "vuex";
import vx from './vueStore/menu-index'
var routes = require('./router/routes').routes;

Vue.config.productionTip = false;

// Router thingy start
Vue.use(VueRouter);
Vue.use(vuex);
const router = new VueRouter({
    base: "/#/app4/",
    mode: 'history',
    routes,
});

const store = new vuex.Store({
  actions: vx.actions,
  getters: vx.getters, 
  state: vx.state, 
  mutations: vx.mutations
})
window.router = router;
// Router thingy end

//Vue registration
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: "#app4",
        store,
        router,
        render: h => h(App)
    }
});

export const bootstrap = [vueLifecycles.bootstrap];

export function mount(props) {
    console.log('vue', props);
    createDomElement();
    Vue.mixin({
        data: function () {
            return {
                props: props
            }
        }
    })
    return vueLifecycles.mount(props);
}

export const unmount = [vueLifecycles.unmount];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById("app4");

    if (!el) {
        el = document.createElement("div");
        el.id = "app4";
        document.body.appendChild(el);
    }
    return el;
}


//Components importing
import Root from './pages/Root.vue'
import Test from './pages/Test.vue'
import Test2 from './pages/Test2.vue'
