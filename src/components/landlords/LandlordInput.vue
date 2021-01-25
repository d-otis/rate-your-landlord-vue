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
// import mapActions from 'vuex'

export default {
  name: 'LandlordInput',
  data() {
    return {
      name: ""
    }
  },
  methods: {
    // ...mapActions(['addLandlord']),
    handleSubmit(event) {
      event.preventDefault();
      // eslint-disable-next-line
      // debugger
      console.log('submitted')
      this.addLandlord(this.name)
    }
  }
}
</script>