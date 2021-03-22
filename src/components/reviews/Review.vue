<template>
  <b-row class="bg-light rounded-lg py-3 border mb-3">
    <b-col>
      <b-container class="inner-review-container">
        <b-row>
          <b-col sm="2" class="review-rating text-center my-3">
            <h1>
              <span class="bg-secondary text-white p-2 rounded-lg">
                {{ review.rating }}
              </span>
            </h1>
          </b-col>
          <b-col sm="10" class="review-content">
            <p>{{ review.content }}</p>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Review",
  props: {
    review: Object,
    propertyShow: Boolean
  }
}
</script>

<style scoped>
  .review-rating {
    font-weight: bold;
  }
</style>