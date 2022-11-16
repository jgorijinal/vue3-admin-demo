// import storage from '@/utils/storage'
import { login } from '@/service/modules/user'
import md5 from 'md5'
import storage from '@/utils/storage'
import router from '@/router'
import { TOKEN } from '@/constant'
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
    loginAction (context, formData) {
      const { username, password } = formData
      login({ username, password: md5(password) }).then(res => {
        // 提交 mutation 对 token 进行处理
        context.commit('setToken', res.token)
        // 登录后跳转
        router.push('/')
      })
    },
    getUserInfoAction () {
      
    }
  },
  modules: {
  }
}
