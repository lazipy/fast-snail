import { getStyle } from '../../utils/dom';

const transition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out';
const Transition = {
  'before-enter' (el) {
    el.style.boxSizing = 'content-box';
    el.style.transition = transition;
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = getStyle(el, 'paddingTop');
    el.dataset.oldPaddingBottom = getStyle(el, 'paddingBottom');

    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  },

  'enter' (el, done) {
    el.dataset.oldOverflow = el.style.overflow;

    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';

    setTimeout(() => {
      done();
    }, 300);
  },

  'after-enter' (el) {
    el.style.boxSizing = 'border-box';
    el.style.transition = '';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  },

  'before-leave' (el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = getStyle(el, 'paddingTop');
    el.dataset.oldPaddingBottom = getStyle(el, 'paddingBottom');
    el.dataset.oldOverflow = getStyle(el, 'overflow');

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  },

  'leave' (el, done) {
    if (el.scrollHeight !== 0) {
      el.style.transition = transition;
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
    setTimeout(() => {
      done();
    }, 300);
  },

  'after-leave' (el) {
    el.style.transition = '';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
};

export default {
  name: 'CollapseAnimate',
  functional: true,
  render (h, { children }) {
    const data = {
      on: Transition
    };
    return h('transition', data, children);
  }
};
