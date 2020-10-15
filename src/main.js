import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import zh from './language/zh'
import en from './language/en'
import Viser from 'viser-vue'
import LifecycleAjax from './components/plugin/LifecycleAjax'
import soda, { Soda } from './store/Soda'
import './antd'
import './css/index.less'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Viser)
Vue.use(LifecycleAjax)
Vue.use(Soda)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    'zh': zh, // 中文语言包
    'en': en // 英文语言包
  },
  silentTranslationWarn: true // 控制台不显示warnning
})

new Vue({
  router,
  store,
  i18n,
  soda,
  render: h => h(App)
}).$mount('#app')
