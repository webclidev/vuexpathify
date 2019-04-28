import { make } from 'vuex-pathify'
const state = {
  products: 'lifeBuoy'
}
const mutations = make.mutations(state)
export default {
  namespaced: true,
  state,
  mutations
}
