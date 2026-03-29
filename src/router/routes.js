import Home from '@/pages/index.vue'
import BreedListing from '@/pages/categories.vue'
import Favorites from '@/pages/FavouriteList.vue'

export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/breeds/:slug/:id', component: BreedListing, name: 'breed' },
  { path: '/favorites', component: Favorites, name: 'favorites' },
  { path: '/home', redirect: '/' },
  {
    path: '/home/categories/:slug/:id',
    redirect: to => ({ name: 'breed', params: to.params }),
  },
  { path: '/home/FavouriteList', redirect: '/favorites' },
  { path: '*', redirect: '/' },
]
