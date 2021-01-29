<template>
  <div class="table-container">
    <PropertyInput />
    <h1>Properties Index</h1>
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Landlord</th>
          <th>Landlord Rating</th>
          <th>Property Rating</th>
          <th># of Reviews</th>
          <th>View</th>
        </tr>
      </thead>
      <tr v-for="property in allProperties" :key="property.id">
        <td>{{ property.address }}</td>
        <td>
          <router-link 
            v-bind:to="{ name: 'landlord', params: { landlordId: generateLandlord(property.landlordId).id } }">
            {{ generateLandlord(property.landlordId).name }}
          </router-link>
        </td>
        <td>{{ generateLandlord(property.landlordId).rating }}</td>
        <td>{{ property.rating }}</td>
        <td>{{ property.reviews.length }}</td>
        <td><router-link v-bind:to="`properties/${property.id}`" >View</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PropertyInput from './PropertyInput'

export default {
  name: "Properties",
  components: {
    PropertyInput
  },
  computed: {
    ...mapGetters(["allProperties", "getLandlordById"])
  },
  methods: {
    generateLandlord(id) {
      return this.getLandlordById(id)
    }
  }
}
</script>

<style scoped>
  tr:nth-child(odd) {
    background: #ccc
  }

  .table-container {
    display: flex;
    flex-direction: column;
  }
</style>