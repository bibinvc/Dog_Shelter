<template>
  <div class="container breed-page">
    <div class="breed-header shadow-sm">
      <div>
        <p class="text-uppercase text-muted small mb-2">Breed listing</p>
        <h1 class="mb-2">{{ category ? category.name : 'Breed not found' }}</h1>
        <p class="mb-0 text-muted">
          {{ category ? category.description : 'Return to the main listings to browse all dogs.' }}
        </p>
      </div>
      <router-link class="btn btn-outline-secondary mt-3 mt-md-0" to="/">
        Back to all dogs
      </router-link>
    </div>

    <div v-if="dogs.length" class="row mt-4">
      <div
        v-for="dog in dogs"
        :key="dog.id"
        class="col-md-6 col-xl-4 mb-4"
      >
        <dog-card :dog="dog" />
      </div>
    </div>

    <div v-else class="empty-state shadow-sm mt-4">
      No dogs are currently listed for this breed.
    </div>
  </div>
</template>

<script>
import DogCard from '@/components/DogCard.vue'

export default {
  components: {
    DogCard,
  },

  computed: {
    categoryId() {
      return Number(this.$route.params.id)
    },

    category() {
      return this.$store.getters['shelter/categoryById'](this.categoryId)
    },

    dogs() {
      return this.$store.getters['shelter/dogsByCategory'](this.categoryId)
    },
  },
}
</script>

<style scoped>
.breed-page {
  padding-top: 24px;
}

.breed-header {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.empty-state {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
}

@media (max-width: 767px) {
  .breed-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
