<template>
  <div class="landlord">
    <button @click="$router.go(-1)">Go Back</button>
    <h2>Landlord Show</h2>
    <p>{{ landlord.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Landlord",
  props: ["landlordId"],
  computed: {
    ...mapGetters(['getLandlordById']),
    landlord() {
      const id = this.$route.params.landlordId
      return this.getLandlordById(id)
    }
  }
}
</script>