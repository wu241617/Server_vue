<template>
  <!-- <div @click="showMore(-1)" class="right_content appOverview" ref="appOverview" @scroll="scrollFooter"> -->
  <div class="right_content appOverview overviewApp" ref="appOverview" @scroll="scrollFooter">
    <!-- <TopTitle :titleVal="$t('appOverview.appOverview')"></TopTitle> -->
    <div class="overview_search top_div" style="overflow:hidden;">
      <Search style="width:20%;"></Search>
      <Status style="width:10%;margin-left:50px;"></Status>
      <Type @changeType="changeType"></Type>
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
// import TopTitle from '@/views/common/TopTitle'
import Search from '@/views/overview/app/filters/Search'
import Status from '@/views/overview/app/filters/Status'
import Type from '@/views/overview/app/filters/Type'
import CardNormal from '@/views/overview/app/widgets/Nomal'
import CardSimple from '@/views/overview/app/widgets/Simple'
import {
  createNamespacedHelpers
} from 'vuex'
const {
  mapState,
  mapActions
} = createNamespacedHelpers('overviewApp')

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
    if (this.$route.meta.title) {
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
        this.changeState({
          key: 'rendType',
          val: 'append'
        })
        this.changeDate({
          current: this.params.current + 1
        })
      }
    }
    // showMore (val) {
    //   this.changeshowMoreVal(val)
    // }
  },
  components: {
    // TopTitle,
    Search,
    Status,
    Type,
    CardNormal,
    CardSimple
  }
}
</script>

<style lang="less" scoped="scoped">
  .overviewApp {
    height: 833px;
    background-color:rgba(0,0,0,.1);
  }
  .overview_search{
    padding:10px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    background-color:white;
  }
</style>
