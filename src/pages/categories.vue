<template>
  <div>
      <!-- Page Content -->
  <div class="container">

    <div class="row mt-5">

      <div class="col-lg-3">

       <h1 class="my-4">Breeds List</h1>
        <div class="list-group">
          <li class="list-group-item"><router-link to="/shop">All</router-link>
          <li class="list-group-item" v-for="cat in categories" :key="cat.id">
            <router-link :to="'/shop/categories/' + cat.value + '/' + cat.id">{{cat.name}}</router-link>
          </li>
        </div>
        

      </div>
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">
        <div class="row">
        
          <div class="col-lg-4 col-md-6 mb-4" v-for="prod in filteredProducts" :key="prod.id">
            <div class="card h-100">
              <h4 class="card-title">
                  <a href="#">{{prod.name}}</a>
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
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small> 
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
export default {
    components: {
      'add-to-cart': AddToCart,
    },

    props: {
      producId: { default: null }
    },

    data() {
        return {
            category_id: this.$route.params.id,
        }
    },

    computed: {
   

    products() {
      return this.$store.state.products.products
    },

    categories() {
      return this.$store.state.products.categories
    },

    filteredProducts() {
      return this.products.filter(product => product.category === Number(this.category_id))
    }

  },

  created() {
  
  },

  methods: {

  },
}
</script>
<style>
.card-img-top {
  width: 250px;
  height: 250px;
}
.card-title {
  text-align: center;
}
.text-dec {
  font-size: 16px;
}
</style>


