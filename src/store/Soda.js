import {
  Subject
} from 'rxjs'
import {
  has,
  forEach,
  isNil
} from 'lodash'

class Soda {
  static install (Vue) {
    const $emit = Vue.prototype.$emit
    Vue.prototype.$emit = function (type, payload) {
      const $store = this.$store
      if (!isNil($store)) {
        const $soda = this.$privateSoda
        const $state = $store.state
        $soda.next([{
          type,
          payload
        }, $state])
      }
      $emit.call(this, type, payload)
    }

    Vue.prototype.setState = function (datas) {
      if (isNil(datas)) {
        return
      }

      forEach(datas, (val, key) => {
        if (has(this, key)) {
          this[key] = val
        }
      })
    }

    Vue.mixin({
      beforeCreate () {
        const options = this.$options
        if (options.soda) {
          this.$soda = options.soda
        } else if (options.parent && options.parent.$soda) {
          this.$soda = options.parent.$soda
        } else {
          // nothing...
        }

        this.$privateSoda = new Subject()
      },
      beforeDestroy () {
        this.$privateSoda.complete()
      }
    })
  }

  constructor () {
    this.notifier = new Subject()

    this.vuexPlugin = store => {
      store.subscribe((mutation, state) => {
        this.notifier.next([mutation, state])
      })
    }
  }
}

export {
  Soda
}

export const attachMutationsMixin = {
  created () {
    if (this.$soda) {
      this.$subscription = this.$soda.notifier.subscribe(([{
        type,
        payload
      }]) => {
        this.$emit(type, payload)
      })
    }
  },
  mounted () {
    this.$emit('widget/start')
  },
  beforeDestroy () {
    this.$subscription && this.$subscription.unsubscribe()
  }
}

export default new Soda()
