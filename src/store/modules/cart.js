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
    product({ commit }, payload) {
        commit('updateProduct', payload)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
