<template>
  <div>
      <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="my-4 text-center text-info">Favourite List <i class=" fa fa-heart"></i></h1>

        <table class="table table-bordered table-hover table-responsive">
         <thead>
             <tr>
                 <th>Number</th>
                 <th>Name</th>
                 <th>Date Of Birth</th>
                 <th>Image</th>
            </tr>
         </thead>

         <tbody>
             <tr v-for="(item, index) in cartItems" :key="item.id">
                 <td>{{ index + 1 }}</td>
                 <td>{{ item.name }}</td>
                 <td>{{ item.Date_Of_Birth }}</td>
                 <td>{{ item.image }}</td>
                 <td><button class="btn btn-danger" type="button" @click="removeFromList(item.id)">X</button></td>
             </tr>
         </tbody>
        </table>

      </div>
      <!-- /.col-lg-3 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
  </div>
</template>

<script>

export default {

    data() {
      return {
        
      }
    },

    computed: {

    products() {
      return this.$store.state.products.products
    },

    cartItems() {
        const products = this.products
        const cart = this.$store.state.cart.cart
        const cart_items = []
        cart.forEach((cart_item) => {
            const cart_product = products.find(prod => prod.id == cart_item)
            cart_items.push(cart_product)
        })

        return cart_items
    },

    cartTotal() {
        let cart_total = null
        this.cartItems.forEach(item => {
            cart_total += item.selling_price
        })
        return cart_total
    }

  },

  methods: {
      removeFromList(productId) {
          // remove item from cart. localstorage. then state
          this.$store.dispatch('removeFromList', productId)
      }
  },
}
</script>

<style scoped>
.selling-price {
  text-decoration-line: line-through;
}

.card-title {
  text-transform: capitalize;
}
</style>
