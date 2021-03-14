<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-card-header header-tag="h3">{{ property.address }}</b-card-header>
    <b-card-body>
    <b-row no-gutters>
      <b-col sm="4">
        <b-card-img :src="property.image" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8">
        <router-link :to="{ name: 'landlord', params: { landlordId: property.landlordId } }"><b-card-title title-tag="h6">{{ property.landlordId }}</b-card-title> </router-link>
        
          <b-card-text text-tag="h6">
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
      </b-col>
    </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "PropertyRowCard",
  props: {
    property: Object
  }
}
</script>

<style>

</style>