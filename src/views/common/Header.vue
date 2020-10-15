<template>
  <div class="header">
    <div class="logo">
      <div class="logo__img"></div>
      <div class="logo__text">V6.1.1</div>
    </div>
    <div class="menu" v-for="(item, index) in menuArr" :key="index">
      <router-link :to="item.path">
        <span class="menu__img" :class="item.iconClass"></span>
        <span class="menu__text">{{$t(item.label)}}</span>
      </router-link>
    </div>

    <div class="sub-menu pull-right">
      <ul class="sub-menu__ul">
        <li v-for="(item, index) in menuArrRight" :key="index" class="sub-menu__li">
          <router-link :to="item.path" :class="item.iconClass" :title="$t(item.label)"></router-link>
        </li>
      </ul>
      <div class="user" @mouseover="showUserFloat">
        <span class="user__icon icon-topuser"></span>
        <span class="user__text overflow_ellipsis"><!-- {{language === 'zh' ? '账号' : 'Account'}} -->
        {{$t('menu.Account')}}</span>
        <!-- <div class="" @mouseleave="hideUserFloat" v-show="userFloatFlag">
          <span @click="logout">{{$t('global.exit')}}</span>
        </div> -->
        <!-- <div @click="changeTheme">更换主题</div> -->
      </div>
      <div class="language" @click="changeLanguage">{{language === 'zh' ? 'En' : '中'}}</div>
    </div>

  </div>
</template>
<script>
const menuArr = [
  {
    label: 'menu.application_overview',
    path: '/overview',
    iconClass: 'icon-topoverview'
  }, {
    label: 'menu.business_analysis',
    path: '/analysis',
    iconClass: 'icon-topbusiness'
  }, {
    label: 'menu.basic_monitoring',
    path: '/01',
    iconClass: 'icon-tophostbase'
  }, {
    label: 'menu.event',
    path: '/02',
    iconClass: 'icon-topevent'
  }, {
    label: 'menu.dashboard',
    path: '/03',
    iconClass: 'icon-topdashboard'
  }, {
    label: 'menu.alertnew',
    path: '/04',
    iconClass: 'icon-topalertnew'
  }
]
const menuArrRight = [
  {
    label: 'header.setting',
    path: '/setting',
    iconClass: 'icon-topsetting'
  }, {
    label: 'header.deployment',
    path: '/06',
    iconClass: 'icon-deployment'
  }, {
    label: 'header.alarmManagement',
    path: '/alert',
    iconClass: 'icon-topalarm'
  }, {
    label: 'header.automaticReport',
    path: '/autoreport',
    iconClass: 'icon-topreport'
  }, {
    label: 'header.systemSettings',
    path: '/xxx',
    iconClass: 'icon-topset'
  }
]
export default {
  data () {
    return {
      language: 'zh',
      userFloatFlag: false
    }
  },
  computed: {
    menuArr () {
      return menuArr
    },
    menuArrRight () {
      return menuArrRight
    }
  },
  props: {
    changeClass: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
    changeLanguage () {
      let languageInfo = this.language === 'zh' ? 'en' : 'zh'
      this.language = languageInfo
      this.$i18n.locale = languageInfo
      localStorage.setItem('lang', languageInfo)
      this.$emit('changeClass', languageInfo === 'zh' ? '' : 'en_us')
      if (this.$route.meta?.title) {
        window.document.title = this.$t(this.$route.meta.title)
      }
    },
    showUserFloat () {
      this.userFloatFlag = true
    },
    hideUserFloat () {
      this.userFloatFlag = false
    },
    logout () {
      localStorage.removeItem('lang')
      localStorage.removeItem('username')
      window.location.href = '/login'
    }
    // changeTheme () {
    //   window.less.modifyVars({
    //     '@primary-color': '#ff1863'
    //   })
    // }
  }
}
</script>

<style type="less" scoped="scoped">
  .router-link-active{
    color:darkturquoise;
    background-color: darkturquoise;
  }
</style>
