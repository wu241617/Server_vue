<template>
  <div>
    <div class="status"><h1>404</h1></div>
    <a-button @click="goHome" class="btn">返回首页</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style type="less" scoped="scoped">
  .status{
    width:100%;
    height:60%;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size:80px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  h1{
    color:#666;
  }
  .btn{
    display:block;
    width:100px;
    height:35px;
    color:white;
    background-color:deepskyblue;
    cursor:pointer;
    transition: all 1s;
    margin:30px;
  }
  .btn:hover{
    background-color:dodgerblue;
    color:white;
  }
</style>
