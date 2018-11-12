import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/styles/layout', component: () => import('./views/classes/layout.vue') }
  ],
  mode: 'history'
});
