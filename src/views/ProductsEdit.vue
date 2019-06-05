<template>
  <div class="products-edit">
    <h1>Edit Product</h1>

   <ul>
     <li v-for="error in errors">
      {{ error }}
     </li>
   </ul>


   <form v-on:submit.prevent="submit()">
     <div>
       Name: <input v-model="product.name">
     </div>

     <div>
       Description: <input v-model="product.description">
     </div>

     <div>
       Price: <input v-model="product.price">
     </div>

     <div>
       Image Url: <input v-model="product.email">
     </div>

     <input type="submit" value="Update Product">
    </form>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      errors: [],
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
    submit: function() {
     var params = {
                    name: this.product.name,
                    description: this.product.description,
                    price: this.product.price,
                    image_url: this.product.image_url
                    }; 

      axios.patch("/api/products/" + this.$route.params.id, params).then(response => {
        this.$router.push("/products/" + this.$route.params.id);
      });
    }
  }
};
</script>