<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container">
      <router-link class="navbar-brand shelter-brand" to="/">Dog Shelter</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Available Dogs</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto align-items-lg-center">
          <li class="nav-item mr-lg-3">
            <span class="navbar-text text-light small">
              {{ totalDogs }} dogs across {{ categories.length }} breeds
            </span>
          </li>

          <li class="nav-item dropdown">
            <button
              id="favoritesMenu"
              class="btn btn-outline-light dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Favorites
              <span class="badge badge-danger ml-1">{{ favoriteCount }}</span>
            </button>
            <div class="dropdown-menu dropdown-menu-right favorites-menu" aria-labelledby="favoritesMenu">
              <div
                v-for="dog in favoritePreview"
                :key="dog.id"
                class="dropdown-item-text favorites-preview"
              >
                <strong>{{ dog.name }}</strong>
                <div class="small text-muted">{{ dog.breed }}</div>
              </div>

              <div v-if="!favoritePreview.length" class="dropdown-item-text text-muted small">
                No dogs saved yet.
              </div>

              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/favorites">Open favorites</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters['shelter/allCategories']
    },

    totalDogs() {
      return this.$store.getters['shelter/allDogs'].length
    },

    favoriteCount() {
      return this.$store.getters['favorites/favoriteCount']
    },

    favoritePreview() {
      return this.$store.getters['favorites/favoriteDogs'].slice(0, 3)
    },
  },
}
</script>

<style scoped>
.shelter-brand {
  font-weight: 700;
  letter-spacing: 0.04em;
}

.favorites-menu {
  min-width: 240px;
}

.favorites-preview + .favorites-preview {
  border-top: 1px solid #eef2f7;
}
</style>
