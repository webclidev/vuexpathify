import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify' //calling pathify config file which we created 
import store from './modules/store'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    pathify.plugin
  ],
  modules: {
    store,
    cart
  }
})