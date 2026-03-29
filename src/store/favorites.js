import swal from 'sweetalert'

const STORAGE_KEY = 'dog-shelter-favorites'

function readFavorites() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedValue = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    return Array.isArray(storedValue)
      ? storedValue.filter(item => Number.isInteger(item))
      : []
  } catch (error) {
    return []
  }
}

function persistFavorites(favoriteIds) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
}

const state = {
  favoriteIds: [],
}

const getters = {
  favoriteCount(currentState) {
    return currentState.favoriteIds.length
  },

  favoriteDogs(currentState, currentGetters, rootState) {
    return currentState.favoriteIds
      .map(favoriteId => {
        return rootState.shelter.dogs.find(dog => dog.id === favoriteId)
      })
      .filter(Boolean)
  },

  isFavorite: currentState => dogId => {
    return currentState.favoriteIds.includes(dogId)
  },
}

const mutations = {
  SET_FAVORITES(currentState, favoriteIds) {
    currentState.favoriteIds = favoriteIds
  },
}

const actions = {
  loadFavorites({ commit }) {
    commit('SET_FAVORITES', readFavorites())
  },

  addFavorite({ state, commit }, dogId) {
    if (state.favoriteIds.includes(dogId)) {
      swal('Already saved', 'This dog is already in your favorites list.', 'info')
      return
    }

    const nextFavorites = [...state.favoriteIds, dogId]
    persistFavorites(nextFavorites)
    commit('SET_FAVORITES', nextFavorites)
    swal('Saved', 'Dog added to your favorites list.', 'success')
  },

  removeFavorite({ state, commit }, dogId) {
    const nextFavorites = state.favoriteIds.filter(id => id !== dogId)
    persistFavorites(nextFavorites)
    commit('SET_FAVORITES', nextFavorites)
    swal('Removed', 'Dog removed from your favorites list.', 'warning')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
