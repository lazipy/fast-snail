<template>
  <div class="tabs" :class="classList">
    <div class="tab-list" :class="classes">
      <div>
        <div
          class="tab-list-item"
          :class="{ 'active': model === item.name, 'disabled': item.disabled }"
          :style="currentStyle"
          ref="tab"
          v-for="(item, index) in items"
          :key="item.name"
          v-html="item.title"
          @mouseenter="handleTabEnter(item, index)"
          @click="handleTabClick(item, index)">
        </div>
      </div>

      <!-- actions -->
      <div class="tabs-actions">
        <slot name="actions"></slot>
      </div>

      <div class="animated-line" v-if="type === 'line'" :style="animateStyle"></div>
    </div>

    <div class="tab-pane__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'STabs',
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      type: {
        type: String,
        default: 'line',
        validator: OneOf(['line', 'card'])
      },
      animated: {
        type: Boolean,
        default: true
      },
      gutter: Number,
      position: {
        type: String,
        default: 'top',
        validator: OneOf(['top', 'bottom', 'left', 'right'])
      }
    },
    data () {
      return {
        items: [],
        activeIndex: 0,
        x: 0,
        width: 0,
        y: 0,
        height: 0
      };
    },
    computed: {
      model: {
        get () {
          this.$nextTick(() => {
            this.getActiveIndex();
            this.setAnimate();
          });
          return this.value;
        },
        set (val) {
          this.$emit('input', val);
          this.$emit('change', val, this.value);
        }
      },
      classList () {
        return [
          `tabs-${this.position}`
        ];
      },
      classes () {
        return [
          `tabs-${this.type}`
        ];
      },
      currentStyle () {
        return {
          marginRight: this.gutter + 'px'
        };
      },
      animateStyle () {
        if (this.position === 'top' || this.position === 'bottom') {
          return { transform: `translateX(${this.x}px)`, width: `${this.width}px` };
        } else {
          return { transform: `translateY(${this.y}px)`, height: `${this.height}px` };
        }
      }
    },
    mounted () {
      this.items = this.$children.filter(child => child.$options._componentTag === 's-tab-pane');
    },
    methods: {
      handleTabEnter (item, index) {
        if (this.activeIndex === index || !this.animated || item.disabled) {
          this.updateAnimate('fade-delay');
          return;
        };
        if (this.position === 'top' || this.position === 'bottom') {
          this.updateAnimate(this.activeIndex > index ? 'carousel-right' : 'carousel-left');
        } else {
          this.updateAnimate(this.activeIndex > index ? 'carousel-bottom' : 'carousel-top');
        }
      },
      handleTabClick (item, index) {
        if (this.activeIndex === index || item.disabled) return;
        this.activeIndex = index;
        this.model = item.name;
      },
      getActiveIndex () {
        this.activeIndex = this.items.findIndex(item => item.name === this.model);
      },
      setAnimate () {
        if (this.position === 'top' || this.position === 'bottom') {
          this.x = this.$refs.tab[this.activeIndex].offsetLeft;
          this.width = this.$refs.tab[this.activeIndex].offsetWidth;
        } else {
          this.y = this.$refs.tab[this.activeIndex].offsetTop;
          this.height = this.$refs.tab[this.activeIndex].offsetHeight;
        }
      },
      // update children animate
      updateAnimate (animate) {
        this.items.forEach(item => {
          item.animate = animate;
        });
      }
    }
  };
</script>
