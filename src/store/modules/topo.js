const MUTATIONS = {
  CHANGE_CLUSTER: 'update/cluster'
}

let overviewHost = {
  namespaced: true,
  state: {
    cluster: 1
  },
  mutations: {
    [MUTATIONS.CHANGE_CLUSTER] (state, val) {
      state.cluster = val
    }
  },
  actions: {
  }
}

export default overviewHost
export { MUTATIONS }
