import Vue from 'vue';
import SScroller from '../packages/scroller/main';

const Constructor = Vue.extend(SScroller);
const component = new Constructor();
component.vm = component.$mount();
const El = component.vm.$el;

let childs = null;

export default {
  bind (el) {
    childs = el.children;
    for (let child of childs) {
      El.children[0].appendChild(child);
    }
    el.innerHTML = '';
    el.appendChild(El);
    component.vm.$nextTick(() => {
      component.vm.update();
    });
  },
  unbind (el) {
    el.innerHTML = '';
    for (let child of childs) {
      el.appendChild(child);
    }
  }
};
