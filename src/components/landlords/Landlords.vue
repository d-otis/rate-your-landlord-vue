<template>
  <div class="table-container">
    <LandlordInput v-show="addLandlordShow" v-on:toggle-input-vis="toggle" />
     <button @click="toggle" v-show="!addLandlordShow">Add a Landlord</button>
     <button @click="toggle" v-show="addLandlordShow">Cancel</button>
    <h1> <span v-show="!allLandlords.length">Loading: </span> Landlords Index</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Properties</th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tr v-for="landlord in allLandlords" :key="landlord.id">
        <td>{{ landlord.name }}</td>
        <td>{{ landlord.rating }}</td>
        <td>{{ landlord.properties.length }}</td>
        <td><router-link v-bind:to="{ name: 'landlord', params: {landlordId: landlord.id} }">view</router-link></td>
        <td><button @click="handleDelete" :id="landlord.id">Delete</button></td>
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
    toggle() {
      this.addLandlordShow = !this.addLandlordShow
    },
    ...mapActions(['deleteLandlord']),
    handleDelete(e) {
      // eslint-disable-next-line
      // debugger
      // console.log(e)
      this.deleteLandlord(e.target.id)
    }
  },
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
  span {
    font-style: italic;
  }
</style>