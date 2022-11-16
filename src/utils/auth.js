// token 失效的主动的处理
// 在登录的时在本地存储存一下时间戳
// 然后在调接口的时候(请求拦截器)判断一下, 现在过没过token 的失效时长
// token 过期 -> 就退出登录

import storage from './storage'

const TIME_STAMP = 'important-timestamp'
const TOKEN_TIMEOUT_VALUE = 3000
// 保存当前时间戳
export function setTimestamp() {
  storage.setItem(TIME_STAMP, Date.now())
}

function getTimeStamp() {
  return storage.getItem(TIME_STAMP)
}
// 判断 token 失效没有 : 失效了 返回 true , 美食小 返回 false
export function isTokenLoseEfficacy () {
  return Date.now() - getTimeStamp() > TOKEN_TIMEOUT_VALUE
}
