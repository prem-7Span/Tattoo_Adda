<template>
  <div class="px-4 sm:px-0">
    <div class="mb-6 sm:mb-10">
      <Carousel :autoplay="2000" :wrap-around="true">
        <Slide
          v-for="slide in 1"
          :key="slide"
          class="rounded-xl sm:rounded-3xl"
        >
          <div class="max-w-full carousel__item rounded-xl sm:rounded-3xl">
            <img
              src="/src/assets/home-banner/banner-1.png"
              alt=""
              class="w-full h-auto"
            />
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item rounded-xl sm:rounded-3xl">
            <img
              src="/src/assets/home-banner/banner-2.png"
              alt=""
              class="w-full h-auto"
            />
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item rounded-xl sm:rounded-3xl">
            <img
              src="/src/assets/home-banner/banner-3.png"
              alt=""
              class="w-full h-auto"
            />
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="grid text-center place-items-center">
      <h2
        class="px-4 pt-6 pb-4 font-mono text-xl font-bold sm:pt-10 sm:text-2xl"
      >
        Let's craft your masterpiece together
      </h2>
      <div class="py-3">
        <button
          class="px-8 py-3 text-sm text-white bg-blue-800 rounded-lg sm:px-16 sm:py-4 sm:text-md"
        >
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
