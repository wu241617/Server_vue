<template>
  <div ref="chartOutDiv" class="chartOutDiv">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="legendShow ? [40, 40, 70, 40] : [40]" v-if="data.length">
      <v-tooltip :htmlContent="tooltipFormatter" />
      <v-legend v-if="legendShow" :allow-all-canceled="true" />
      <v-axis :dataKey="axisKey.x" :tickLine="{length:0}" />
      <v-axis :dataKey="axisKey.y0" :title="{}" />
      <v-axis :dataKey="axisKey.y1" :title="{}" />
      <v-series
        v-for="(item, index) in chartType"
        :quickType="item"
        :position="axisKey.x + '*' + axisKey['y' + index]"
        :key="index"
        :color="axisKey.group ? customColor : colors[index]"
        :shape="customShape"
      />
    </v-chart>
    <div v-else class="noData"></div>
  </div>
</template>

<script>
import configTooltip from './configTooltip'
import { rateFormat } from '@/common/commonFun'
import { chartColors } from '@/common/constant'
export default {
  data () {
    return {
      height: 10,
      tooltipFormatter: function (title, items) { // 自定义浮层样式
        let html = '<div style="position: absolute;background-color: rgba(0, 0, 0, 0.6);border-radius: 3px;padding: 10px 10px 6px 10px;">'
        html += '<div style="color: #fff;">' + title + '</div>'
        for (let i = 0; i < items.length; i++) {
          html += '<div style="color: #fff;">' + items[i].name + ' : <span class="g2-tooltip-value">' + items[i].value + '</span>' + '</div>'
        }
        return html + '</div>'
      }
    }
  },
  computed: {
    scale () { // 使坐标轴与数据对应
      let keyY = this?.axisKey?.y0
      let keyY2 = this?.axisKey?.y1
      let that = this
      let scaleArr = []
      Object.entries(this.axisKey).map((item) => {
        if (item[0] === 'x' && item[1] === 'monitor_time') { // x轴为时间
          scaleArr.push({
            dataKey: item[1],
            type: 'time',
            mask: 'MM-DD',
            tickCount: 4
          })
        } else if (item[0] === 'group') { // 对于散点图，根据group对应的字段进行分组
          scaleArr.push({
            dataKey: item[1],
            formatter (value) {
              return that.$t(configTooltip[value]?.name)
            }
          })
        } else { // 对应数据的处理，保留2位小数
          scaleArr.push({
            dataKey: item[1],
            alias: this.$t(configTooltip[item[1]].name),
            tickCount: 4,
            formatter (value) {
              return rateFormat(value, 2)
            }
          })
        }
      })
      return scaleArr
    },
    colors () { // 所有的颜色值
      return chartColors
    }
  },
  props: {
    legendShow: { // 图例是否显示
      type: Boolean,
      default: false
    },
    chartType: { // 图表类型
      type: Array,
      default () {
        return 'smoothLine'
      }
    },
    axisKey: { // 坐标轴对应字段
      type: Object,
      default () {
        return { x: '', y0: '' }
      }
    },
    data: { // 图表数据
      type: Array,
      default () {
        return []
      }
    },
    // legendItems: { // 自定义图例样式
    //   type: Array,
    //   default () {
    //     let legendItemsArr = []
    //     this.chartType.map((item, index) => {
    //       if (item === 'smoothLine') {
    //         legendItemsArr.push({
    //           field: this?.axisKey['y' + index],
    //           value: this.$t(configTooltip[this?.axisKey['y' + index]]?.name),
    //           marker: {symbol: 'hyphen', stroke: chartColors[index], radius: 5, lineWidth: 3}
    //         })
    //       } else if (item === 'bar') {
    //         legendItemsArr.push({
    //           field: this.axisKey['y' + index],
    //           value: this.$t(configTooltip[this.axisKey['y' + index]]?.name),
    //           marker: {symbol: 'square', fill: chartColors[index], radius: 5}
    //         })
    //       }
    //     })
    //     return legendItemsArr
    //   }
    // },
    customShape: { // 自定义散点图点的样式
      type: Array,
      default () {
        return []
      }
    },
    customColor: { // 自定义散点图点的颜色
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.height = this.$refs.chartOutDiv.offsetHeight
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/components/chart/viserChart.scss'
</style>
