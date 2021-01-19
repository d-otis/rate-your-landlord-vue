<template>
  <div class="table-container">
    <h1>Landlords Index</h1> 
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Properties</th>
          <th>Link</th>
        </tr>
      </thead>
      <tr v-for="landlord in landlords" :key="landlord.id">
        <td>{{ landlord.attributes.name }}</td>
        <td>{{ landlord.attributes.rating.toFixed(2) }}</td>
        <td>{{ landlord.relationships.properties.data.length }}</td>
        <td><router-link v-bind:to="{ name: 'landlord', params: {landlordId: landlord.id} }">view</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Landlords",
  components: {
  },
  data() {
    return {
      landlords: this.$root.$data.landlords
    }
  },
  created() {
    axios.get("http://localhost:3000/api/v1/landlords")
      .then(res => this.$root.$data.landlords = res.data.data)
      .catch(err => console.warn(err))
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
    /* align-items: center; */
  }
</style>