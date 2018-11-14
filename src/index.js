import Animate from './packages/animate/main';
import Alert from './packages/alert/main';
import Avator from './packages/avator/main';
import Button from './packages/button/main';
import ButtonGroup from './packages/button/group';
import Row from './packages/row/main';
import Col from './packages/col/main';

const components = [
  Animate,
  Alert,
  Avator,
  Button,
  ButtonGroup,
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
  Alert,
  Avator,
  Button,
  ButtonGroup,
  Row,
  Col
};
