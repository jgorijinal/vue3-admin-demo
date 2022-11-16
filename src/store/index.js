import { createStore } from 'vuex'
import user from './user'
export default createStore({
  state: {
  },
  getters: {
    // 对常规用变量的一些快捷访问
    token (state) {
      return state.user.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
