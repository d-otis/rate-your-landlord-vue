<template>
  <b-card no-body class="overflow-hidden">
    <b-card-header header-tag="h3">{{ property.address }}</b-card-header>
    <b-card-body>
      <b-container>
        <b-row no-gutters>
          <b-col sm="4">
            <b-card-img :src="property.image" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="8">
            <router-link :to="{ name: 'landlord', params: { landlordId: property.landlordId } }"><b-card-title title-tag="h6">{{ property.landlordId }}</b-card-title> </router-link>
              <b-card-text text-tag="h6">Landlord Rating: XX</b-card-text>
              <b-card-text text-tag="h6">Property Rating: {{ property.rating }}</b-card-text>
              <b-card-text >This property has {{ property.reviews.length }} reviews.</b-card-text>
              <b-button>Leave a Review || Read Reviews</b-button>
          </b-col>
        </b-row>
      </b-container>
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