// 安装 vue-i18n
// 创建数据源
// 创建语言变量
// 创建 i18n 实例
import { createI18n } from 'vue-i18n'
import store from '@/store'
const messages = {
  en: {
    msg: {
      test: 'hello'
    }
  },
  zh: {
    msg: {
      test: '你好'
    }
  }
}

const locale = store.state.app.lang

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数,
  globalInjection: true,
  locale: locale,
  messages: messages
})

export default i18n
