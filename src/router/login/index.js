import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('../../pages/Login.vue')
const Register = () => import('../../pages/Register')
const NotFound = () => import('@/views/common/NotFound')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
