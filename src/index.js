// Components
import Animate from './packages/animate/main';
import Alert from './packages/alert/main';
import Avator from './packages/avator/main';
import Affix from './packages/affix/main';
import Backtop from './packages/backtop/main';
import Badge from './packages/badge/main';
import Bar from './packages/bar/main';
import Breadcrumb from './packages/breadcrumb/main';
import BreadcrumbItem from './packages/breadcrumb/item';
import Button from './packages/button/main';
import ButtonGroup from './packages/button/group';
import Card from './packages/card/main';
import Carousel from './packages/carousel/main';
import CarouselItem from './packages/carousel/item';
import Collapse from './packages/collapse/main';
import CollapseItem from './packages/collapse/item';
import CollapseAnimate from './packages/collapse/animate';
import Col from './packages/col/main';
import Icon from './packages/icon/main';
import Row from './packages/row/main';
import Tooltip from './packages/tooltip/main';
import Popover from './packages/popover/main';

// Directives
import Transfer from './directives/transfer';
import ChildEvent from './directives/child-event';

const components = [
  Animate,
  Alert,
  Avator,
  Affix,
  Backtop,
  Badge,
  Bar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  CollapseAnimate,
  Row,
  Col,
  Icon,
  Tooltip,
  Popover
];

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.directive('transfer', Transfer);
  Vue.directive('child-event', ChildEvent);
};

export default {
  install,
  Animate,
  Alert,
  Avator,
  Backtop,
  Badge,
  Bar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  CollapseAnimate,
  Row,
  Col,
  Icon,
  Tooltip,
  Popover
};
