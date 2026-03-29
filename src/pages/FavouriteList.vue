<template>
  <div class="container favorites-page">
    <div class="favorites-header shadow-sm">
      <div>
        <p class="text-uppercase text-muted small mb-2">Saved dogs</p>
        <h1 class="mb-2">Favorites</h1>
        <p class="mb-0 text-muted">
          Keep a shortlist of dogs you want to revisit before booking a meet-and-greet.
        </p>
      </div>
      <router-link class="btn btn-outline-secondary mt-3 mt-md-0" to="/">
        Back to listings
      </router-link>
    </div>

    <div v-if="favoriteDogs.length" class="row mt-4">
      <div
        v-for="dog in favoriteDogs"
        :key="dog.id"
        class="col-lg-6 mb-4"
      >
        <article class="card h-100 border-0 shadow-sm favorite-card">
          <div class="row no-gutters h-100">
            <div class="col-sm-4">
              <img class="favorite-image" :src="dog.image" :alt="`${dog.name} the ${dog.breed}`">
            </div>
            <div class="col-sm-8">
              <div class="card-body d-flex flex-column h-100">
                <span class="badge badge-light align-self-start">{{ dog.status }}</span>
                <h2 class="h5 mt-3 mb-1">{{ dog.name }}</h2>
                <p class="text-muted mb-3">{{ dog.breed }} · {{ formatAge(dog.birthDate) }}</p>
                <p class="card-text flex-grow-1">{{ dog.description }}</p>
                <ul class="list-unstyled text-muted small mb-4">
                  <li><strong>Registered:</strong> {{ formatDate(dog.registrationDate) }}</li>
                  <li><strong>Size:</strong> {{ dog.size }}</li>
                  <li><strong>Sex:</strong> {{ dog.sex }}</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-outline-danger align-self-start"
                  @click="removeFavorite(dog.id)"
                >
                  Remove from favorites
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div v-else class="empty-state shadow-sm mt-4">
      No favorites saved yet. Use the listing page to add dogs to your shortlist.
    </div>
  </div>
</template>

<script>
import { formatAge, formatDate } from '@/utils/formatters'

export default {
  computed: {
    favoriteDogs() {
      return this.$store.getters['favorites/favoriteDogs']
    },
  },

  methods: {
    formatAge,
    formatDate,

    removeFavorite(dogId) {
      this.$store.dispatch('favorites/removeFavorite', dogId)
    },
  },
}
</script>

<style scoped>
.favorites-page {
  padding-top: 24px;
}

.favorites-header {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.favorite-card {
  border-radius: 16px;
  overflow: hidden;
}

.favorite-image {
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
}

.empty-state {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
}

@media (max-width: 767px) {
  .favorites-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
