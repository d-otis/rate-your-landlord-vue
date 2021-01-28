import axios from 'axios'
import { formatRating, normalizeLandlord } from '../../util'

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
    const updatedLandlord = {
      id: landlord.id,
      name: landlord.attributes.name,
      rating: formatRating(landlord.attributes.rating),
      image: landlord.attributes.image_url,
      properties: landlord.relationships.properties.data.map(property => property.id),
      reviews: landlord.relationships.reviews.data.map(review => review)
    }
    state.landlords = [
      ...state.landlords.slice(0, index), updatedLandlord, ...state.landlords.slice(index + 1)
    ]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}