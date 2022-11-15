import hyRequest from './../request/index'

export function login (formData) {
  return hyRequest.post({
    url: '/sys/login',
    data: formData
  })
}
