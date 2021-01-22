<template>
  <div class="wrapper">
    <button @click="$router.go(-1)">Go Back</button>
    <button @click="toggle">Add a Landlord</button>
    <hr v-show="addVisible">
    <div class="container">
        <div class="landlord-img">
          <img :src="landlord.image" class="landlord-img"> 
        </div>
        <div class="property-panel">
          <ul>
            <li v-for="property in landlord.properties" :key="property.id">
              {{ property }}
            </li>
          </ul>
        </div>
    </div>
    <div class="container">
      <div class="name-rating-col">
        <h1>{{ landlord.name }}</h1>
        <h2>Rating: {{ landlord.rating.toFixed(2) }}</h2>
      </div>
      <div class="edit-col">
        <button>Edit Landlord</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Landlord",
  props: ["landlordId"],
  data() {
    return {
      addVisible: false
    }
  },
  computed: {
    ...mapGetters(['getLandlordById']),
    landlord() {
      const id = this.$route.params.landlordId
      return this.getLandlordById(id)
    }
  },
  methods: {
    toggle() {
      this.addVisible = !this.addVisible
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    /* border: 1px solid red; */
  }

  .landlord-img {
    width: 33vw;
    border-radius: 50%;
    /* flex-grow: 1; */
  }

  .property-panel {
    flex-grow: 2;
    border: 1px solid #ccc;
    border-radius: .25rem
  }

  .name-rating-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 11vw;
    /* width: 33vh; */
  }

  .edit-col {
    /* border: 1px solid orange; */
    flex-grow: 2;
    align-self: flex-start;
  }

  h1, h2 {
    margin: 5px;
    line-height: 1;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border-radius: .25rem;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-color: #ccc;
    margin-top: 5px;
    margin-left: -33vw;
  }
</style>