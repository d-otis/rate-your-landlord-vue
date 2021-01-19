<template>
  <div class="landlord">
    <h2>{{ landlord.attributes.name }}</h2>
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
    }
  }
}
</script>