<template>
  <div id="main-parent" class="w-full px-4 sm:px-10">
    <div class="flex items-center justify-between py-4">
      <div id="logo">
        <img
          src="/src/assets/default/tattoo-adda-logo.svg"
          alt="logo"
          class="max-w-28 sm:max-w-36"
        />
      </div>
      <div class="justify-between hidden gap-8 font-thin text-black sm:flex">
        <nav class="gap-3">
          <a href="" class="px-3 text-black">Home</a>
          <a href="" class="px-3 text-black">About</a>
          <a href="" class="px-3 text-black">Services</a>
          <a href="" class="px-3 text-black">Contacts</a>
          <a href="" class="px-3 text-black">FAQs</a>
          <a href="" class="px-3 text-black">Articles</a>
        </nav>
      </div>
      <div class="sm:hidden">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="sm:hidden">
      <nav class="flex flex-col gap-2 py-4">
        <a href="" class="px-3 py-2 text-black hover:bg-gray-100">Home</a>
        <a href="" class="px-3 py-2 text-black hover:bg-gray-100">About</a>
        <a href="" class="px-3 py-2 text-black hover:bg-gray-100">Services</a>
        <a href="" class="px-3 py-2 text-black hover:bg-gray-100">Contacts</a>
        <a href="" class="px-3 py-2 text-black hover:bg-gray-100">FAQs</a>
        <a href="" class="px-3 py-2 text-black hover:bg-gray-100">Articles</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>
