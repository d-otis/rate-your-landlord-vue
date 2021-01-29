import axios from 'axios'
import { normalizeReview } from '../../util'

const state = {
  reviews: []
}

const getters = {}

const actions = {
  async fetchReviews({ commit }) {
    const response = await axios.get("http://localhost:3000/api/v1/reviews/")

    commit("setReviews", response.data.data)
  }
}

const mutations = {
  setReviews: (state, reviews) => {
    state.reviews = reviews.map(review => normalizeReview(review))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}