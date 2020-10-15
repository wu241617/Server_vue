<template>
  <div>
    <label :class="['overview_card_title', 'overflow_ellipsis', {hideDiv: showEditVal === index ? true : false}]">{{item.name}}</label>
    <div class="editAliasDiv" v-if="showEditVal === index">
      <a-input v-model="editNameVal"></a-input>
      <span class="editAliasOk icon-enable" @click="editAliasOk(item.id)"></span>
      <span class="editAliasCancel icon-close" @click="editAliasCancel"></span>
      <div class="notnull_tip  alias_notnull_tip" v-if="showErrorTip">
        <div class="notnull_tip_arrow error_alias_tip_arrow"></div>
        <div class="notnull_tip_inner error_alias_tip">{{errorTip}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Input } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import { post } from '@/api/axiosClient'
let urlEditName = '/api/appnew/editName'
const { mapActions } = createNamespacedHelpers('overviewApp')

export default {
  data () {
    return {
      editNameVal: '', // 修改名称时，输入框的值
      errorTip: '', // 错误提示内容
      showErrorTip: false, // 是否显示错误提示
      showEditVal: -1 // 当前被操作的元素索引
    }
  },
  components: {
    AInput: Input
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
  methods: {
    ...mapActions(['fetch']),
    editAliasOk (id) {
      let newName = this.editNameVal
      if (newName === '') {
        this.showErrorTip = true
        this.errorTip = this.$t('appOverview.Pleaseenteranalias')
        return false
      } else if (newName.length > 50) {
        this.showErrorTip = true
        this.errorTip = this.$t('appOverview.Upto50characters')
        return false
      } else {
        this.showErrorTip = false
        this.changeshowEditVal(-1)
        let params = { id: id, name: newName }
        post(urlEditName, params).then((res) => {
          this.fetch()
        })
      }
    },
    editAliasCancel () {

    },
    changeshowEditVal (val, name) {
      this.showEditVal = val
      this.editNameVal = name
    }
  }
}
</script>
