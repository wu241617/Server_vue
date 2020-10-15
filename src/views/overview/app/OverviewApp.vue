<template>
  <!-- <div @click="showMore(-1)" class="right_content appOverview" ref="appOverview" @scroll="scrollFooter"> -->
  <div class="right_content appOverview" ref="appOverview" @scroll="scrollFooter">
    <TopTitle :titleVal="$t('appOverview.appOverview')"></TopTitle>
    <div class="overview_search top_div">
      <Search></Search>
      <Type @changeType="changeType"></Type>
      <Status></Status>
    </div>
    <div v-if="model === 'normal'" class="overview_div">
      <CardNormal></CardNormal>
    </div>
    <div v-else class="overview_div short_mode">
      <CardSimple></CardSimple>
    </div>
  </div>
</template>
<script>
import TopTitle from '@/views/common/TopTitle'
import Search from './filters/Search'
import Status from './filters/Status'
import Type from './filters/Type'
import CardNormal from './widgets/Nomal'
import CardSimple from './widgets/Simple'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('overviewApp')

export default {
  data () {
    return {
      model: 'normal'
    }
  },
  computed: {
    ...mapState(['params'])
  },
  created () {
    if (this.$route.meta?.title) {
      window.document.title = this.$t(this.$route.meta.title)
    }
  },
  methods: {
    ...mapActions(['fetch', 'changeState', 'changeDate']),
    changeType (val) {
      this.model = val
    },
    scrollFooter () {
      let domScrollTop = this.$refs.appOverview.scrollTop
      let domClientHeight = this.$refs.appOverview.clientHeight
      let domScrollHeight = this.$refs.appOverview.scrollHeight
      if (domScrollTop + domClientHeight === domScrollHeight) {
        this.changeState({ key: 'rendType', val: 'append' })
        this.changeDate({ current: this.params?.current + 1 })
      }
    }
    // showMore (val) {
    //   this.changeshowMoreVal(val)
    // }
  },
  components: {
    TopTitle,
    Search,
    Status,
    Type,
    CardNormal,
    CardSimple
  }
}
</script>

<style lang="less" scoped="scoped">

</style>
