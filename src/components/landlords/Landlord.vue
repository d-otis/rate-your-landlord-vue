<template>
  <div class="landlord">
    <h2>{{ name }}</h2>
    <p v-if="rating">Rating: {{ rating }}</p>
    <p>Number of Properties: {{ numProperties }}</p>
    <ul>
      <li v-bind:key="property.id" v-for="property in propertiesArray">{{ property.id }}</li>
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
    },
    propertiesArray() {
      return this.landlord.relationships.properties.data
    }
  }
}
</script>