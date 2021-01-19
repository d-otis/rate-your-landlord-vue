<template>
  <div class="landlord">
    <h2>{{ name }}</h2>
    <p v-if="rating">Rating: {{ rating }}</p>
    <p>Number of Properties: {{ numProperties }}</p>
    <ul>
      <li>Number of Properties: {{ numProperties }}</li>
      <li>Rating: {{ rating }}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Landlord",
  props: ["landlord"],
  computed: {
    rating() {
      return this.landlord.attributes.rating.toFixed(2)
    },
    numProperties() {
      return this.landlord.relationships.properties.data.length
    },
    name() {
      return this.landlord.attributes.name
    }
  }
}
</script>