import axios from 'axios'
import { normalizeReview } from '../../util'

const state = {
  reviews: []
}

const getters = {
  allReviews: state => state.reviews,
  getReviewsByIds: state => ids => {
    const matched = []
    ids.forEach(id => {
      let match = state.reviews.find(review => review.id === id)
      if (match) { matched.push(match) }
    })
    return matched
  }
}

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