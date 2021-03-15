<template>
  <b-card no-body class="my-4">
    <b-card-header header-tag="h3">{{ property.address }}</b-card-header>
    <b-card-body>
      <b-container>
        <b-row>
          <b-col sm="4">
            <b-card-img :src="property.image" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col sm="8">
            <router-link :to="{ name: 'landlord', params: { landlordId: property.landlordId } }"><b-card-title title-tag="h5">Landlord: {{ landlord.name }}</b-card-title> </router-link>
              <b-card-text text-tag="h6">Landlord Rating: {{ landlord.rating }}</b-card-text>
              <b-card-text text-tag="h6">Property Rating: {{ property.rating }}</b-card-text>
              <b-card-text >This property has {{ property.reviews.length }} reviews.</b-card-text>
              <router-link :to="{ name: 'property', params: { propertyId: property.id } }" >
                <b-button>{{ reviewButtonText(property) }}</b-button>
              </router-link>
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
    property: Object,
    landlord: Object
  },
  methods: {
    reviewButtonText(property) {
      const text = property.reviews.length ? "Read the Reviews" : "Leave a Review"
      return text
    }
  }
}
</script>

<style>

</style>