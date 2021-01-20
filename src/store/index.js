import Vue from 'vue'
import Vuex from 'vuex'
import landlords from './modules/landlords'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    landlords
  }
})
