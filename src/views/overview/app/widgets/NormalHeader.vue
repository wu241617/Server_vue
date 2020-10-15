<template>
  <div class="overview_card_head">
    <Name :item="item" :index="index" ref='cardName'></Name>
    <span class="icon-small_bell toAlert"><span class="small_circle overflow_ellipsis" v-if="item.alertSum > 0">{{item.alertSum}}</span></span>
    <SetTop :item="item" :index="index"></SetTop>
    <label class="overview_more_menu"><span class="icon-more_menu" @click.stop="showMore(index)"></span></label>
    <div class="overview_card_icons" v-if="showMoreVal === index">
      <label class="tooltip-arrow"></label>
      <a class="bigScreen" target="_blank"><span class="icon-bigScreen mr10"></span>{{$t('appOverview.Forscreen')}}</a>
      <p class="setEdit" @click.stop="showEdit(index, item.name)"><span class="icon-edit-new mr10"></span>{{$t('appOverview.Edit')}}</p>
      <p class="setRemove"><span class="icon-remove mr10"></span>{{$t('appOverview.Delete')}}</p>
    </div>
  </div>
</template>
<script>
import Name from '../filters/edit/Name'
import SetTop from '../filters/edit/SetTop'

export default {
  data () {
    return {
      showMoreVal: -1 // 当前更多操作浮层显示的元素索引
    }
  },
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
  components: {
    Name,
    SetTop
  },
  methods: {
    showEdit (val, currentName) {
      this.$refs.cardName.changeshowEditVal(val, currentName)
    },
    showMore (val) {
      this.showMoreVal = val
    }
  }
}
</script>
<style lang="scss">
// @import '@/css/overview/app/cardNormalHeader.scss';
</style>
