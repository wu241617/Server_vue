import { remove } from 'lodash'

import axios, {
  CancelToken
} from '@/api/axiosClient'

export default Vue => {
  Vue.prototype.$ajax = function (cfg) {
    let cancel
    const request = axios.request({
      ...cfg,
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    })

    if (cfg.keep !== true) {
      this.$ajaxInProcess.push(cancel)
    }

    return request.finally(() => {
      remove(this.$ajaxInProcess, cancel)
    })
  }

  Vue.mixin({
    beforeCreate () {
      this.$ajaxInProcess = []
    },

    beforeDestroy () {
      this.$ajaxInProcess.forEach($cancel => $cancel('cancel as widget destroyed.'))
      this.$ajaxInProcess.length = 0
    }
  })
}
