import { getStyle } from '../utils/dom';

let zIndex = 2000;

export default {
  inserted (el, { value = true }) {
    if (!el) return;
    el.style.zIndex = ++zIndex;
    value && document.body.appendChild(el);
  },
  update (el) {
    if (getStyle(el, 'display') === 'none') {
      el.style.zIndex = ++zIndex;
    }
  },
  unbind (el) {
    document.body.removeChild(el);
  }
};
