import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/affix', component: () => import('./views/affix.vue') },
    { path: '/alert', component: () => import('./views/alert.vue') },
    { path: '/layout', component: () => import('./views/layout.vue') }
  ],
});
