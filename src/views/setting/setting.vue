<template>
  <div class="container">
    <div class="settingTop">
      <span v-for="(item, index) in settingArr" :key="index">
        <router-link :to='item.path' class="item">{{$t(item.label)}}</router-link>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      settingArr: [{ label: 'setting.staticSetting', path: '/01' }, { label: 'setting.alertSetting', path: '/02' }, { label: 'setting.yichangSetting', path: '/03' }, { label: 'setting.application', path: '/04' }]
    }
  },
  methods: {}
}
</script>

<style type="less" scoped="scoped">
  .container{
   height:calc(100% - 104px);
  }
  .settingTop{
    display:block;
    height:30px;
    margin-top:15px;
    border-bottom:1px solid rgba(0,0,0,.1);
  }
  .item{
    margin:0 50px;
    color:black;
    font-size:14.5px;
  }
  .router-link-active{
    border-bottom:2px solid darkturquoise;
    color:darkturquoise;
  }
</style>
