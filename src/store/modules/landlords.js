import axios from 'axios'

const state = {
  landlords: []
}

const getters = {
  allLandlords: state => state.landlords
}

const actions = {
  async fetchLandlords({ commit }) {
    const response = await axios.get("http://localhost:3000/api/v1/landlords/")

    commit("setLandlords", response.data.data)
  }
}

const mutations = {
  setLandlords: (state, landlords) => {
    state.landlords = [
      ...state.landlords,
      ...landlords.map(landlord => {
        return {
          id: landlord.id,
          name: landlord.attributes.name,
          rating: landlord.attributes.rating,
          image: landlord.attributes.image_url,
          properties: landlord.relationships.properties.data.map(property => property.id),
          reviews: landlord.relationships.reviews.data.map(review => review)
        }
      })
    ]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}