// 身份证号验证
export const isIdCard = (val: string): boolean => {
  const reg =
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  return reg.test(val);
};

// 护照号码验证
export const isPassport = (val: string): boolean => {
  const reg = /(P\d{7})|(G\d{8})/;
  return reg.test(val);
};

// 手机号验证
export const isMobile = (val: string): boolean => {
  const reg = /^1[345789]\d{9}$/
  return reg.test(val);
};

// 邮箱验证
export const isEmail = (val: string): boolean => {
  const reg = /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.])+[0-9A-Za-zd]{2,5}$/;
  return reg.test(val);
};

/* 金额校验 */
export const moneyReg = (obj: any) => {
  obj.value = obj.value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
  obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
  obj.value = obj.value
    .replace(".", "$#$")
    .replace(/\./g, "")
    .replace("$#$", ".");
  obj.value = obj.value.replace(/^(-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
  // 如果没有小数点，首位不能为类似于 01、02的金额
  if (obj.value.indexOf(".") < 0 && obj.value != "") {
    obj.value = parseFloat(obj.value);
  }
};
