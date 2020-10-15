import Vue from 'vue'
import 'ant-design-vue/dist/antd.less'
import {
  message,
  Button
} from 'ant-design-vue'

Vue.prototype.$message = message
Vue.use(Button)
