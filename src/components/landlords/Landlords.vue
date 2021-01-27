<template>
  <div class="table-container">
    <LandlordInput v-show="addLandlordShow" v-on:toggle-input-vis="toggle" />
     <button @click="toggle" v-show="!addLandlordShow">Add a Landlord</button>
     <button @click="toggle" v-show="addLandlordShow">Cancel</button>
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
      <tr v-for="landlord in allLandlords" :key="landlord.id">
        <td contenteditable="true">{{ landlord.name }}</td>
        <td>{{ landlord.rating }}</td>
        <td>{{ landlord.properties.length }}</td>
        <td><router-link v-bind:to="{ name: 'landlord', params: {landlordId: landlord.id} }">view</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LandlordInput from './LandlordInput'

export default {
  name: "Landlords",
  data() {
    return {
      addLandlordShow: false
    }
  },
  components: {
    LandlordInput
  },
  computed: mapGetters(['allLandlords']),
  methods: {
    ...mapActions(["fetchLandlords"]),
    toggle() {
      this.addLandlordShow = !this.addLandlordShow
    }
  },
  created() {
    this.fetchLandlords()
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