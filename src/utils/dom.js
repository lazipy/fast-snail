//
// 该文件的函数为操作dom的方法，尽量少用
//
import { array_remove } from './data'
/**
 * 给dom元素添加className
 * @param {dom元素} ele
 * @param {className} name
 */
export const addClass = (ele, name) => {
  if (ele.className) {
    if (!hasClass(ele, name)) {
      ele.className += ' ' + name;
    }
  } else {
    ele.className = name
  }
}

/**
 * 给dom元素移除className
 * @param {dom元素} ele
 * @param {className} name
 */
export const removeClass = (ele, name) => {
  if (hasClass(ele, name)) {
    ele.className = array_remove(ele.className.split(' '), name)
  }
}

/**
 * 验证dom元素是否拥有该class
 * @param {dom} ele
 * @param {className} name
 */
const hasClass = (ele, name) => {
  if (ele.className.split(' ').includes(name)) return true;
  return false;
}
