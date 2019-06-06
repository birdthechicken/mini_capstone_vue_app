<template>
  <div class="container">
    <div class="products-show">
      <h2>{{ product.name }}</h2>

      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>

      <router-link class="btn btn-primary m-1" v-bind:to="'/products/' + product.id + '/edit'">Edit</router-link>
      <button class="btn btn-danger m-1"v-on:click="destroyProduct()">Delete</button>

      <img v-bind:src="product.image_url">
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
      product: {
                name: "",
                description: "",
                price: "",
                image_url: ""  
              }
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id ).then(response => {
      this.product = response.data;
    });
  },
  methods: {
    destroyProduct: function() {
      axios.delete("/api/products/" + this.product.id).then(response => {
        this.$router.push('/');
        
      });
    }
  }
};
</script>