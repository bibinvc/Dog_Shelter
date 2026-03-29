<template>
  <button
    type="button"
    class="btn btn-block"
    :class="isFavorite ? 'btn-outline-danger' : 'btn-danger'"
    @click="toggleFavorite"
  >
    {{ isFavorite ? 'Remove from favorites' : 'Save to favorites' }}
  </button>
</template>

<script>
export default {
  props: {
    dogId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isFavorite() {
      return this.$store.getters['favorites/isFavorite'](this.dogId)
    },
  },

  methods: {
    toggleFavorite() {
      const action = this.isFavorite ? 'favorites/removeFavorite' : 'favorites/addFavorite'
      this.$store.dispatch(action, this.dogId)
    },
  },
}
</script>
