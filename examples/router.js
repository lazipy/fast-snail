import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/affix', component: () => import('./views/affix.vue') },
    { path: '/alert', component: () => import('./views/alert.vue') },
    { path: '/anchor', component: () => import('./views/anchor.vue') },
    { path: '/animate', component: () => import('./views/animate.vue') },
    { path: '/avator', component: () => import('./views/avator.vue') },
    { path: '/backtop', component: () => import('./views/backtop.vue') },
    { path: '/badge', component: () => import('./views/badge.vue') },
    { path: '/bar', component: () => import('./views/bar.vue') },
    { path: '/breadcrumb', component: () => import('./views/breadcrumb.vue') },
    { path: '/button', component: () => import('./views/button.vue') },
    { path: '/card', component: () => import('./views/card.vue') },
    { path: '/carousel', component: () => import('./views/carousel.vue') },
    { path: '/collapse', component: () => import('./views/collapse.vue') },
    { path: '/divider', component: () => import('./views/divider.vue') },
    { path: '/dropdown', component: () => import('./views/dropdown.vue') },
    { path: '/list', component: () => import('./views/list.vue') },
    { path: '/loading', component: () => import('./views/loading.vue') },
    { path: '/menu', component: () => import('./views/menu.vue') },
    { path: '/popover', component: () => import('./views/popover.vue') },
    { path: '/scroller', component: () => import('./views/scroller.vue') },
    { path: '/spinner', component: () => import('./views/spinner.vue') },
    { path: '/steps', component: () => import('./views/steps.vue') },
    { path: '/tabs', component: () => import('./views/tabs.vue') },
    { path: '/tag', component: () => import('./views/tag.vue') },
    { path: '/timeline', component: () => import('./views/timeline.vue') },
    { path: '/tooltip', component: () => import('./views/tooltip.vue') },
    { path: '/icon', component: () => import('./views/icon.vue') },
    { path: '/grid', component: () => import('./views/grid.vue') },
    { path: '/layout', component: () => import('./views/layout.vue') }
  ],
});
