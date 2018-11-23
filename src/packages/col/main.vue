<template>
  <div class="col" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SCol',
    props: {
      span: {
        type: Number
      },
      offset: {
        type: Number
      },
      xs: {
        type: Object
      },
      sm: {
        type: Object
      },
      md: {
        type: Object
      },
      lg: {
        type: Object
      },
      xl: {
        type: Object
      }
    },
    computed: {
      classes () {
        return [
          this.span ? `col-${this.span}` : '',
          this.offset ? `offset-${this.offset}` : '',
          this.xs && this.xs.span ? `col-xs-${this.xs.span}` : '',
          this.xs && this.xs.offset ? `offset-xs-${this.xs.offset}` : '',
          this.sm && this.sm.span ? `col-sm-${this.sm.span}` : '',
          this.sm && this.sm.offset ? `offset-sm-${this.sm.offset}` : '',
          this.md && this.md.span ? `col-md-${this.md.span}` : '',
          this.md && this.md.offset ? `offset-md-${this.md.offset}` : '',
          this.lg && this.lg.span ? `col-lg-${this.lg.span}` : '',
          this.lg && this.lg.offset ? `offset-lg-${this.lg.offset}` : '',
          this.xl && this.xl.span ? `col-xl-${this.xl.span}` : '',
          this.xl && this.xl.offset ? `offset-xl-${this.xl.offset}` : ''
        ];
      }
    }
  };
</script>
