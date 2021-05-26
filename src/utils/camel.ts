/**
 * 替换对象属性 key 值
 * @param {any} obj 原对象
 * @param {(keyItem: string, originalObj: any) => string} fn 对象属性 key 处理函数
 */
function replaceKey(obj: any, fn: any) {
  const parse = (param) => {
    // 排除 null，null 虽为对象，但无 key
    if (param && typeof param === 'object') {
      const ret = Array.isArray(param) ? [] : {};
      for (const key in param) {
        const newKey = fn(key, param);
        const value = param[key];
        // 排除 null，null 也是对象
        if (value && typeof value === 'object') {
          ret[newKey] = parse(value);
        } else {
          ret[newKey] = value;
        }
      }
      return ret;
    }
    return param;
  };
  return parse(obj);
}

/**
 * 驼峰对象转下划线
 * @param {{[key: string]: any}} obj 原对象
 * @return 下划线对象
 */
export function toLowerLineObj(obj: any) {
  return replaceKey(obj, key => key.replace(/([A-Z])/g, '_$1').toLowerCase());
}

/**
 * 下划线对象转驼峰式
 * @param {{[key: string]: any}} obj 下划线对象
 */
export function toCamelObj(obj: any) {
  return replaceKey(obj, key => key.replace(/_(\w)/g, (all, letter) => letter.toUpperCase()));
}
