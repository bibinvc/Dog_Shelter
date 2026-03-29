import { categories, dogs } from '../data/shelterData'

const state = {
  categories,
  dogs,
}

const getters = {
  allCategories(currentState) {
    return currentState.categories
  },

  allDogs(currentState) {
    return currentState.dogs
  },

  categoryById: currentState => categoryId => {
    return currentState.categories.find(category => category.id === Number(categoryId)) || null
  },

  dogsByCategory: currentState => categoryId => {
    return currentState.dogs.filter(dog => dog.categoryId === Number(categoryId))
  },
}

export default {
  namespaced: true,
  state,
  getters,
}
