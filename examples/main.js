import Vue from 'vue';
import router from './router';
import App from './App';
import Eagle from '../src';
import '../src/styles/index';

Vue.use(Eagle);
Vue.config.productionTip = false;

new Vue ({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
});
