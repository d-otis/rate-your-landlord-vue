import axios from 'axios'
import { normalizeLandlord, formatRating } from '../../util'

const state = {
  landlords: []
}

const getters = {
  allLandlords: state => state.landlords,
  getLandlordById: state => id => state.landlords.find(landlord => landlord.id === id)
}

const actions = {
  async fetchLandlords({ commit }) {
    const response = await axios.get("http://localhost:3000/api/v1/landlords/")

    commit("setLandlords", response.data.data)
  },
  async addLandlord({ commit }, landlord) {
    const response = await axios.post("http://localhost:3000/api/v1/landlords/", { name: landlord })
     
    commit("newLandlord", response.data.data)
  },
  async updateLandlord({ commit }, landlord) {
    const response = await axios.patch(`http://localhost:3000/api/v1/landlords/${landlord.id}`, { name: landlord.name })

    commit("updateLandlord", response.data.data)
  },
  async deleteLandlord({ commit }, id) {
    const response = await axios.delete(`http://localhost:3000/api/v1/landlords/${id}`)

    // eslint-disable-next-line
    // debugger
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
  updateLandlordWithReview: (state, review) => {
    const landlordId = review.attributes.landlord_id
    const landlord = state.landlords.find(landlord => landlord.id === landlordId)
    const index = state.landlords.findIndex(landlord => landlord.id === landlordId)

    landlord.rating = formatRating(review.attributes.landlord_rating)
    landlord.reviews.unshift(review.id)

    state.landlords = [
      ...state.landlords.slice(0, index),
      landlord,
      ...state.landlords.slice(index + 1)
    ]
  },
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