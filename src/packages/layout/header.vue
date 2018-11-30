<template>
  <s-affix :affix="fixed">
    <header class="header" :style="currentStyle" :class="classes">
      <div
        class="header-arrow"
        @click="toggleCollapse"
        v-if="collapseArrow !== null">
        <i class="icon-indent-left" v-if="collapseArrow === false"></i>
        <i class="icon-indent-right" v-else></i>
      </div>
      <slot></slot>
    </header>
  </s-affix>
</template>

<script>
  import SAffix from "../affix/main";

  export default {
    name: 'SHeader',
    components: { SAffix },
    props: {
      height: {
        type: Number,
        default: 60
      },
      customClass: {
        type: String
      },
      fixed: {
        type: Boolean,
        default: false
      },
      collapseArrow: {
        type: [Boolean, null],
        default: null
      }
    },
    data () {
      return {
        aside: null
      };
    },
    computed: {
      classes () {
        return [
          this.customClass,
          this.fixed ? 'header-fixed' : ''
        ];
      },
      currentStyle () {
        return {
          left: this.aside ? (!this.aside.collapse ? this.aside.width + 1 + 'px' : '73px') : 0,
          height: this.height + 'px',
          lineHeight: this.height + 'px'
        };
      }
    },
    mounted () {
      this.$parent.$parent.$children.forEach(child => {
        if (child.$options._componentTag === 's-aside') {
          this.aside = child;
          return;
        }
      });
    },
    methods: {
      toggleCollapse () {
        this.$emit('collapse');
      }
    }
  };
</script>
