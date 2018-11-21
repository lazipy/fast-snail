import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/affix', component: () => import('./views/affix.vue') },
    { path: '/alert', component: () => import('./views/alert.vue') },
    { path: '/animate', component: () => import('./views/animate.vue') },
    { path: '/avator', component: () => import('./views/avator.vue') },
    { path: '/backtop', component: () => import('./views/backtop.vue') },
    { path: '/badge', component: () => import('./views/badge.vue') },
    { path: '/bar', component: () => import('./views/bar.vue') },
    { path: '/breadcrumb', component: () => import('./views/breadcrumb.vue') },
    { path: '/layout', component: () => import('./views/layout.vue') }
  ],
});
