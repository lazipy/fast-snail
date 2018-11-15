import Animate from './packages/animate/main';
import Alert from './packages/alert/main';
import Avator from './packages/avator/main';
import Backtop from './packages/backtop/main';
import Button from './packages/button/main';
import ButtonGroup from './packages/button/group';
import Row from './packages/row/main';
import Col from './packages/col/main';
import Icon from './packages/icon/main';

const components = [
  Animate,
  Alert,
  Avator,
  Backtop,
  Button,
  ButtonGroup,
  Row,
  Col,
  Icon
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
  Backtop,
  Button,
  ButtonGroup,
  Row,
  Col,
  Icon
};
