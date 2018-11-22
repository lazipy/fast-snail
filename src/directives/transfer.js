import { getStyle } from '../utils/dom';

let index = 0;

export default {
  inserted (el, { value = true }) {
    if (!el) return;

    const selfIndex = getStyle(el, 'zIndex');
    index = Math.max(index, selfIndex);
    el.style.zIndex = ++index;

    value && document.body.appendChild(el);
  },
  update (el) {
    if (getStyle(el, 'display') === 'none') {
      el.style.zIndex = ++index;
    }
  },
  unbind (el) {
    document.body.removeChild(el);
  }
};
