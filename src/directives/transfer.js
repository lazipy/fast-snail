export default {
  inserted (el, { value = true }) {
    value && document.body.appendChild(el);
  }
};
