import Vue from 'vue';
import router from './router';
import App from './App';
import Snail from '../src/index.js';
import '../src/styles/index.scss';

Vue.use(Snail, {
  components: {
    'xx-alert': 'BAlert'
  }
});

Vue.config.productionTip = false;

new Vue ({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
});
