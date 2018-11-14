import Animate from './packages/animate/main';
import Button from './packages/button/main';
import Row from './packages/row/main';
import Col from './packages/col/main';

const components = [
  Animate,
  Button,
  Row,
  Col
];

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Animate,
  Button,
  Row,
  Col
};
