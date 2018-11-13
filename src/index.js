import BAnimate from './packages/animate/main';
import BAlert from './packages/alert/index.vue';
import BBadge from './packages/badge/index.vue';

const components = [
  BAnimate,
  BAlert,
  BBadge
];

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  BAnimate,
  BAlert,
  BBadge
};
