/**
 * 提供cookie的操作
 */

/**
 * 设置cookie
 * @param name
 * @param value
 * return {*}
 */
export function setCookie(name,value) {
  document.cookie = name + "="+ encodeURI(value);
}

/**
 * 获取cookie
 * @param name
 * return {string}
 */
export function getCookie(name) {
  let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return decodeURI(arr[2]);
  else
    return null;
}
