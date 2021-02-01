<template>
  <div>
    <h1>{{ property.address }} ({{ property.rating }})</h1>
    <h2>Landlord: {{ landlord.name }} ({{ landlord.rating }})</h2>
    <img :src="property.image" alt="">
    <br>
    <button @click="toggleReviewInput">Leave a Review</button>
    <ReviewInput v-show="showReviewInput" :propertyId="propertyId" />
    <h2>Reviews: <span v-show="!property.reviews.length">None</span> </h2>
    <Review v-for="review in reviews" :key="review.id" :review="review" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Review from '../reviews/Review'
import ReviewInput from '../reviews/ReviewInput'

export default {
  name: "Property",
  props: ["propertyId"],
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