import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // { path: '/', component: () => import('../views/home'), redirect: '/docs' },
    {
      path: '/docs',
      component: () => import('../views/Main'),
      redirect: '/docs/button',
      children: [
        { path: 'button', component: () => import('../docs/button.md') }
      ]
    },
    { path: '*', redirect: '/docs' }
  ]
});
