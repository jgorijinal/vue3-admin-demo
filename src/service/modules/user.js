import hyRequest from './../request/index'

// 登录
export function login (formData) {
  return hyRequest.post({
    url: '/sys/login',
    data: formData
  })
}

// 获取用户信息
export function getUserInfo () {
  return hyRequest.get({
    url: '/sys/profile'
  })
}
