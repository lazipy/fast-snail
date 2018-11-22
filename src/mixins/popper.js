import Popper from 'popper.js';
import { debounce, throttle } from 'debounce-throttle'
import { OneOf } from '../utils';
import { on, off } from '../utils/dom';
import ChildEvent from '../directives/child-event';
import Transfer from '../directives/transfer';
import OutClick from '../directives/out-click';

export default {
  directives: {
    ChildEvent,
    Transfer,
    OutClick
  },
  props: {
    trigger: {
      type: String,
      validator: OneOf(['hover', 'click', 'focus'])
    },
    placement: {
      type: String,
      validator: OneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    options: {
      type: Object,
      default: () => {}
    },
    content: {
      type: String,
      required: true
    },
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 200
    },
    maxWidth: String,
    enterable: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      popper: null,
      isMounted: false,
      visible: false
    };
  },
  computed: {
    config () {
      return {
        placement: this.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false
          },
          offset: {
            offset: this.offset
          }
        }
      };
    }
  },
  watch: {
    visible (val) {
      if (val) {
        if (!this.isMounted) {
          this.isMounted = true;
        }
        this.$nextTick(() => {
          if (!this.popper) {
            this.createPopper();
          } else {
            this.updatePopper();
          }
        });
      }
    }
  },
  created () {
    this.debounceShow = debounce(this.show, this.showDelay);
    this.debounceHide = debounce(this.hide, this.hideDelay);
    this.throttleUpdate = throttle(this.updatePopper, 300);
  },
  mounted () {
    on(window, 'resize', this.throttleUpdate);
    on(window, 'scroll', this.throttleUpdate);
  },
  destroyed () {
    this.popper = null;
    this.timer = null;
    off(window, 'resize', this.throttleUpdate);
    off(window, 'scroll', this.throttleUpdate);
  },
  methods: {
    createPopper () {
      if (
        !this.$refs.reference ||
        !this.$refs.popper ||
        this.popper
      ) return;

      this.popper = new Popper(this.$refs.reference, this.$refs.popper, this.config);
    },
    updatePopper () {
      if (!this.popper) return;
      this.popper.scheduleUpdate();
    },
    // Reference
    // Trigger focus
    handleReferenceFocus () {
      if (this.trigger !== 'focus') return;
      this.delayShow();
    },
    handleReferenceBlur () {
      if (this.trigger !== 'focus') return;
      this.delayHide();
    },
    // Trigger click
    handleReferenceClick () {
      if (this.trigger !== 'click') return;
      this.debounceShow();
    },
    handleOutClick () {
      if (this.trigger !== 'click') return;
      this.debounceHide();
    },
    // Trigger hover
    handleReferenceEnter () {
      if (this.trigger !== 'hover') return;
      this.delayShow();
    },
    handleReferenceLeave () {
      if (this.trigger !== 'hover') return;
      this.delayHide();
    },
    // Tooltip
    handleTooltipEnter () {
      if (
        this.trigger !== 'hover' &&
        this.trigger !== 'focus'
      ) return;

      console.log(1111);

      if (this.enterable && this.timer) {
        clearTimeout(this.timer);
      }
    },
    handleTooptipLeave () {
      if (this.trigger !== 'hover') return;
      this.delayHide();
    },
    // delay show
    delayShow () {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(this.show, this.showDelay);
    },
    delayHide () {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(this.hide, this.hideDelay);
    },
    // Show
    show () {
      this.visible = true;
    },
    // Hide
    hide () {
      this.visible = false;
    }
  }
};
