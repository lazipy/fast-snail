<template>
  <div class="cm-pagination">
    <div class="cm-pagination__inner">
      <span class="total" v-if="layout.includes('total')">共 {{total}} 条</span>
      <button
        class="btn-prev"
        v-if="layout.includes('prev')"
        :disabled="activeIndex === 1 || count <= 1"
        @click="handleClickBtn('prev')">
        <i class="iconfont icon-left"></i>
      </button>
      <ul class="cm-pager" v-if="layout.includes('pager')">
        <li
          class="number"
          :class="activeIndex === 1 ? 'active' : ''"
          @click="handleClickNumber(1)">
          1
        </li>
        <li
          class="more"
          v-if="count > 8 && activeIndex > 4"
          @mousemove="leftMoreEnter"
          @mouseleave="leftMoreLeave"
          @click="handleClickPrev">
          <i v-show="!prevMore" class="iconfont icon-ellipsis"></i>
          <i v-show="prevMore" class="iconfont icon-doubleleft"></i>
        </li>
        <li
          class="number"
          :class="item === activeIndex ? 'active' : ''"
          v-for="item in centerArray"
          :key="item"
          @click="handleClickNumber(item)">
          {{item}}
        </li>
        <li
          class="more"
          v-if="count > 8 && activeIndex < count - 4"
          @mousemove="rightMoreEnter"
          @mouseleave="rightMoreLeave"
          @click="handleClickNext">
          <i v-show="!nextMore" class="iconfont icon-ellipsis"></i>
          <i v-show="nextMore" class="iconfont icon-doubleright"></i>
        </li>
        <li
          v-if="count > 1"
          class="number"
          :class="activeIndex === count ? 'active' : ''"
          @click="handleClickNumber(count)">
          {{count}}
        </li>
      </ul>
      <button
        class="btn-next"
        v-if="layout.includes('next')"
        :disabled="activeIndex === count || count <= 1"
        @click="handleClickBtn('next')">
        <i class="iconfont icon-right"></i>
      </button>
      <span class="cm-pagination__jumper" v-if="count > 0 && layout.includes('jumper')">
        前往
        <input
          :value="activeIndex"
          class="cm-input__inner"
          type="number"
          autocomplete="off"
          min="1"
          :max="count"
          @blur="jump"
          @keyup.enter="jump">
        页
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      required: true
    },
    layout: {
      type: Array,
      default: () => {
        return ['total', 'prev', 'pager', 'next', 'jumper'];
      }
    }
  },
  data () {
    return {
      prevMore: false,
      nextMore: false
    };
  },
  computed: {
    activeIndex: {
      get () {
        return this.currentPage;
      },
      set (val) {
        if (this.currentPage !== val) {
          this.$emit('current-change', val);
        }
      }
    },
    count () {
      return Math.ceil(this.total / this.pageSize);
    },
    centerArray () {
      let array = [];
      if (this.count > 8) {
        for (let i = -2; i <= 2; i++) {
          if (this.activeIndex > 4 && this.activeIndex < this.count - 4) {
            array.push(this.activeIndex + i);
          } else if (this.activeIndex < this.count - 4) {
            array.push(4 + i);
          } else {
            array.push(this.count + i - 3);
          }
        }
      } else {
        for (let i = 2; i < this.count; i++) {
          array.push(i);
        }
      }
      return array;
    }
  },
  methods: {
    handleClickNumber (item) {
      this.activeIndex = item;
    },
    handleClickBtn (command) {
      if (command === 'prev') {
        this.activeIndex -= 1;
      } else if (command === 'next') {
        this.activeIndex += 1;
      }
    },
    handleClickPrev () {
      if (this.activeIndex - 5 >= 1) {
        this.activeIndex -= 5;
      } else {
        this.activeIndex = 1;
      }
      this.prevMore = false;
    },
    handleClickNext () {
      if (this.activeIndex + 5 <= this.count) {
        this.activeIndex += 5;
      } else {
        this.activeIndex = this.count;
      }
      this.nextMore = false;
    },
    rightMoreEnter () {
      this.nextMore = true;
    },
    rightMoreLeave () {
      this.nextMore = false;
    },
    leftMoreEnter () {
      this.prevMore = true;
    },
    leftMoreLeave () {
      this.prevMore = false;
    },
    jump (e) {
      this.activeIndex = Number(e.target.value);
    }
  }
};
</script>
