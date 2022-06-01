import Home from '@/pages/index.vue'
import Categories from '@/pages/categories.vue'
import Checkout from '@/pages/FavouriteList.vue'

export default [
    { path: '/shop', component: Home, name: 'home' },
    { path: '/shop/categories/:value/:id', component: Categories, name: 'categories'},
    { path: '/shop/FavouriteList', component: Checkout, name: 'favouritelist'},
]