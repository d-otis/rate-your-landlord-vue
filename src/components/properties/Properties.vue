<template>
  <b-row>
    <b-col>
        <PropertyInput v-show="showInput" v-on:toggle-input="toggleInput" />
        <button v-show="!showInput" @click="toggleInput">Add Property</button>
        <h1> <span v-show="!allProperties.length">Loading: </span> Properties Index</h1>
        <LoadingSpinner v-show="!allProperties.length" />
        <PropertyRowCard v-for="property in allProperties" :key="property.id" :property="property" />
    </b-col>
  </b-row>
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
    generateLandlord(id) {
      return this.getLandlordById(id)
    },
    toggleInput() {
      this.showInput = !this.showInput
    }
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
  }

  span {
    font-style: italic;
  }
</style>