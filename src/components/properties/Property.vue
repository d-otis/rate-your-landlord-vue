<template>
  <div>
    <b-container class="mt-5">
    <b-row>
      <b-col sm="12" class="text-center">
        <h1>{{ property.address }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="8">
        <img :src="property.image" alt="" class="rounded-lg w-100">
      </b-col>
      <b-col sm="4" class="bg-light text-center rounded-lg border">
        <b-container>
          <b-row class="my-5">
            <b-col>
              <h3>
                <router-link 
                  :to="{ name: 'landlord', params: {landlordId: landlord.id} }" 
                >
                  {{ landlord.name }}
                </router-link>
              </h3>
              <small>landlord</small>
            </b-col>
          </b-row>
          <b-row class="my-5">
            <b-col class="landlord-rating">
              <h1>
                <span class="bg-secondary text-white rounded-lg p-2">
                  {{ landlord.rating }}
                </span>
              </h1>
              <small><em>landlord rating</em></small>
            </b-col>
            <b-col class="property-rating">
              <h1>
                <span class="bg-secondary text-white rounded-lg p-2">
                  {{ property.rating }}
                </span>
              </h1>
              <small><em>property rating</em></small>
            </b-col>
          </b-row>
          <b-row class="cta-review-row my-5">
            <b-col class="cta-review-col">
              <b-button variant="secondary" size="lg" @click="toggleReviewInput">Leave a Review</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
    <ReviewInput 
      v-show="showReviewInput" 
      :propertyId="propertyId" 
      v-on:toggle-review-input="toggleReviewInput" 
    />
    <h2>Reviews: <span v-show="!property.reviews.length">None</span> </h2>
    <Review 
      v-for="review in reviews" 
      :key="review.id" 
      :review="review" 
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Review from '../reviews/Review'
import ReviewInput from '../reviews/ReviewInput'

export default {
  name: "Property",
  props: {
    propertyId: String
  },
  data() {
    return {
      showReviewInput: false
    }
  },
  components: {
    Review,
    ReviewInput
  },
  computed: {
    ...mapGetters(["getPropertyById", "getLandlordById", "getReviewsByIds"]),
    property() {
      const id = this.propertyId
      return this.getPropertyById(id)
    },
    landlord() {
      return this.getLandlordById(this.property.landlordId)
    },
    reviews() {
      return this.getReviewsByIds(this.property.reviews)
    }
  },
  methods: {
    toggleReviewInput() {
      console.log("toggled")
      this.showReviewInput = !this.showReviewInput
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 50vw;
  }
</style>