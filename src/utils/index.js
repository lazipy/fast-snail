/**
 * 验证props是否在规定内
 * @param {*} Array
 */
export const OneOf = (Array) => {
  return (val) => {
    return Array.includes(val);
  };
};
