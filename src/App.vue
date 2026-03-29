<template>
  <div id="app">
    <app-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './layouts/header.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
  },

  created() {
    this.$store.dispatch('favorites/loadFavorites')
  },
}
</script>

<style>
body {
  padding-top: 72px;
  background: #f5f7fb;
  color: #243447;
}

a {
  color: #0b7285;
}

a:hover {
  color: #075985;
}

main {
  min-height: calc(100vh - 72px);
  padding-bottom: 48px;
}
</style>
