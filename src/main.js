import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/css/index.css'
import 'element-plus/dist/index.css'
import './permission'
import installDirective from '@/directives'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './i18n'

const app = createApp(App)
installDirective(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(i18n)
app.use(store).use(router).mount('#app')
