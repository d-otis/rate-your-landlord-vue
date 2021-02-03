<template>
  <p> <span class="review-rating">{{ review.rating }}</span> - {{ review.content }}</p>
</template>

<script>
export default {
  name: "Review",
  props: {
    review: Object
  }
}
</script>

<style scoped>
  .review-rating {
    font-weight: bold;
  }
</style>