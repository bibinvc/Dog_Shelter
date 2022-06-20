import Home from '@/pages/index.vue'
import Categories from '@/pages/categories.vue'
import Checkout from '@/pages/FavouriteList.vue'

export default [
    { path: '/home', component: Home, name: 'home' },
    { path: '/home/categories/:value/:id', component: Categories, name: 'categories'},
    { path: '/home/FavouriteList', component: Checkout, name: 'favouritelist'},
]