<template>
  <div class="tabs">
    <div class="tab-list" :class="classes">
      <div
        class="tab-list-item"
        :class="{ 'active': model === item.name, 'disabled': item.disabled }"
        :style="currentStyle"
        ref="tab"
        v-for="(item, index) in items"
        :key="item.name"
        @mouseenter="handleTabEnter(item, index)"
        @click="handleTabClick(item, index)">
        {{item.label}}
      </div>
      <div class="animated-line" v-if="type === 'line'" :style="{ transform: `translateX(${x}px)`, width: `${width}px` }"></div>
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
      gutter: Number
    },
    data () {
      return {
        items: [],
        activeIndex: 0,
        x: 0,
        width: 0
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
      classes () {
        return [
          `tabs-${this.type}`
        ];
      },
      currentStyle () {
        return {
          marginRight: this.gutter + 'px'
        };
      }
    },
    mounted () {
      this.items = this.$children;
    },
    methods: {
      handleTabEnter (item, index) {
        if (this.activeIndex === index || !this.animated || item.disabled) return;
        this.updateAnimate(this.activeIndex > index ? 'carousel-right' : 'carousel-left');
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
        this.x = this.$refs.tab[this.activeIndex].offsetLeft;
        this.width = this.$refs.tab[this.activeIndex].offsetWidth;
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
