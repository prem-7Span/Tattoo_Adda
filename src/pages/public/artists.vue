<template>
  <div>
    <h2 class="mb-10 text-3xl">Our Artists</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="artist in state.artists"
        :key="artist.name"
        class="flex flex-col items-center"
      >
        <img
          :src="artist.image"
          :alt="artist.name"
          class="object-cover w-48 h-48 pb-3 mb-2 rounded-full"
        />
        <h3 class="text-lg font-semibold">{{ artist.name }}</h3>
        <h3 class="text-md">{{ artist.title }}</h3>
        <button class="px-4 py-2 my-2 border-2 border-blue-700 rounded-lg">
          Portfolio
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      artists: [
        {
          name: "Hemal Barot",
          title: "(Founder)",
          image: "public/artists/hemal.jpg",
        },
        {
          name: "Jay",
          title: "",
          image: "public/artists/jay.jpg",
        },
        {
          name: "Milan",
          image: "public/artists/milan.jpg",
        },
        {
          name: "Mishal",
          image: "public/artists/mishal.jpg",
        },
        {
          name: "Parth",
          image: "public/artists/parth.jpg",
        },
      ],
    });

    return {
      state,
    };
  },
};
</script>
