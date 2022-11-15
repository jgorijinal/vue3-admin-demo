// import storage from '@/utils/storage'
import { login } from '@/service/modules/user'

export default {
  namespaced: true,
  state () {
    return {
      token: '123456'
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async loginAction (formData) {
      const res = await login(formData)
      console.log(res)
    }
  },
  modules: {
  }
}
