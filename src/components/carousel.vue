<template>
  <div
    id="shelterCarousel"
    class="carousel slide shelter-carousel mb-4"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        v-for="(slide, index) in slides"
        :key="slide.id"
        :data-target="'#shelterCarousel'"
        :data-slide-to="index"
        :class="{ active: index === 0 }"
      ></li>
    </ol>

    <div class="carousel-inner rounded-lg shadow-sm" role="listbox">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img class="d-block w-100 carousel-image" :src="slide.image" :alt="slide.title">
        <div class="carousel-caption d-none d-md-block text-left">
          <span class="badge badge-light px-3 py-2 mb-3">{{ slide.kicker }}</span>
          <h2 class="h3 font-weight-bold">{{ slide.title }}</h2>
          <p class="mb-0">{{ slide.text }}</p>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#shelterCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#shelterCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          kicker: 'Adoption ready',
          title: 'Browse dogs with cleaner, complete profiles',
          text: 'Each listing now includes age, intake date, size, and current shelter status.',
          image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
        },
        {
          id: 2,
          kicker: 'Favorites',
          title: 'Save the dogs you want to revisit',
          text: 'Favorites persist in local storage so your shortlist is still there on the next visit.',
          image: 'https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head.jpg',
        },
        {
          id: 3,
          kicker: 'Breed overview',
          title: 'Compare breeds before arranging a meet-and-greet',
          text: 'Use the breed filters to narrow the list and focus on the right fit for your home.',
          image: 'https://bioscint.com/wp-content/uploads/2021/08/Bernese-mountain-dog-grass.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.carousel-image {
  height: 380px;
  object-fit: cover;
  filter: brightness(0.72);
}

.carousel-caption {
  max-width: 460px;
}

@media (max-width: 767px) {
  .carousel-image {
    height: 240px;
  }
}
</style>
