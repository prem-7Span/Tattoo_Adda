<template>
  <div class="container">
    <!-- Banner -->
    <homeBanner />

    <!-- personal-offer-section-->
    <OfferSection />

    <!-- minimal-tattoo-design -->
    <MinimalDesigns />

    <!-- gallery / best work -->
    <bestWork />

    <!-- About us/ Our artists -->
    <information />

    <!-- About us/ Our artists -->
    <Artists />

    <!-- Testimonials/Review -->
     <googleReviews/> 

    <!-- faq -->
    <faq />
  </div>
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
import googleReviews from "./googleReviews.vue"
import faq from "./faq.vue";

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
    googleReviews,
    faq,
  },
});
</script>
