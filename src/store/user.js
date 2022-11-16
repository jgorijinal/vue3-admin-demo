// import storage from '@/utils/storage'
import md5 from 'md5'
import storage from '@/utils/storage'
import router from '@/router'
import { TOKEN } from '@/constant'
import { login, getUserInfo } from '@/service/modules/user'
export default {
  namespaced: true,
  state () {
    return {
      token: storage.getItem(TOKEN) || '',
      userInfo: {}
    }
  },
  getters: {
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      storage.setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录
    loginAction (context, formData) {
      const { username, password } = formData
      login({ username, password: md5(password) }).then(res => {
        // 提交 mutation 对 token 进行处理
        context.commit('setToken', res.token)
        // 登录后跳转
        router.push('/')
      })
    },
    // 获取用户信息
    async getUserInfoAction (context) {
      const res = await getUserInfo()
      context.commit('setUserInfo', res)
      console.log(123456)
      // 这里返回了数据, 因为权限哪里会用到 用户信息里面的权限数据
      return res
    }
  },
  modules: {
  }
}
