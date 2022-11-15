// import storage from '@/utils/storage'
import { login } from '@/service/modules/user'
import md5 from 'md5'
import storage from '@/utils/storage'

const TOKEN = 'token'
export default {
  namespaced: true,
  state () {
    return {
      token: storage.getItem(TOKEN) || ''
    }
  },
  getters: {
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      storage.setItem(TOKEN, token)
    }
  },
  actions: {
    async loginAction (context, formData) {
      const { username, password } = formData
      const res = await login({ username, password: md5(password) })
      // 提交 mutation 对 token 进行处理
      context.commit('setToken', res.data.token)
    }
  },
  modules: {
  }
}
