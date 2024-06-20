<template>
  <!-- Banner -->
  <div>
    <div>
      <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="slide in 1" :key="slide" class="rounded-3xl">
          <div class="max-w-full carousel__item max-h-80 rounded-3xl">
            <img
              src="/src/assets/Images/banner-1.png"
              alt=""
              class="rounded-3xl"
            />
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item max-h-80 rounded-3xl">
            <img
              src="/src/assets/Images/banner-2.png"
              alt=""
              class="rounded-3xl"
            />
          </div>
        </Slide>

        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item max-h-80 rounded-3xl">
            <img
              src="/src/assets/Images/banner-3.png"
              alt=""
              class="rounded-3xl"
            />
          </div>
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

  <div id="main-parent" class="container">
    <div
      id="main-container"
      class="flex items-center justify-center max-h-screen gap-24 pt-16"
    >
      <div id="container-1">
        <div class="text-5xl italic tracking-wider">
          <p class="">GET</p>
          <div class="flex">
            <p class="font-bold text-blue-800 text-7xl">50% OFF</p>
            <p class="text-blue-800">*</p>
          </div>
          <p>on ANY TATTOO</p>
        </div>
        <div class="py-10">
          <button class="border-2 border-blue-800">Check Offers!</button>
        </div>
      </div>
      <div id="container-2" class="">
        <div class="">
          <img
            src="/src/assets/Images/Girl with the old school tattoos - Carol Csan _ iNKPPL.jpeg"
            alt="home-banner"
            class="max-w-lg max-h-96 rounded-3xl"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- minimal-tattoo-design -->

  <div id="main-parent">
    <div id="main-container" class="flex items-end justify-center gap-20 py-10">
      <div
        id="container-1"
        class="flex flex-col items-center justify-center py-4 text-white bg-blue-800 rounded-3xl border-3"
      >
        <div class="flex items-center justify-center px-4">
          <p class="py-3 text-base font-bold text-white max-w-36">
            Minimal Tattoo Designs
          </p>
          <p class="text-4xl italic font-bold">Rs. 1299</p>
        </div>
        <div class="">
          <img
            src="/src/assets/Images/minimal-tattoo.jpeg"
            alt="minimal-tattoo"
            class="items-center max-w-96 rounded-3xl max-h-80"
          />
        </div>
      </div>
      <div
        id="container-2"
        class="flex flex-col px-6 py-6 space-y-8 bg-transparent border-2 border-blue-800 rounded-3xl max-w-96 max-h-80"
      >
        <p class="text-4xl">130+ flash tattoos for you, starts at</p>
        <p class="text-5xl italic font-bold text-blue-800">Rs.1299</p>
        <button class="py-3 border-2 border-blue-800">See Designs</button>
      </div>
    </div>
  </div>

  <!-- gallery / best work -->

  <div id="main-parent">
    <div id="main-container" class="py-10">
      <div>
        <p class="py-10 text-3xl">Check Our Best Work</p>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide" class="gap-2 rounded-lg">
            <div class="carousel__item">
              <img
                src="/src/assets/Images/tattoo-1.jpeg"
                alt=""
                class="rounded-3xl"
              />
            </div>
            <div class="carousel__item">
              <img
                src="/src/assets/Images/tattoo-2.jpeg"
                alt=""
                class="rounded-3xl"
              />
            </div>
            <div class="carousel__item">
              <img
                src="/src/assets/Images/tattoo-3.jpeg"
                alt=""
                class="rounded-3xl"
              />
            </div>
            <div class="carousel__item">
              <img
                src="/src/assets/Images/tattoo-4.jpeg"
                alt=""
                class="rounded-3xl"
              />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div class="py-8">
          <button class="px-8 py-3 border-2 border-blue-800">More Work</button>
        </div>
      </div>
    </div>
  </div>

  <!-- About us/ Our artists -->

  <!-- <div id="main-parent">
    <div id="main-container">
      <div id="card-1">
        <div
          class="items-center justify-center text-center bg-gray-600 rounded-full max-w-64 max-h-64"
        >
          <div class="flex items-center">
            <img
              src="/src/assets/Images/artist.png"
              alt=""
              class="max-w-60 max-h-60"
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- Testimonials/Review -->

  <div id="main-parent">
    <div id="main-container">
      <div>
        <div class="py-10">
          <p class="text-3xl">10,000+ have found their perfect ink with</p>
          <p class="text-3xl font-bold">TATTOO ADDA'S premium work.</p>
        </div>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide" class="gap-2 rounded-lg">
            <div class="carousel__item">
              <img
                src="/src/assets/Images/testimonial-1.png"
                alt=""
                class="rounded-3xl"
              />
            </div>
            <div class="carousel__item">
              <img
                src="/src/assets/Images/testimonial-1.png"
                alt=""
                class="rounded-3xl"
              />
            </div>
            <div class="carousel__item">
              <img
                src="/src/assets/Images/testimonial-1.png"
                alt=""
                class="rounded-3xl"
              />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>
