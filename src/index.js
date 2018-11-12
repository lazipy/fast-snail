import BAlert from './packages/alert/index.vue';
import BBadge from './packages/badge/index.vue';

const components = [
  BAlert,
  BBadge
];

const install = (Vue, options) => {
  // 组件配置
  if (options && options.components) {
    for (let [key, value] of Object.entries(options.components)) {
      components.map(component => {
        if (component.name === value) {
          Vue.component(key, component);
        }
      });
    }
  } else {
    components.map(component => {
      Vue.component(component.name, component);
    });
  }
};

export default {
  install
};
