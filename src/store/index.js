import { createStore } from 'vuex'
import user from './user'
import permission from './permission'
import app from './app'
export default createStore({
  state: {
  },
  getters: {
    // 对常规用变量的一些快捷访问
    token (state) {
      return state.user.token
    },
    userInfo (state) {
      return state.user.userInfo
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    permission,
    app
  }
})
