<template>
  <div class="spinner-container">
    <img :src="'./spinner.gif'" alt="">
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<style>
  .spinner-container {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
  }

  img {
    width: 15%
  }
</style>