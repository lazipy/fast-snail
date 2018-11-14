// 项目主题
export const themes = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];

/**
 * 验证props是否在规定内
 * @param {*} Array
 */
export const OneOf = (Array) => {
  return (val) => {
    return Array.includes(val);
  };
};
