//
// 该文件的函数为操作dom的方法，尽量少用
//
import { array_remove } from './data'

// 给dom元素添加class
export const addClass = (ele, name) => {
  if (ele.className) {
    if (!hasClass(ele, name)) {
      ele.className += ' ' + name;
    }
  } else {
    ele.className = name
  }
}

// 给dom元素移除class
export const removeClass = (ele, name) => {
  if (hasClass(ele, name)) {
    ele.className = array_remove(ele.className.split(' '), name).join(' ');
  }
}

// 验证dom元素是否拥有该class
export const hasClass = (ele, name) => {
  if (ele.className.split(' ').includes(name)) return true;
  return false;
}

// 获取动画帧
export const requestAnimationFrame = (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) { window.setTimeout(callback, 1000/60); }
);

// Scroll Animate
export const scrollTop = (el, from, to, duration = 500, callback) => {
  duration -= 500; // 初始效果
  const difference = Math.abs(from - to); // 总距离
  const step = Math.ceil(difference / duration * 1000 / 60); // 步长

  function scroll (from, to) {
    if (from === to) {
      callback && callback();
      return;
    }

    let next = from + step > to ? to : from + step;
    if (from > to) {
      next = from - step < to ? to : from - step;
    }

    if (el === window) {
      window.scrollTo(next, next);
    } else {
      el.scrollTop = next;
    }
    requestAnimationFrame(() => scroll(next, to));
  }
  scroll(from, to);
}

// 获取passive
const passive = () => {
  let passiveIfSupported = false;
  try {
    window.addEventListener('xxx', null, Object.defineProperty({}, 'passive', {
      get () {
        passiveIfSupported = { passive: true };
        return true;
      }
    }));
  } catch(err) {
    console.log(err);
  }
  return passiveIfSupported;
}

// 给元素绑定事件
export const on = (el, event, handler) => {
  if (document.addEventListener) {
    el.addEventListener(event, handler, passive );
  } else {
    el.attachEvent('on' + event, handler);
  }
}

// 给元素解绑事件
 export const off = (el, event, handler) => {
  if (document.addEventListener) {
    el.removeEventListener(event, handler, passive );
  } else {
    el.detachEvent('on' + event, handler);
  }
}

// 获取计算后的样式
export const getStyle = (el, attr) => {
  return window.getComputedStyle ? window.getComputedStyle(el)[attr] : el.currentStyle[attr];
}
