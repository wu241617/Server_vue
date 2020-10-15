<template>
  <div class="mt8 pull-right">
    <a-radio-group defaultValue="normal" buttonStyle="solid" @change="onChange">
      <a-radio-button value="normal">{{$t('appOverview.Normalmode')}}</a-radio-button>
      <a-radio-button value="simple">{{$t('appOverview.Streamlinedmode')}}</a-radio-button>
    </a-radio-group>
  </div>
</template>
<script>
import { Radio } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('overviewApp')
let opt = {
  params: {
    current: 1,
    pageSize: 13
  }
}
export default {
  created () {
    this.addParams(opt.params)
  },
  methods: {
    ...mapActions(['fetch', 'addParams', 'changeDate']),
    onChange (e) {
      let type = e.target.value
      this.$emit('changeType', type)
      if (type === 'normal') {
        this.changeDate({ current: 1, pageSize: 13 })
      } else {
        this.changeDate({ current: 1, pageSize: 47 })
      }
    }
  },
  components: {
    ARadioGroup: Radio.Group,
    ARadioButton: Radio.Button
  },
  props: {
    changeType: {
      type: Function,
      default: function () {}
    }
  }
}
</script>
<style lang="scss" scoped>
// @import '@/css/overview/app/filter.scss';
</style>
