<template>
  <a-spin :spinning="spinning">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="用户名">
        <a-input
          v-decorator="[
            'username',
            {
              rules: [
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码">
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入密码!',
                }
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>

      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit" class="mr20"> 登录  </a-button>
        <a-button type="primary" @click="toRegister"> 注册  </a-button>
      </a-form-item>
    </a-form>
  </a-spin>
</template>
<script>
import { Form, Input, Button, Spin } from 'ant-design-vue'
const urlLogin = '/api/login'
export default {
  name: 'login',
  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      },
      spinning: false
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.spinning = true
          window.location.href = '/overview/app'
        }
      })
    },
    toRegister () {
      this.$router.push('/register')
    }
  },
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    ASpin: Spin
  }
}
</script>
<style scoped>
.ant-form{
  width: 400px;
  margin: auto;
  padding-top: 300px;
}
.mr20{
  margin-right: 20px;
}
</style>
