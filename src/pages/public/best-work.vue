<template>
  <div id="main-parent">
    <div id="main-container" class="my-10">
      <div>
        <div class="items-center text-center">
          <p class="py-10 text-3xl">Check Our Best Work</p>
        </div>
        <div class="max-h-96">
          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in 10" :key="slide" class="gap-2 rounded-lg">
              <div class="carousel__item">
                <img
                  src="/src/assets/best-work/best-1.jpg"
                  alt="best-work-1"
                  class="rounded-3xl"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/src/assets/best-work/best-2.jpg"
                  alt="best-work-1"
                  class="rounded-3xl"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/src/assets/best-work/best-3.jpg"
                  alt="best-work-1"
                  class="rounded-3xl"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/src/assets/best-work/best-4.jpg"
                  alt="best-work-1"
                  class="rounded-3xl"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/src/assets/best-work/best-5.jpg"
                  alt="best-work-1"
                  class="rounded-3xl"
                />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div class="flex items-center justify-center py-8">
          <button class="px-8 py-3 border-2 border-blue-800">More Work</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>
