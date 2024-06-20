<template>
  <div>
    <div>
      <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="slide in 1" :key="slide" class="rounded-3xl">
          <div class="max-w-full carousel__item max-h-80 rounded-3xl"></div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item max-h-80 rounded-3xl"></div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="pt-10 pb-4 font-mono text-2xl font-bold">
      Let's craft your masterpiece together
    </div>
    <div class="py-3">
      <button class="px-16 py-4 text-white bg-blue-800 text-md">
        Book Appointment
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
});
</script>
