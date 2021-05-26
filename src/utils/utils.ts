/**
 * 去掉字符串前后空格
 * 
 * val: 传入一个字符串
 * type: 如果type为'toUpper',则去掉字符串前后空格并转为大写
 */

export function formatTrim(val: string, type: string) {
  if (type === 'toUpper') {
    return val.replace(/(^\s*)|(\s*$)/g, '').toUpperCase();
  }

  return val.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * json格式美化
 * @param str
 * @returns
 */
export const prettyFormat = function (str) {
  return JSON.stringify(JSON.parse(str), null, 4);
};
