<template>
  <!-- Banner -->
  <homeBanner />

  <!-- personal-offer-section-->
  <OfferSection />

  <!-- minimal-tattoo-design -->
  <MinimalDesigns />

  <!-- gallery / best work -->
  <bestWork />

  <!-- About us/ Our artists -->
  <Artists />

  <!-- About us/ Our artists -->
  <Information />

  <!-- Testimonials/Review -->
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import MinimalDesigns from "./minimal-designs.vue";
import OfferSection from "./offer-section.vue";
import bestWork from "./best-work.vue";
import homeBanner from "./home-banner.vue";
import Artists from "./artists.vue";
import information from "./information.vue";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    MinimalDesigns,
    OfferSection,
    bestWork,
    homeBanner,
    information,
    Artists,
  },
});
</script>
