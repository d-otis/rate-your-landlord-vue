import axios from 'axios'

const state = {
  properties: []
}

const getters = {
  allProperties: state => state.properties,
  getPropertyById: state => id => state.properties.find(property => property.id === id)
}

const actions = {
  async fetchProperties({ commit }) {
    const response = await axios.get("http://localhost:3000/api/v1/properties/")

    commit("setProperties", response.data.data)
  }
}

const mutations = {
  setProperties: (state, properties) => {
    state.properties = properties
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}