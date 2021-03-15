<template>
  <div>
    <h1>Add a Property:</h1>
    <b-form @submit="handleSubmit">

      <b-form-group
      id="address-group"
      label="Address:"
      label-for="address"
      >
        <b-form-input
        type="text"
        id="address"
        v-model="address"
        placeholder="Enter Address"
        required
        >
        </b-form-input>
    </b-form-group>

    <b-form-group
      id="landlord-select-group"
      label="Select Landlord:"
      label-for="landlord"
    >
      <b-form-select
        id="landlord"
        v-model="landlordId"
        :options="selectLandlords"
        @change="checkForNewLandlord"
        required
      >

      </b-form-select>
    </b-form-group>

      <div v-show="showNewLandlordInput">
        <label for="landlord-name">Create a New Landlord</label>
        <br>
        <input type="text" name="" id="landlord-name" v-model="landlordName">
      </div>
      <label for="image">Image Url</label>
      <input type="text" id="image" v-model="image_url">
      <input type="submit" value="Create Property">
      <button type="button" @click="$emit('toggle-input')">Cancel</button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "PropertyInput",
  data() {
    return {
      address: "",
      landlordId: "",
      image_url: "",
      showNewLandlordInput: false,
      landlordName: ""
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.landlordId === 'new') {
        this.createLandlord({
          name: this.landlordName,
          properties_attributes: [{
            address: this.address,
            image_url: this.image_url
          }]
        })
      } else {
        this.createProperty({
          address: this.address,
          image_url: this.image_url,
          landlord_id: this.landlordId
        })
      }
      this.address = ""
      this.landlordId = ""
      this.image_url = ""
      this.showNewLandlordInput = false
      this.landlordName = ""
      this.$emit('toggle-input')
    },
    checkForNewLandlord() {
      if (this.landlordId ==='new') {
        this.showNewLandlordInput = true
      } else {
        this.showNewLandlordInput = false
        this.landlordName = ""
      }
    },
    ...mapActions(["createProperty", "createLandlord"])
  },
  computed: {
    ...mapGetters(["allLandlords"]),
      selectLandlords() {
      return [
        {text: "--", value: "choose"},
        ...this.allLandlords.map(landlord => ({text: landlord.name, value: landlord.id})),
        {text: "Create New Landlord", value: "new"}
        ]
    }
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