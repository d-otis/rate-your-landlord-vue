<template>
  <div id="app">
    <Navigation />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/landlords">Landlords</router-link> | 
      <router-link to="/properties">Properties</router-link>
    </div>
    <router-view/>
    
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
