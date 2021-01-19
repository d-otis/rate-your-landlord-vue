<template>
  <div>
  Landlords Index    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Landlords",
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