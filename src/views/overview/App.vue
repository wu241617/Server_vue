<template>
  <div class="content">
    <div class="toolbar">
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
export default {
  data () {
    return {

    }
  },
  methos: {
    changeType () {}
  }
}
</script>

<style>

</style>
