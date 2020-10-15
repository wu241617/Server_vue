<template>
  <div class="mt8 pull-left">
    <a-input-search :placeholder="$t('common.search')" @search="onChange" enterButton />
  </div>
</template>
<script>
import { Input } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('overviewApp')
let opt = {
  params: { 'search': '' }
}
export default {
  created () {
    this.addParams(opt.params)
  },
  methods: {
    ...mapActions(['fetch', 'addParams', 'changeDate']),
    onChange (val) {
      this.changeDate({ 'search': val })
    }
  },
  components: {
    AInputSearch: Input.Search
  }
}
</script>
<style lang="scss" scoped>
// @import '@/css/overview/app/filter.scss';
</style>
