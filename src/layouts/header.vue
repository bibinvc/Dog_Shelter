<template>
    <div>
      <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/shop">Dog Shelter</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
         

          <li class="nav-item dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class=" fa fa-heart"></i> 
               <span class="badge badge-primary">{{cartLength}}</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <ul class="list-group">
                <li class="list-group-item" v-for="item in cartItems" :key="item.id">
                  <b>{{ item.name }}</b> | @{{ item.selling_price }}
                </li>
                <li class="list-group-item">
                  <router-link to='/shop/FavouriteList' class="btn btn-success">View All <i class=" fa fa-heart"></i></router-link>
                </li>
                </ul>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    </div>
</template>

<script>
export default {
    computed: {
      cartLength() {
        return this.$store.getters.cartLength
      },

      cartItems() {
        const products = this.$store.state.products.products
        const cart = this.$store.state.cart.cart
        const cart_items = []
        cart.forEach((cart_item) => {
          const cart_product = products.find(prod => prod.id == cart_item)
          cart_items.push(cart_product)
        })

        return cart_items.slice(0, 3)
      },

      categories() {
        return this.$store.state.products.categories
      },

    },
}
</script>
