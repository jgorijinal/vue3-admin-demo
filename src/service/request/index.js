// 封账 axios
import axios from 'axios'
import { timeout } from './config'

class HyRequest {
  constructor (baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
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

export default HyRequest(process.env.VUE_APP_BASE_API, timeout)
