<template>
  <div>
    <b-row>
      <b-col sm="12">
        <PropertyInput v-show="showInput" v-on:toggle-input="toggleInput" />
        <b-button variant="secondary" v-show="!showInput" @click="toggleInput">Add Property</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="10" offset-sm="1">
        <LoadingSpinner v-show="!allProperties.length" />
        <PropertyRowCard 
          v-for="property in allProperties" 
          :key="property.id" 
          :property="property" 
          :landlord="getLandlordById(property.landlordId)" 
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PropertyInput from './PropertyInput'
import LoadingSpinner from '../loading/LoadingSpinner'
import PropertyRowCard from './PropertyRowCard'

export default {
  name: "Properties",
  data() {
    return {
      showInput: false
    }
  },
  components: {
    PropertyInput,
    LoadingSpinner,
    PropertyRowCard
  },
  computed: {
    ...mapGetters(["allProperties", "getLandlordById"])
  },
  methods: {
    toggleInput() {
      this.showInput = !this.showInput
    }
  }
}
</script>

<style scoped>
</style>