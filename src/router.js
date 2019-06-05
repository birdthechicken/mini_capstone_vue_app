import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Test from './views/Test.vue';
import ProductsNew from './views/ProductsNew.vue';
import ProductsShow from './views/ProductsShow.vue';
import ProductsEdit from './views/ProductsEdit.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    { path: '/', name: 'home', component: Home},  
    { path: '/about', name: 'about', component: About }, 
    { path: '/test', name: 'test', component: Test }, 
    { path: '/products/new', name: 'products-new', component: ProductsNew },
    { path: '/products/:id', name: 'products-show', component: ProductsShow },
    { path: '/products/:id/edit', name: 'products-edit', component: ProductsEdit }
  ]
})
