// 封账 axios
import axios from 'axios'
import { timeout } from './config'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isTokenLoseEfficacy } from '@/utils/auth'

class HyRequest {
  constructor (baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 请求拦截器
    this.instance.interceptors.request.use((config) => {
      config.headers.icode = 'C6609ED5EA4D46CA'
      if (store.getters.token) {
        if (isTokenLoseEfficacy()) {
          store.dispatch('user/logoutAction')
        }
        config.headers.authorization = `Bearer ${store.getters.token}`
      }
      return config
    }, (err) => {
      return Promise.reject(err)
    })
    // 响应拦截器
    this.instance.interceptors.response.use((res) => {
      const { success, message, data } = res.data
      if (success) {
        return data
      } else {
        ElMessage.error(message)
        return Promise.reject(new Error(message))
      }
    }, (err) => {
      if (err.response && err.response.data && err.response.data.code === 401) {
        store.dispatch('user/logoutAction')
        ElMessage.error('密码已过期, 请重新登录')
      }
      return Promise.reject(err)
    })
  }

  request (config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get (config) {
    return this.request({ ...config, method: 'get' })
  }

  post (config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new HyRequest(process.env.VUE_APP_BASE_API, timeout)
