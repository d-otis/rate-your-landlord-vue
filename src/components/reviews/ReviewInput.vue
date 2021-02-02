<template>
  <form @submit="handleSubmit">
    <h2>Leave a Review Here:</h2>
    <textarea name="" id="" cols="30" rows="10" v-model="content" placeholder="type your review here!"></textarea>
    <br>
    <input type="range" name="" id="" min="1" max="5" step="1" v-model="rating"> Rating: {{ rating }}
    <br>
    <input type="submit" value="Save">
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ReviewInput",
  props: {
    propertyId: String
  },
  data() {
    return {
      content: "",
      rating: "5",
      property_id: this.propertyId
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log('submitted!')
    },
    ...mapActions(["createReview"])
  }
}
</script>

<style>

</style>