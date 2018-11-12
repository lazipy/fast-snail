import Vue from 'vue';
import router from './router';
import App from './App';
import Eagle from '../lib/eagle.min';
// import '../lib/styles/eagle.css';

Vue.use(Eagle, {
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
