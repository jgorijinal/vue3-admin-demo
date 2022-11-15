import { createStore } from 'vuex'
import user from './user'
export default createStore({
  state: {
  },
  getters: {
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
