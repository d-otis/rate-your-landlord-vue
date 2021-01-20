<template>
  <div class="landlord">
    <button @click="$router.go(-1)">Go Back</button>
    <h2>Landlord Show</h2>
    <p>{{ landlord.attributes.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Landlord",
  props: ["landlordId"],
  computed: {
    landlord() {
      return this.$root.$data.state.landlords.find(ll => ll.id === this.landlordId )
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