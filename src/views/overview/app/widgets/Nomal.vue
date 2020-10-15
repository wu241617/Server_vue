<template>
  <a-row>
    <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" v-for="(item, index) in datas" :key="item.id" class="overview_column">
      <div class="overview_card overview_card_normal">
        <NormalHeader :item="item" :index= "index"></NormalHeader>
        <NormalBody :item="item"></NormalBody>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { Row, Col } from 'ant-design-vue'
import NormalHeader from './NormalHeader'
import NormalBody from './NormalBody'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('overviewApp')

export default {
  computed: {
    ...mapState(['datas'])
  },
  mounted () {
    this.fetch()
  },
  methods: {
    ...mapActions(['fetch'])
  },
  components: {
    NormalHeader,
    NormalBody,
    ARow: Row,
    ACol: Col
  }
}
</script>

<style lang="scss" scoped>
// <!-- @import '@/css/overview/app/cardNormal.scss'; -->
</style>
