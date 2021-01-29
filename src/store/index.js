import Vue from 'vue'
import Vuex from 'vuex'
import landlords from './modules/landlords'
import properties from './modules/properties'
import reviews from './modules/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    landlords,
    properties,
    reviews
  }
})
