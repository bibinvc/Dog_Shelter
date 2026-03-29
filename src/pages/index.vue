<template>
  <div class="container shelter-page">
    <div class="row">
      <aside class="col-lg-3 mb-4">
        <div class="sidebar-panel shadow-sm">
          <h1 class="h3">Available Dogs</h1>
          <p class="text-muted mb-4">
            {{ dogs.length }} dogs are currently listed for adoption or assessment.
          </p>

          <label class="font-weight-semibold" for="dog-search">Search dogs</label>
          <input
            id="dog-search"
            v-model.trim="searchTerm"
            type="search"
            class="form-control mb-4"
            placeholder="Search by name, breed, or note"
          >

          <h2 class="h5">Browse by breed</h2>
          <div class="list-group list-group-flush">
            <router-link class="list-group-item list-group-item-action" to="/">
              All dogs
            </router-link>
            <router-link
              v-for="category in categories"
              :key="category.id"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              :to="{ name: 'breed', params: { slug: category.slug, id: category.id } }"
            >
              <span>{{ category.name }}</span>
              <span class="badge badge-light">{{ dogsInCategory(category.id) }}</span>
            </router-link>
          </div>
        </div>
      </aside>

      <section class="col-lg-9">
        <app-carousel />

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <div>
            <h2 class="h4 mb-1">Shelter Listings</h2>
            <p class="text-muted mb-0">
              Search across all active dogs and save the ones you want to revisit.
            </p>
          </div>
          <span class="badge badge-info px-3 py-2 mt-3 mt-md-0">
            {{ filteredDogs.length }} result{{ filteredDogs.length === 1 ? '' : 's' }}
          </span>
        </div>

        <div v-if="filteredDogs.length" class="row">
          <div
            v-for="dog in filteredDogs"
            :key="dog.id"
            class="col-md-6 col-xl-4 mb-4"
          >
            <dog-card :dog="dog" />
          </div>
        </div>

        <div v-else class="empty-state shadow-sm">
          No dogs match your search. Try a breed name or clear the search field.
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/carousel.vue'
import DogCard from '@/components/DogCard.vue'

export default {
  components: {
    'app-carousel': Carousel,
    DogCard,
  },

  data() {
    return {
      searchTerm: '',
    }
  },

  computed: {
    categories() {
      return this.$store.getters['shelter/allCategories']
    },

    dogs() {
      return this.$store.getters['shelter/allDogs']
    },

    filteredDogs() {
      const term = this.searchTerm.toLowerCase()

      if (!term) {
        return this.dogs
      }

      return this.dogs.filter(dog => {
        return [dog.name, dog.breed, dog.description, dog.status]
          .join(' ')
          .toLowerCase()
          .includes(term)
      })
    },
  },

  methods: {
    dogsInCategory(categoryId) {
      return this.$store.getters['shelter/dogsByCategory'](categoryId).length
    },
  },
}
</script>

<style scoped>
.shelter-page {
  padding-top: 24px;
}

.sidebar-panel {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
}

.empty-state {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  color: #52606d;
}
</style>
