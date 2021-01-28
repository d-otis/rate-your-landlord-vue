<template>
  <div>
    <h1>{{ landlord.name }}</h1>
    <h2>Rating: {{ landlord.rating }}</h2>
    <h2>Properties: <span v-show="!landlord.properties.length">None</span> </h2>
    <ul>
      <li v-for="property in landlord.properties" :key="property">
        {{ property }}
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
  props: ["landlordId"],
  data() {
    return {
      addVisible: false,
      showEdit: false,
    }
  },
  computed: {
    ...mapGetters(['getLandlordById']),
    // another option to pull in the Landlord instance below...
    // make sure to import mapState from vuex
    // ...mapState({
    //   landlord: function(state) {
    //     return state.landlords.landlords.find(landlord => landlord.id === this.landlordId)
    //   }
    // }),
    landlord() {
      const id = this.landlordId
      return this.getLandlordById(id)
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