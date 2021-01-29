<template>
  <div>
    <h1>Add a Property:</h1>
    <form @submit="handleSubmit">
      <label for="address">Address:</label>
      <input type="text" name="" id="address" v-model="address">
      <label for="landlord">Select Landlord:</label>
      <select name="" id="" v-model="landlordId">
        <option value="choose">--</option>
        <option v-for="landlord in allLandlords" :value="landlord.id" :key="landlord.id">{{ landlord.name }}</option>
        <option value="new">Create New Landlord</option>
      </select>
      <label for="image">Image Url</label>
      <input type="text" id="image" v-model="image">
      <input type="submit" value="Create Property">
      <button @click="$emit('toggle-input')">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "PropertyInput",
  data() {
    return {
      address: "",
      landlordId: "",
      image: ""
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log('added property')
    },
  },
  computed: {
    ...mapGetters(["allLandlords"])
  }
}
</script>

<style scoped>
  form {
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    /* justify-content: flex-start; */
  }
</style>