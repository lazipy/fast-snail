import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('../views/home') },
    {
      path: '/docs',
      component: () => import('../views/Main'),
      children: [
        { path: 'button', component: () => import('../docs/test.md') }
      ]
    }
  ]
});
