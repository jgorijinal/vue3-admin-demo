// 封账 axios
import axios from 'axios'
import { timeout } from './config'

class HyRequest {
  constructor (baseURL, timeout) {
    console.log(baseURL)
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use((config) => {
      config.headers.icode = 'C6609ED5EA4D46CA'
      return config
    }, (err) => {
      return Promise.reject(err)
    })
  }

  request (config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
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
