<template>
  <div>
    <h1>{{ landlord.name }}</h1>
    <h2>Rating: {{ landlord.rating }}</h2>
    <h2>Properties: <span v-show="!landlord.properties.length">None</span> </h2>
    <ul>
      <li v-for="property in properties" :key="property.id">
       <router-link :to="{ name: 'property', params: {propertyId: property.id} }">{{ property.address }}</router-link> 
      </li>
    </ul>
    <form v-show="showEdit" @submit="handleEdit">
      <input type="text" v-model="landlord.name">
      <input @click="toggleEdit" type="button" value="Cancel">
      <input type="submit" value="Save">
    </form>
    <button v-show="!showEdit" @click="toggleEdit">Edit Landlord</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Landlord",
  props: {
    landlordId: String
  },
  data() {
    return {
      addVisible: false,
      showEdit: false,
    }
  },
  computed: {
    ...mapGetters(['getLandlordById', 'allProperties', "getPropertiesByIds"]),
    // * another option to pull in the Landlord instance below...
    // * make sure to import mapState from vuex
    // !! leave as example
    // ...mapState({
    //   landlord: function(state) {
    //     return state.landlords.landlords.find(landlord => landlord.id === this.landlordId)
    //   }
    // }),
    landlord() {
      const id = this.landlordId
      return this.getLandlordById(id)
    },
    properties() {
      // * below works--
      // !! leave as example
      // return this.allProperties.filter(property => property.landlordId === this.landlord.id)

      return this.getPropertiesByIds(this.landlord.properties)
    }
  },
  methods: {
    ...mapActions(["updateLandlord"]),
    toggleEdit() {
      this.showEdit = !this.showEdit
    },
    handleEdit(e) {
      e.preventDefault();
      this.updateLandlord(this.landlord)
      this.toggleEdit()
    },
  }
}
</script>

<style scoped>

</style>