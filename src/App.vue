<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './layouts/header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
  },

  data(){
    return {
      shopCategories: [
        {id: 1, name: 'American Bully', value: 'American_Bully', },
        {id: 2, name: 'Akita', value: 'Akita',},
        {id: 3, name: 'Barbet', value: 'Barbet',},
        {id: 4, name: 'Beauceron', value: 'Beauceron',},
        ],

      shopProducts: [
        { id: 34, name: 'CHARLIE', Registration: '10/07/2021',Date_Of_Birth:'10/05/2021', Age:'7 years old', Dss:'Dog found roaming the streets on 5th June 2021', image:'https://upload.wikimedia.org/wikipedia/commons/6/63/Champion_Charlie_Muscles_%282%29.jpg', breed:'American Bully',category: 1 },
        { id: 30, name: 'REX', Registration: '15/08/2019',Date_Of_Birth:'10/05/2021', Age:'8 years old',image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg', breed:'akita', category: 2, Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 29, name: 'ZEKE', Registration: '14/04/2015',Date_Of_Birth:'10/05/2021',Age:'5 years old', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F06%2Fbarbet-fawn-colored-grey-background-1477663181-2000.jpg',breed:'Barbet', category: 3 , Dss:'Joined Animal Shelter on 6th June 2021' },
        { id: 28, name: 'CHIP', Registration: '19/05/2014',Date_Of_Birth:'10/05/2021',Age:'4 years old', image: 'https://media-be.chewy.com/wp-content/uploads/2021/06/25080439/Beauceron-FeaturedImage-1024x615.jpg', breed:'Beauceron',category: 4 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 20, name: 'BAILEY', Registration: '30/06/2016',Date_Of_Birth:'10/05/2021',Age:'1 years old', image: 'https://animalso.com/wp-content/uploads/2018/04/American-Bully-1-372x327.jpg', breed:'American Bully',  category: 1 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 21, name: 'TEDDY', Registration: '31/10/2017',Date_Of_Birth:'10/05/2021',Age:'2 years old', image: 'https://brit-petfood.com/file/nodes/product/akitainu.jpg',breed:'akita',  category: 2 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 22, name: 'BEAR', Registration: '20/11/2021',Date_Of_Birth:'10/05/2021',Age:'8 years old', image: 'https://www.akc.org/wp-content/uploads/2017/11/Barbet-standing-in-the-snow.jpg',breed:'Barbet', category: 3 , Dss:'Joined Animal Shelter on 6th June 2021'},
        { id: 14, name: 'CASH', Registration: '10/12/2014',Date_Of_Birth:'10/05/2021',Age:'5 years old', image: 'https://www.akc.org/wp-content/uploads/2017/11/Beauceron-On-White-03.jpg',breed:'Beauceron', category: 4 , Dss:'Joined Animal Shelter on 6th June 2021'},
        { id: 50, name: 'JASPER', Registration: '12/03/2012',Date_Of_Birth:'10/05/2021',Age:'3 years old', image: 'https://ebkc.org/wp-content/uploads/2019/07/ambully6.jpg',breed:'American Bully', category: 1 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 54, name: 'WALTER', Registration: '11/06/2011',Date_Of_Birth:'10/05/2021',Age:'7 years old', image: 'https://t2.ea.ltmcdn.com/en/posts/1/3/3/advanced_commands_331_3_600.jpg',breed:'American Bully', category: 1 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 44, name: 'BLAZE', Registration: '15/02/2015',Date_Of_Birth:'10/05/2021',Age:'4 years old', image: 'https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=400,height=400,fit=cover/animal/breed/pictures/61437badcecf8773758663.jpg',breed:'akita',  category: 2, Dss:'Joined Animal Shelter on 6th June 2021' },
        { id: 50, name: 'JASPER', Registration: '12/03/2012',Date_Of_Birth:'10/05/2021',Age:'3 years old', image: 'https://miro.medium.com/max/1400/1*ykXORE4qwEYZdfF3amWFeg.jpeg', category: 1 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 9, name: 'MILO', Registration: '13/01/2013',Date_Of_Birth:'10/05/2021',Age:'6 years old', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F05%2F27%2Fakita-tongue-white-257946779-2000.jpg',breed:'akita',  category: 2 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 8, name: 'OSCAR', Registration: '05/06/2017',Date_Of_Birth:'10/05/2021',Age:'1 years old', image: 'https://www.bubblypet.com/wp-content/uploads/2020/11/Big-American-Bully-XL.jpg',breed:'American Bully', category: 1 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 2, name: 'KOBE', Registration: '16/04/2014',Date_Of_Birth:'10/05/2021',Age:'2 years old', image: 'https://www.dogbreedinfo.com/images27/AmericanBullyPitLargeDogPitbullCaineLoks1YearOld1.jpg',breed:'American Bully', category: 1 , Dss:'Dog found roaming the streets on 5th June 2021'},
        { id: 1, name: 'MAX', Registration: '18/03/2013',Date_Of_Birth:'10/05/2021',Age:'5 years old', image: 'https://www.thesprucepets.com/thmb/TBiPLZmwz-ucVvf8FNZ9lQYROS8=/1214x1214/smart/filters:no_upscale()/Akita-GettyImages-588622984-533e955df9214301a56b4c0689b32114-b756891eac2445059cbd59430dbff7e2.jpeg',breed:'akita',  category: 2 , Dss:'Joined Animal Shelter on 6th June 2021'},
        { id: 42, name: 'REMI', Registration: '02/09/2010',Date_Of_Birth:'10/05/2021',Age:'8 years old', image: 'https://brit-petfood.com/file/nodes/product/beauceron.jpg',breed:'Beauceron', category: 4, Dss:'Dog found roaming the streets on 5th June 2021' },
        { id: 84, name: 'SHADOW', Registration: '18/07/2017',Date_Of_Birth:'20/07/2017',Age:'10 years old', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F06%2Fbarbet-brown-color-standing-1619035630.jpg',breed:'Barbet', category: 3, Dss:'Dog found roaming the streets on 5th June 2021' },
      ]
    }
  },

  computed: {
   

    products() {
      return this.$store.state.products.products
    },

    categories() {
      return this.$store.state.products.categories
    },

  },

  created() {
      this.$store.dispatch('setProducts', this.shopProducts)
    
      this.$store.dispatch('setCategories', this.shopCategories)

      this.$store.dispatch('loadCart')
  }
}
</script>

<style>
body {
  padding-top: 56px;
}
</style>
