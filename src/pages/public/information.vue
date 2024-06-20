<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:flex-row">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="mx-4 mb-8 md:mb-0"
      >
        <div class="w-64 p-6 bg-white rounded-lg shadow-lg">
          <h3 class="mb-2 text-xl font-bold">{{ step.title }}</h3>
          <p class="mb-4 text-gray-700">{{ step.description }}</p>
          <button
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            {{ step.buttonText }}
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
    const steps = reactive([
      {
        title: "Consultation from wherever you are",
        description:
          "Schedule your consultation from any part of the world, be it online or in-person.",
        buttonText: "Book a free consultation",
      },
      {
        title: "Custom designing your tattoo",
        description:
          "After our detailed consultation, your custom tattoo design will be crafted with precision to perfection.",
        buttonText: "Get a custom design",
      },
      {
        title: "Get your tattoo design inked",
        description:
          "Your tattoo will be brought to life with state-of-the-art equipment and medical-grade hygiene protocols.",
        buttonText: "Let get started",
      },
    ]);

    return {
      steps,
    };
  },
};
</script>
