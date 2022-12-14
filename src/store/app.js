import storage from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      lang: storage.getItem('lang') || 'zh' // ζδΉε
    }
  },
  mutations: {
    setLang (state, lang) {
      state.lang = lang
      storage.setItem('lang', lang)
    }
  }
}
