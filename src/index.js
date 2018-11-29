// Components
import Animate from './packages/animate/main';
import Alert from './packages/alert/main';
import Anchor from './packages/anchor/main';
import AnchorLink from './packages/anchor/link';
import Avator from './packages/avator/main';
import Affix from './packages/affix/main';
import Backtop from './packages/backtop/main';
import Badge from './packages/badge/main';
import Bar from './packages/bar/main';
import Breadcrumb from './packages/breadcrumb/main';
import BreadcrumbItem from './packages/breadcrumb/item';
import Button from './packages/button/main';
import ButtonGroup from './packages/button/group';
import DropdownButton from './packages/button/dropdown';
import Card from './packages/card/main';
import Carousel from './packages/carousel/main';
import CarouselItem from './packages/carousel/item';
import Collapse from './packages/collapse/main';
import CollapseItem from './packages/collapse/item';
import CollapseAnimate from './packages/collapse/animate';
import Col from './packages/col/main';
import Divider from './packages/divider/main';
import Dropdown from './packages/dropdown/main';
import DropdownMenu from './packages/dropdown/menu';
import DropdownItem from './packages/dropdown/item';
import Icon from './packages/icon/main';
import List from './packages/list/main';
import ListItem from './packages/list/item';
import Loading from './packages/loading/main';
import Menu from './packages/menu/main';
import MenuGroup from './packages/menu/group';
import Submenu from './packages/menu/submenu';
import MenuItem from './packages/menu/menuItem';
import Row from './packages/row/main';
import Scroller from './packages/scroller/main';
import Spinner from './packages/spinner/main';
import Steps from './packages/steps/main';
import Step from './packages/steps/item';
import Tooltip from './packages/tooltip/main';
import Tabs from './packages/tabs/main';
import TabPane from './packages/tabs/pane';
import Tag from './packages/tag/main';
import Popover from './packages/popover/main';
import Timeline from './packages/timeline/main';
import TimelineItem from './packages/timeline/item';

// Directives
import Transfer from './directives/transfer';
import ChildEvent from './directives/child-event';
import OutClick from './directives/out-click';
import VLoading from './directives/loading';
import VScroller from './directives/scroller';

const components = [
  Animate,
  Alert,
  Anchor,
  AnchorLink,
  Avator,
  Affix,
  Backtop,
  Badge,
  Bar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  DropdownButton,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  CollapseAnimate,
  Row,
  Col,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  List,
  ListItem,
  Loading,
  Menu,
  MenuGroup,
  Submenu,
  MenuItem,
  Icon,
  Steps,
  Step,
  Tooltip,
  Tabs,
  TabPane,
  Tag,
  Popover,
  Scroller,
  Spinner,
  Timeline,
  TimelineItem
];

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.directive('transfer', Transfer);
  Vue.directive('child-event', ChildEvent);
  Vue.directive('out-click', OutClick);
  Vue.directive('loading', VLoading);
  Vue.directive('scroller', VScroller);
};

export default {
  install,
  Animate,
  Alert,
  Anchor,
  AnchorLink,
  Avator,
  Backtop,
  Badge,
  Bar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  DropdownButton,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  CollapseAnimate,
  Row,
  Col,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  List,
  ListItem,
  Loading,
  Menu,
  MenuGroup,
  Submenu,
  MenuItem,
  Icon,
  Steps,
  Step,
  Tooltip,
  Tabs,
  TabPane,
  Tag,
  Popover,
  Scroller,
  Spinner,
  Timeline,
  TimelineItem
};
