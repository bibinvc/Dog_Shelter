<template>
  <div>
      <!-- Page Content -->
  <div class="container">
    <div class="row">

      <div class="col-lg-3">

        <h1 class="my-4">Categories</h1>
        <div class="list-group">
          <li class="list-group-item"><router-link to="/shop">All</router-link>
          <li class="list-group-item" v-for="cat in categories" :key="cat.id">
            <router-link :to="'/shop/categories/' + cat.value + '/' + cat.id">{{cat.name}}</router-link>
          </li>
        </div>
        

      </div>
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">
        <app-carousel></app-carousel>

      <div class="row mt-5">
      <div class="col-md-6 col-md-offset-3">
        <form> 
        </form>
      </div>
    </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="prod in filteredProducts" :key="prod.id">
            <div class="card h-100">
              <h4 class="card-title">
                  <a href="#">{{ prod.name }}</a>
                </h4>
              <a href="#"><img class="card-img-top" :src="prod.image" alt=""></a>
              <div class="card-body">
                <h5 class="text-dec">Breed:&nbsp;{{prod.breed}}</h5>
                <h5 class="text-dec">Date Of Birth:&nbsp;{{prod.Date_Of_Birth}}</h5>
                <h5 class="text-dec">Registration:&nbsp;{{prod.Registration}}</h5>
                <h5 class="text-dec">Age:&nbsp;{{prod.Age}}</h5>
                <p class="card-text">Details:&nbsp;{{prod.Dss}}</p>
              </div>
              <div class="card-footer">
                <add-to-cart :productId="prod.id"></add-to-cart>
              </div>
            </div>
          </div> 

        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->


    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
  </div>
</template>

<script>
import AddToCart from '@/components/addToCart.vue'
import Carousel from '@/components/carousel.vue'
export default {
    components: {
      'add-to-cart': AddToCart,
      'app-carousel': Carousel,
    },

    props: {
      producId: { default: null }
    },

    data() {
      return {
        search_term: '',
      }
    },

    computed: {

    products() {
      return this.$store.state.products.products
    },

    categories() {
      return this.$store.state.products.categories
    },

    // returns products filtered with search term. all, if no search.
    filteredProducts() {
      // turns search term to lowercase.
      if(this.search_term === this.search_term.toLowerCase()) {
        return this.products.filter(prod => {
        return prod.name.includes(this.search_term)
      })
      }else {
        return this.products.filter(prod => {
        return prod.name.includes(this.search_term.toLowerCase())
      })
      }
      
    },

  },

  methods: {
 
  },
}
</script>

<style scoped>
.card-title {
  text-transform: capitalize;
}
.card-footer {
 text-align: center;
}
.card-title {
  text-align: center;
}
.text-dec {
  font-size: 16px;
}
</style>
