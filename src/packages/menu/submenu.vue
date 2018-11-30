<template>
  <div class="submenu" :class="classes">
    <template v-if="this.currentMode === 'collapse'">
      <div class="submenu-title" @click="handleSubmenuClick">
        <slot name="title"></slot>
        <i class="icon-angle-down menu-arrow" :class="{ active: visible }"></i>
      </div>
      <CollapseAnimate>
        <div class="submenu-content" v-show="visible">
          <slot></slot>
        </div>
      </CollapseAnimate>
    </template>

    <template v-else>
      <div
        class="submenu-title"
        ref="reference"
        v-out-click="handleOutClick"
        @click="handleReferenceClick"
        @mouseenter="handleReferenceEnter"
        @mouseleave="handleReferenceLeave">
        <slot name="title"></slot>
        <i class="icon-angle-down menu-arrow" v-if="menu.mode === 'horizontal' && this.$parent.$options._componentTag === 's-menu'" :class="{ active: visible }"></i>
        <i class="icon-angle-right menu-arrow" v-else :class="{ active: visible }"></i>
      </div>

      <transition name="fade">
        <div
          class="submenu-popper"
          :class="customClass"
          ref="popper"
          v-transfer="transferBody"
          v-show="visible"
          @click.stop="() => { return false; }"
          @mouseenter="handleTooltipEnter"
          @mouseleave="handleTooptipLeave"
          role="tooltip">
          <div class="submenu-content">
            <slot></slot>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
  import Popper from 'popper.js';
  import { debounce, throttle } from 'debounce-throttle'
  import { on, off } from '../../utils/dom';
  import CollapseAnimate from '../collapse/animate';
  import { OneOf } from '../../utils';
  import Transfer from '../../directives/transfer';
  import OutClick from '../../directives/out-click';

  export default {
    name: 'SSubmenu',
    components: { CollapseAnimate },
    directives: {
      Transfer,
      OutClick
    },
    props: {
      name: {
        type: [String, Number]
      },
      mode: {
        type: String,
        default: 'collapse',
        validator: OneOf(['collapse', 'float'])
      },
      trigger: {
        type: String,
        default: 'hover',
        validator: OneOf(['hover', 'click'])
      },
      showDelay: {
        type: Number,
        default: 300
      },
      hideDelay: {
        type: Number,
        default: 300
      },
      transferBody: {
        type: Boolean,
        default: false
      },
      customClass: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        items: [],
        subs: [],
        timer: null,
        popper: null
      };
    },
    computed: {
      menu () {
        let menu = this.$parent;
        while (menu.$options._componentTag !== 's-menu') {
          menu = menu.$parent;
        }
        return menu;
      },
      currentMode () {
        if (this.menu.currentCollaspe || this.menu.mode === 'horizontal') {
          return 'float';
        } else {
          return this.mode;
        }
      },
      config () {
        return {
          placement: this.menu.mode === 'horizontal' && this.$parent.$options._componentTag === 's-menu' ? 'bottom-center' : 'right-start',
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            }
          }
        };
      },
      visible: {
        get () {
          if (this.menu.opens.includes(this.name)) {
            return true;
          }
          for (let sub of this.subs) {
            if (this.menu.opens.includes(sub.name)) {
              this.menu.open(this.name);
              return true;
            }
          }
          return false;
        },
        set (val) {
          if (val) {
            this.menu.$emit('open', this.name);
            this.menu.open(this.name);
            if (this.currentMode === 'float') {
              if (!this.popper) {
                this.createPopper();
              } else {
                this.updatePopper();
              }
            } else {
              if (this.popper) {
                this.popper.destroy();
                this.popper = null;
              }
            }
          } else {
            this.menu.$emit('close', this.name);
            this.menu.close(this.name);
            for (let sub of this.subs) {
              if (this.menu.opens.includes(sub.name)) {
                this.menu.close(sub.name);
              }
            }
          }
        }
      },
      isActive () {
        this.init();
        for (let item of this.items) {
          if (item.isActive) {
            return true;
          }
        }
        return false;
      },
      classes () {
        return [
          this.isActive ? 'active' : '',
          `submenu-${this.currentMode}`
        ];
      }
    },
    created () {
      this.debounceShow = debounce(this.show, this.showDelay);
      this.debounceHide = debounce(this.hide, this.hideDelay);
      this.throttleUpdate = throttle(this.updatePopper, 300);
    },
    mounted () {
      this.init();
      on(window, 'resize', this.throttleUpdate);
      on(window, 'scroll', this.throttleUpdate);
    },
    destroyed () {
      this.popper = null;
      window.timer = null;
      off(window, 'resize', this.throttleUpdate);
      off(window, 'scroll', this.throttleUpdate);
    },
    methods: {
      init () {
        this.items = this.$children.filter(child => {
          return ['s-menu-item', 's-submenu'].includes(child.$options._componentTag);
        });
        this.subs = this.$children.filter(child => child.$options._componentTag === 's-submenu');
      },
      handleSubmenuClick () {
        if (this.disabled) return;
        this.visible = !this.visible;
      },
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
      // Trigger click
      handleReferenceClick () {
        if (this.trigger !== 'click') return;
        if (!this.visible) {
          this.debounceShow();
        } else {
          this.debounceHide();
        }
      },
      handleOutClick () {
        this.debounceHide();
      },
        // Trigger hover
      handleReferenceEnter () {
        if (this.trigger !== 'hover' || this.disabled) return;
        this.delayShow();
      },
      handleReferenceLeave () {
        if (this.trigger !== 'hover' || this.disabled) return;
        this.delayHide();
      },
      // Tooltip
      handleTooltipEnter () {
        if (this.trigger !== 'hover' || this.disabled) return;
        if (window.timer) {
          clearTimeout(window.timer);
        }
      },
      handleTooptipLeave () {
        if (this.trigger !== 'hover' || this.disabled) return;
        this.delayHide();
      },
      // delay show
      delayShow () {
        window.timer && clearTimeout(window.timer);
        window.timer = setTimeout(this.show, this.showDelay);
      },
      delayHide () {
        window.timer && clearTimeout(window.timer);
        window.timer = setTimeout(this.hide, this.hideDelay);
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
</script>
