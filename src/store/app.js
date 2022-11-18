import storage from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      lang: storage.getItem('lang') || 'zh' // 持久化
    }
  },
  mutations: {
    setLang (state, lang) {
      state.lang = lang
      storage.setItem('lang', lang)
    }
  }
}
