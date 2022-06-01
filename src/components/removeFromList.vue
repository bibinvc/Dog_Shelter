<template>
    <div>
        <button @click="removeFromList(productId)" type="button" class="btn btn-danger">X</button>
    </div>
</template>

<script>
export default {
    methods: {
        props: {
            productId: { default: null,}
        },

    removeFromList(id) {
      this.$store.dispatch('removeFromList', id)
      this.$toasted.success('Removed from List', {
        icon: 'block',
        position: 'top-right',
        duration: 3000
      })
    }
    }
}
</script>

