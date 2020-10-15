<template>
  <a-row>
    <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in datas" :key="item.id" class="overview_column">
      <div class="overview_card">
        <div class="overview_card_head">
          <div class="circle">
            <a-progress type="circle" :width="50" :strokeWidth="2" :format="percent => ''" :percent="item.healthScore" :strokeColor="item.healthScore < 60 ? '#fd5151' : item.healthScore >= 80 ? '#18c27b' : '#ffa200'"></a-progress>
            <p class="alarm_number" :style="{color: item.healthScore < 60 ? '#fd5151' : item.healthScore >= 80 ? '#18c27b' : '#ffa200'}">{{item.healthScore}}</p>
          </div>
          <label class="overview_card_title overflow_ellipsis" data-toggle="tooltip">{{item.name}}</label>
          <p class="toBusinessProc">
            <span class="throughput overflow_ellipsis">{{item.throughput}}<em>rpm</em></span>
            <i class="throughputTrend icon-up greenColor" v-if="item.throughputTrend === 1"></i>
            <i class="throughputTrend icon-downward yellowColor" v-else-if="item.throughputTrend === 2"></i>
            <i class="throughputTrend icon-downward redColor" v-else-if="item.throughputTrend === 3"></i>
            <i class="throughputTrend" v-else></i>
          </p>
          <span class="icon-small_bell pull-right toAlert"><span class="small_circle overflow_ellipsis" v-if="item.alertSum > 0">{{item.alertSum}}</span></span>
          </div>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { Progress, Row, Col } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('overviewApp')

export default {
  computed: {
    ...mapState(['datas'])
  },
  components: {
    AProgress: Progress,
    ARow: Row,
    ACol: Col
  }
}
</script>
<style lang="scss" scoped>
// @import '@/css/overview/app/cardSimple.scss'
</style>
