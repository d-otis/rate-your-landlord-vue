// /store/modules/landlords.js
import axios from 'axios'
import { normalizeLandlord, updateResourceWithReview, BASEURL } from '../../util'

const landlordsURL = `${BASEURL}/landlords`

const state = {
  landlords: []
}

const getters = {
  allLandlords: state => state.landlords,
  getLandlordById: state => id => state.landlords.find(landlord => landlord.id === id)
}

const actions = {
  async fetchLandlords({ commit }) {
    const response = await axios.get(landlordsURL)

    commit("setLandlords", response.data.data)
  },
  async createLandlord({ commit }, landlord) {
    const response = await axios.post(landlordsURL, { landlord })

    commit("newLandlord", response.data.data)

    if (response.data.included.length) { commit('addProperty', response.data.included[0]) }
  },
  async updateLandlord({ commit }, landlord) {
    const response = await axios.patch(`${landlordsURL}/${landlord.id}`, { name: landlord.name })

    commit("updateLandlord", response.data.data)
  },
  async deleteLandlord({ commit }, id) {
    const response = await axios.delete(`${landlordsURL}/${id}`)

    commit("deleteLandlord", response.data.data.id)
  }
}

const mutations = {
  setLandlords: (state, landlords) => {
    state.landlords = landlords.map(landlord => normalizeLandlord(landlord))
  },
  newLandlord: (state, landlord) => {
    state.landlords = [ normalizeLandlord(landlord) , ...state.landlords ]
  },
  updateLandlord: (state, landlord) => {
    const index = state.landlords.findIndex(l => l.id === landlord.id)

    state.landlords = [
      ...state.landlords.slice(0, index), normalizeLandlord(landlord), ...state.landlords.slice(index + 1)
    ]
  },
  addPropertyToLandlord: (state, property) => {
    const targetLandlord = state.landlords.find(ll => ll.id === property.attributes.landlord_id)
    const index = state.landlords.findIndex(ll => ll.id === targetLandlord.id)
    targetLandlord.properties.unshift(property.id)

    state.landlords = [
      ...state.landlords.slice(0, index),
      targetLandlord,
      ...state.landlords.slice(index + 1)
    ]
  },
  updateLandlordWithReview: (state, review) => updateResourceWithReview(state, review),
  deleteLandlord: (state, id) => {
    state.landlords = state.landlords.filter(landlord => landlord.id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}