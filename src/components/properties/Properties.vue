<template>
  <div>
    <h1>Properties Index</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Properties",
  created() {
    this.fetchProperties()
  },
  computed: {
    ...mapGetters(["allProperties"])
  },
  methods: {
    ...mapActions(["fetchProperties"])
  }
}
</script>

<style scoped>

</style>