<template>
  <div class="top top_div">
    <h4>{{titleVal}}</h4>
    <div class="mt10 pull-right">
      <span id="span_date"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleVal: {
      type: String,
      default: ''
    }
  }
}
</script>
