<template>
  <div class="overview_card_body">
    <div class="card_body_margin">
      <div class="circle_div">
        <div class="card_body_circle">
          <a-progress type="circle" :width="110" :strokeWidth="2" :format="percent => ''" :percent="item.healthScore" :strokeColor="item.healthScore < 60 ? '#fd5151' : item.healthScore >= 80 ? '#18c27b' : '#ffa200'"></a-progress>
          <div class="circle alarm_state alarm_green" :title="$t('appOverview.Healthscore')">
              <p class="alarm_number" :style="{color: item.healthScore < 60 ? '#fd5151' : item.healthScore >= 80 ? '#18c27b' : '#ffa200'}">{{item.healthScore}}</p>
          </div>
        </div>
      </div>
      <div class="card_body_left">
        <div class="target_group hasBorder">
          <p class="first_group">
            <label>
              <span class="target_number apdexVal overflow_ellipsis">{{item.apdex}}</span>
              <i class="apdexTrend icon-up greenColor" v-if="item.apdexTrend === 1"></i>
              <i class="apdexTrend icon-downward yellowColor" v-else-if="item.apdexTrend === 2"></i>
              <i class="apdexTrend icon-downward redColor" v-else-if="item.apdexTrend === 3"></i>
              <i class="apdexTrend" v-else></i>
            </label>
            <label>Apdex</label>
          </p>
          <p>
            <label>
              <span class="target_number avgRespTime overflow_ellipsis">{{item.avgRespTime}}</span>
              <i class="avgRespTimeTrend icon-downward greenColor" v-if="item.avgRespTimeTrend === 1"></i>
              <i class="avgRespTimeTrend icon-up yellowColor" v-else-if="item.avgRespTimeTrend === 2"></i>
              <i class="avgRespTimeTrend icon-up redColor" v-else-if="item.avgRespTimeTrend === 3"></i>
              <i class="avgRespTimeTrend" v-else></i>
            </label>
            <label>{{$t('appOverview.responseTime')}}<em>(ms)</em></label>
          </p>
        </div>
        <div class="target_group">
          <p class="toBusinessProc first_group">
            <label>
              <span class="target_number throughput overflow_ellipsis">{{item.throughput}}</span>
              <i class="throughputTrend icon-up greenColor" v-if="item.throughputTrend === 1"></i>
              <i class="throughputTrend icon-downward yellowColor" v-else-if="item.throughputTrend === 2"></i>
              <i class="throughputTrend icon-downward redColor" v-else-if="item.throughputTrend === 3"></i>
              <i class="throughputTrend" v-else></i>
            </label>
            <label>{{$t('appOverview.throughputRate')}}<em>(rpm)</em></label>
          </p>
          <p class="toErorr">
            <label>
              <span class="target_number errorRate overflow_ellipsis">{{item.errorRate}}</span>
              <i class="errorRateTrend icon-downward greenColor" v-if="item.errorRateTrend === 1"></i>
              <i class="errorRateTrend icon-up yellowColor" v-else-if="item.errorRateTrend === 2"></i>
              <i class="errorRateTrend icon-up redColor" v-else-if="item.errorRateTrend === 3"></i>
              <i class="errorRateTrend" v-else></i>
            </label>
            <label>{{$t('appOverview.errorRate')}}<em>(%)</em></label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Progress } from 'ant-design-vue'
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    AProgress: Progress
  }
}
</script>
<style lang="scss" scoped>
// @import '@/css/overview/app/cardNormalBody.scss';
</style>
