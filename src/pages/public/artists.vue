<template>
  <div class="px-4 my-6 sm:my-10 sm:px-0">
    <div>
      <div class="flex items-center justify-center">
        <h2 class="mb-6 text-2xl text-center sm:mb-10 sm:text-3xl">
          Our Artists
        </h2>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="artist in state.artists"
          :key="artist.name"
          class="flex flex-col items-center"
        >
          <img
            :src="artist.image"
            :alt="artist.name"
            class="object-cover pb-3 mb-2 rounded-full w-36 h-36 sm:w-48 sm:h-48"
          />
          <h3 class="text-base font-semibold text-center sm:text-lg">
            {{ artist.name }}
          </h3>
          <h3 class="text-sm text-center sm:text-md">{{ artist.title }}</h3>
          <button
            class="px-8 py-2 my-4 text-sm border-2 border-blue-700 rounded-lg sm:px-12 sm:py-3 sm:my-8 sm:text-base"
            @click="$router.push({ name: artist.url })"
          >
            Portfolio
          </button>
        </div>
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
          url: "hemal",
        },
        {
          name: "Jay",
          title: "(Portrait Specialist)",
          image: "public/artists/jay.jpg",
          url: "jay",
        },
        {
          name: "Milan",
          title: "(LineArt Specialist) ",
          image: "public/artists/milan.jpg",
          url: "milan",
        },
        {
          name: "Mishal",
          title: "(Designer) ",
          image: "public/artists/mishal.jpg",
          url: "mishal",
        },
        {
          name: "Parth",
          title: "(Art School Artist) ",
          image: "public/artists/parth.jpg",
          url: "parth",
        },
      ],
    });

    return {
      state,
    };
  },
};
</script>
