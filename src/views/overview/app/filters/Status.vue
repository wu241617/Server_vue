<template>
  <div class="mt8 pull-right">
    <a-checkbox class="label_check pull-left" :defaultChecked="true" @change="onChange">{{$t('appOverview.Hiddeninactiveapplications')}}</a-checkbox>
  </div>
</template>
<script>
import { Checkbox } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('overviewApp')
let opt = {
  params: { 'isActive': 1 }
}
export default {
  created () {
    this.addParams(opt.params)
  },
  methods: {
    ...mapActions(['fetch', 'addParams', 'changeDate']),
    onChange (e) {
      this.changeDate({ 'isActive': e.target.checked ? 1 : 0 })
    }
  },
  components: {
    ACheckbox: Checkbox
  }
}
</script>
<style lang="scss" scoped>
// @import '@/css/overview/app/filter.scss';
</style>
