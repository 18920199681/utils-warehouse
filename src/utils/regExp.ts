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
  const reg = /^((13[0-9])|(16[0-9])|(19[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
  return reg.test(val);
};

// 邮箱验证
export const isEmail = (val: string): boolean => {
  const reg = /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.])+[0-9A-Za-zd]{2,5}$/;
  return reg.test(val);
};
