<template>
  <div class="products-table-index">
    <h1>All Products</h1>
    <div>
      Search by Name: <input v-model="nameFilter"> 
    </div>

    <div>
      <button class="btn btn-dark m-1" v-on:click="setSortAttribute('name')">
        <span v-if="sortAttribute === 'name' && sortAscending === 1">^</span>
        <span v-else-if="sortAttribute === 'name' && sortAscending === -1">v</span>
         Sort by Name
       </button>
      <button class="btn btn-dark m-1" v-on:click="setSortAttribute('price')">
        <span v-if="sortAttribute === 'price' && sortAscending === 1">^</span>
        <span v-else-if="sortAttribute === 'price' && sortAscending === -1">v</span>
        Sort by Price
      </button>
    </div>

    <div class="row mt-5">
      <div class="col-sm-4" v-for="product in orderBy(filterBy(products, nameFilter, 'name'), sortAttribute, sortAscending)">
        <img v-bind:src="product.image_url" alt="">
        <h2><router-link v-bind:to="'/products/' + product.id">{{ product.name }}</router-link></h2>
        <p>{{product.price}}</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
  import Vue2Filters from 'vue2-filters';
  var axios = require('axios');
export default {
  data: function() {
    return {
      products: [],
      nameFilter: "",
      sortAttribute: "name",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        this.sortAscending *= -1;
      } else {
        this.sortAscending = 1;
      }

      this.sortAttribute = inputAttribute;
    }
  },
  mixins: [Vue2Filters.mixin]
};
</script>