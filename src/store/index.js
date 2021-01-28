import Vue from 'vue'
import Vuex from 'vuex'
import landlords from './modules/landlords'
import properties from './modules/properties'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    landlords,
    properties
  }
})
