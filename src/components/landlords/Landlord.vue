<template>
  <div>
    <h1>{{ landlord.name }}</h1>
    <h2>Rating: {{ landlord.rating }}</h2>
    <h2>Properties: <span v-show="!landlord.properties.length">None</span> </h2>
    <ul>
      <li v-for="property in landlord.properties" :key="property">
        {{ property }}
      </li>
    </ul>
    <form v-show="showEdit" @submit="handleEdit">
      <input type="text" v-model="landlord.name">
      <input @click="toggleEdit" type="button" value="Cancel">
      <input type="submit" value="Save">
    </form>
    <button v-show="!showEdit" @click="toggleEdit">Edit Landlord</button>
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