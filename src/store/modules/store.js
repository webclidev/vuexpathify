import { make } from 'vuex-pathify'
const state = {
  firstName: 'John Doe'
}
const mutations = make.mutations(state)
export default {
  namespaced: true,
  state,
  mutations
}
