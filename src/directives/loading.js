import Vue from 'vue';
import SLoading from '../packages/loading/main';

const Constructor = Vue.extend(SLoading);

const loadingCom = new Constructor();
loadingCom.vm = loadingCom.$mount();
const loadingEl = loadingCom.vm.$el;

export default {
  inserted (el, { value }) {
    if (value && !el.contains(loadingEl)) {
      el.appendChild(loadingEl);
    }
  },
  componentUpdated (el, { value }) {
    if (value && !el.contains(loadingEl)) {
      el.appendChild(loadingEl);
    } else if (!value && el.contains(loadingEl)) {
      el.removeChild(loadingEl);
    }
  },
  unbind (el) {
    el.contains(loadingEl) && el.removeChild(loadingEl);
  }
};
