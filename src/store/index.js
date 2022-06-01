import Vuex from 'vuex'
import Vue from 'vue'

import products from './Dogs'
import cart from './FavList'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    modules: {
        products,
        cart,
    },
})