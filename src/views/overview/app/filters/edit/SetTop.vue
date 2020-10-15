<template>
  <label class="setTop" :title="$t('appOverview.Top')" @click="setTop(item.id, item.isTop)">
    <span :class="{'icon-setTop': true,'notSetTop': item.isTop === 0 ? true : false}"></span>
  </label>
</template>
<script>
import { post } from '@/api/axiosClient'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('overviewApp')
let urlSetTop = '/api/appnew/setTop'

export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number,
      default: -1
    }
  },
  methods: {
    ...mapActions(['fetch']),
    setTop (id, isTop) {
      let params = { id: id, isTop: isTop === 0 ? 1 : 0 }
      post(urlSetTop, params).then((res) => {
        this.fetch()
      })
    }
  }
}
</script>
