import { on, off } from '../utils/dom';

// 给元素的所有子元素绑定事件
const onChildren = (el, events, handlers) => {
  const children = el.children;

  events.forEach((event, index) => {
    for (let child of children) {
      // 判断元素是否添加过该事件
      if (
        child[event] &&
        child[event] === handlers[index]
      ) return;

      child[event] = handlers[index];

      on(child, event, handlers[index]);
    }
  });
};

// 给元素的所有子元素解绑事件
const offChildren = (el, events, handlers) => {
  const children = el.children;

  events.forEach((event, index) => {
    for (let child of children) {
      // 判断元素是否拥有该事件
      if (
        !child[event] ||
        !child[event] !== handlers[index]
      ) return;

      off(child, event, handlers[index]);
    }
  });
};

export default {
  bind (el, { value }) {
    onChildren(el, value.events, value.handlers);
  },
  componentUpdated (el, { value }) {
    onChildren(el, value.events, value.handlers);
  },
  unbind (el, { value }) {
    offChildren(el, value.events, value.handlers);
  }
};
