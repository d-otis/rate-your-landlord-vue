<template>
  <b-container>
    <b-row>
      <b-col sm="12" class="mt-4">
        <form @submit="handleSubmit">
          <h2>Leave a Review Here:</h2>
          <textarea name="" id="" cols="30" rows="10" v-model="content" placeholder="type your review here!"></textarea>
          <br>
          <input type="range" name="" id="" min="1" max="5" step="1" v-model="rating"> Rating: {{ rating }}
          <br>
          <input type="submit" value="Save">
          <br>
         <button type="button" @click="$emit('toggle-review-input')">Cancel</button>
        </form>
      </b-col>
    </b-row>
  </b-container>
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
      this.createReview({
        content: this.content,
        rating: this.rating,
        property_id: this.propertyId
      })
      this.$emit('toggle-review-input')
      this.content = ""
      this.rating = "5"
    },
    ...mapActions(["createReview"])
  }
}
</script>

<style>

</style>