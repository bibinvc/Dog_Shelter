import Vue from 'vue'
import Vuex from 'vuex'

import shelter from './shelter'
import favorites from './favorites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shelter,
    favorites,
  },
})
