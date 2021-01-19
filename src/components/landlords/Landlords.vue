<template>
  <div>
  Landlords Index    
  </div>
</template>

<script>


export default {
  name: "Landlords",
  data() {
    return {
      landlords: []
    }
  },
  created() {
    this.landlords = ["a landlord"]
  }
}
</script>