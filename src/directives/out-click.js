import { on, off } from '../utils/dom';

export default {
  bind (el, binding) {
    const handler = (e) => {
      if (el.contains(e.target)) return;
      binding.value();
    };

    if (el.outclick && el.outclick === handler) return;
    el.outclick = handler;

    on(document, 'click', handler);
  },
  unbind (el) {
    if (!el.outclick) return;
    off(document, 'click', el.outclick);
  }
};
