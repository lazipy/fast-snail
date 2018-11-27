import Vue from 'vue';
import SScroller from '../packages/scroller/main';

const Constructor = Vue.extend(SScroller);
const component = new Constructor();
component.vm = component.$mount();
const El = component.vm.$el;

let childs = null;

const insertScroll = (el, childs) => {
  for (let child of childs) {
    El.children[0].appendChild(child);
  }
  el.innerHTML = '';
  el.appendChild(El);
  component.vm.$nextTick(() => {
    component.vm.init();
  });
}

export default {
  inserted (el) {
    childs = el.children;
    insertScroll(el, childs);
  },
  componentUpdated (el) {
    childs = el.children;
    childs = [...childs];
    childs.shift();
    insertScroll(el, childs);
  },
  unbind (el) {
    el.innerHTML = '';
    for (let child of childs) {
      el.appendChild(child);
    }
  }
};
