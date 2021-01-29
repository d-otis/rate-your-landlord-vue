import axios from 'axios'
import { normalizeProperty } from '../../util'

const state = {
  properties: []
}

const getters = {
  allProperties: state => state.properties,
  getPropertyById: state => id => state.properties.find(property => property.id === id),
  getPropertiesByIds: state => ids => {
    const matched = []
    ids.forEach(id => {
      let match = state.properties.find(property => property.id === id)
      if (match) { matched.push(match) }
    })
    return matched
  }
}

const actions = {
  async fetchProperties({ commit }) {
    const response = await axios.get("http://localhost:3000/api/v1/properties/")
    commit("setProperties", response.data.data)
  },
  async createProperty({ commit }, property) {
    const response = await axios.post("http://localhost:3000/api/v1/properties/", { property })

    commit('addProperty', response.data.data)
  }
}

const mutations = {
  setProperties: (state, properties) => {
    state.properties = properties.map(property => normalizeProperty(property))
  },
  addProperty: (state, property) => {
    state.properties = [ normalizeProperty(property), ...state.properties ]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}