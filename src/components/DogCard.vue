<template>
  <article class="card h-100 border-0 shadow-sm dog-card">
    <img class="card-img-top dog-image" :src="dog.image" :alt="`${dog.name} the ${dog.breed}`">

    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h3 class="h5 mb-1">{{ dog.name }}</h3>
          <router-link class="small text-muted breed-link" :to="breedLink">
            {{ dog.breed }}
          </router-link>
        </div>
        <span class="badge badge-light status-badge">{{ dog.status }}</span>
      </div>

      <ul class="list-unstyled text-muted small mb-3">
        <li><strong>Age:</strong> {{ age }}</li>
        <li><strong>Registered:</strong> {{ registrationDate }}</li>
        <li><strong>Size:</strong> {{ dog.size }}</li>
        <li><strong>Sex:</strong> {{ dog.sex }}</li>
      </ul>

      <p class="card-text flex-grow-1">{{ dog.description }}</p>

      <favorite-button :dog-id="dog.id" />
    </div>
  </article>
</template>

<script>
import FavoriteButton from './FavoriteButton.vue'
import { formatAge, formatDate } from '../utils/formatters'

export default {
  components: {
    FavoriteButton,
  },

  props: {
    dog: {
      type: Object,
      required: true,
    },
  },

  computed: {
    age() {
      return formatAge(this.dog.birthDate)
    },

    registrationDate() {
      return formatDate(this.dog.registrationDate)
    },

    breedLink() {
      const category = this.$store.getters['shelter/categoryById'](this.dog.categoryId)
      return category
        ? { name: 'breed', params: { slug: category.slug, id: category.id } }
        : { name: 'home' }
    },
  },
}
</script>

<style scoped>
.dog-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.dog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 1rem 2.5rem rgba(15, 23, 42, 0.1);
}

.dog-image {
  height: 240px;
  object-fit: cover;
}

.breed-link {
  text-decoration: none;
}

.status-badge {
  max-width: 130px;
  white-space: normal;
  text-align: right;
}
</style>
