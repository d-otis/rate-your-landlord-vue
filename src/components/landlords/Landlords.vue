<template>
  <div>
  <h1>Landlords Index</h1>
  <div v-for="landlord in landlords" v-bind:key="landlord.id">
    <Landlord v-bind:landlord="landlord" />  
  </div>  
  </div>
</template>

<script>
import axios from 'axios'
import Landlord from './Landlord'

export default {
  name: "Landlords",
  components: {
    Landlord
  },
  data() {
    return {
      landlords: []
    }
  },
  created() {
    axios.get("http://localhost:3000/api/v1/landlords")
      .then(res => this.landlords = res.data)
      .catch(err => console.warn(err))
  }
}
</script>