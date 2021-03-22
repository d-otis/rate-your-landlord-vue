<template>
  <div>
    <h1>Add a Property:</h1>
    <b-form @submit="handleSubmit">
    <!-- ADDRESS -->
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
  <!-- LANDLORD SELECT -->
    <b-form-group
      id="landlord-select-group"
      label="Select Landlord:"
      label-for="landlord"
    >
      <b-form-select
        id="landlord"
        v-model="landlordId"
        :options="selectLandlordsCollection"
        @change="checkForNewLandlord"
        required
      >

      </b-form-select>
    </b-form-group>
  <!-- NEW LANDLORD INPUT -->
    <b-form-group
    v-show="showNewLandlordInput"
    id="new-landlord-group"
    label="Create a New Landlord"
    label-for="new-landlord"
    >
      <b-form-input
        type="text"
        id="new-landlord"
        v-model="landlordName"
      >
      </b-form-input>
    </b-form-group>
  <!-- IMAGE URL -->
    <b-form-group
    label="Image URL"
    id="image-group"
    label-for="image"
    required
    >
      <b-form-input
      type="url"
      id="image"
      v-model="image_url"
      >
      </b-form-input>
    </b-form-group>
  <!-- SUBMIT/CANCEL -->
      <b-button type="submit">Create Property</b-button>
      <b-button @click="$emit('toggle-input')">Cancel</b-button>
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
      selectLandlordsCollection() {
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