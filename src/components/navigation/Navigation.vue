<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" class="shadow-sm mb-4">
      <b-navbar-brand to="/">Rate Your Landlord</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/properties">Properties</b-nav-item>
          <b-nav-item to="/landlords">Landlords</b-nav-item>
          <b-nav-item to="/reviews">Reviews</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style>

</style>