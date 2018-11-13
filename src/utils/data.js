// 移除数组的某一项,返回该数组
export const array_remove = (array, item) => {
  let i = array.indexOf(item);
  if (i > -1) {
    array.splice(i , 1);
  }
  return array;
}
