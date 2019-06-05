<template>
  <div class="products-index">
    <h1>All Products</h1>

    <div v-for="product in products">
      <img v-bind:src="product.image_url" alt="">
      <h2><router-link v-bind:to="'/products/' + product.id">Name: {{ product.name }}</router-link></h2>
    </div>
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');
export default {
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {}
};
</script>