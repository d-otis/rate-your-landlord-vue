<template>
  <div>
    <h2>Add Landlord Form</h2>
    <form @submit="handleSubmit">
      <label for="landlord-name">Landlord Name</label>
      <br>
      <input type="text" v-model="name" id="landlord-name" placeholder="Landlord Name">
      <input type="submit" value="Create Landlord">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LandlordInput',
  data() {
    return {
      name: ""
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.addLandlord(this.name)
      this.name = ""
    },
    ...mapActions(["addLandlord"])
  }
  // methods: mapActions(["addLandlord"])
}
</script>