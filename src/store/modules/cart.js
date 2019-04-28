const state = {
  products: 'lifeBuoy'
}
const getters = {
  showProduct: state => state
}
const mutations = {
  updateProduct(state, payload) {
    state.products = payload
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
