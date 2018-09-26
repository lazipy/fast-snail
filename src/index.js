import Popper from './packages/popper/main';
import Scroller from './packages/scroller/main';

const components = [
  Popper,
  Scroller
];

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Popper,
  Scroller
};
