/**
* 时间格式化
*/
export const dateFormat = (date, fmt) => {
  var obj = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  if (/(Y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var item in obj)
    if (new RegExp("(" + item + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[item]) : (("00" + obj[item]).substr(("" + obj[item]).length)));

  return fmt;
}
