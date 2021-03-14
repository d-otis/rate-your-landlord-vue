<template>
  <div>
    <Navigation />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navigation from './components/navigation/Navigation'

export default {
  name: "App",
  components: {
    Navigation
  },
  methods: {
    ...mapActions(["fetchLandlords", "fetchProperties", "fetchReviews"])
  },
  created() {
    this.fetchLandlords()
    this.fetchProperties()
    this.fetchReviews()
  }
}
</script>

<style>

</style>
