const state = {
  firstName: 'JOhn Doe'
}
const getters = {
  showState: state => state
}
const mutations = {
  firstName(state, payload) {
    state.firstName = payload
  }
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
