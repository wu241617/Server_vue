import Vue from 'vue'
import Vuex from 'vuex'
import soda from './Soda'

import overview from './modules/overview'
import topo from './modules/topo'
import callchain from './modules/callchain'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    overview,
    topo,
    callchain
  },
  plugins: [soda.vuexPlugin]
})
