import axios, { CancelToken } from 'axios'
import { message as $message } from 'ant-design-vue'

const CODE_OK = 200
const CODE_NEEDAUTH = 403
const TIMEOUT = 3000

const instance = axios.create()
instance.defaults.timeout = TIMEOUT
instance.interceptors.response.use(response => {
  const { code, message, data } = response.data

  if (code === CODE_OK) {
    return data
  }

  if (code === CODE_NEEDAUTH) {
    top.location.href = '/login' // ?from=...
    return
  }

  $message.error(message)
}, error => {
  const canceled = axios.isCancel(error)
  if (canceled) {
    console.log('request canceled...')
  } else if (error.request) {
    console.error('Failed request: ', error.request)
  } else {
    console.error('Unexpected error: ', error.message)
  }
})

export { CancelToken }
export default instance
