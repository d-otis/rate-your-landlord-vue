<template>
  <div>
    <h1>{{ property.address }} ({{ property.rating }})</h1>
    <h2>Landlord: {{ landlord.name }} ({{ landlord.rating }})</h2>
    <img :src="property.image" alt="">
    <ul> <h2>Reviews: <span v-show="!property.reviews.length">None</span> </h2>  
      <li v-for="review in property.reviews" :key="review">
        {{ review }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Property",
  props: ["propertyId"],
  computed: {
    ...mapGetters(["getPropertyById", "getLandlordById"]),
    property() {
      const id = this.propertyId
      return this.getPropertyById(id)
    },
    landlord() {
      return this.getLandlordById(this.property.landlordId)
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 50vw;
  }
</style>