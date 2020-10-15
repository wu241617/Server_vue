<template>
  <div class="content">
    <ul class="menu">
      <li v-for="(item, index) in analysisMenu" :key="index" class="menu__li">
        <router-link :to="item.path">
          <span class="menu--selected"></span>
          <span class="menu__icon" :class="item.iconClass"></span>
          <span class="menu__text">{{$t(item.label)}}</span>
        </router-link>
      </li>
    </ul>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'analysisMenu',
  data () {
    return {
      analysisMenu: [
        {
          path: '/analysis/topo',
          label: 'menu.application_topology',
          iconClass: 'icon-lefttopology'
        }, {
          path: '/analysis/callchain',
          label: 'menu.call_chain',
          iconClass: 'icon-leftcallchain'
        }
      ]
    }
  }
}
</script>
