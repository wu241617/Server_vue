<template>
  <div :class="outerClass">
    <Header @changeClass="changeClass"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'layout',
  data () {
    return {
      outerClass: localStorage.getItem('lang') === 'en' ? 'en_us' : ''
    }
  },
  components: { Header, Footer },
  methods: {
    changeClass (val) {
      this.outerClass = val
    }
  }
}
</script>
