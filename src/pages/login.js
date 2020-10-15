import Vue from 'vue'
import App from '../App.vue'
import router from '../router/login/index'
import 'ant-design-vue/dist/antd.less'
import { message } from 'ant-design-vue'
Vue.config.productionTip = false
Vue.prototype.$message = message
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
