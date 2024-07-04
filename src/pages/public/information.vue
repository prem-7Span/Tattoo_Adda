<template>
  <div class="items-center text-center">
    <p class="text-3xl">Steps To Get Perfect Tattoo</p>
  </div>
  <div class="flex justify-between my-10">
    <div class="flex flex-col md:flex-row">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="mx-4 mb-8 md:mb-0"
      >
        <div
          class="flex flex-col items-center justify-center w-full p-6 py-10 bg-white border-2 border-blue-800 rounded-lg shadow-lg"
        >
          <h3 class="mb-4 text-xl font-bold text-center">{{ step.title }}</h3>
          <p class="mb-12 text-center text-gray-700">{{ step.description }}</p>
          <button class="px-8 py-3 mx-auto border-2 border-blue-800">
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
        title: "Global Consultation Services",
        description:
          "Experience the convenience of scheduling your personalized tattoo consultation from anywhere in the world. Choose between our seamless online video sessions or in-person meetings at our studio, tailored to your preference and location.",
        buttonText: "Schedule Your Consultation",
      },
      {
        title: "Bespoke Tattoo Design Creation",
        description:
          "Following our comprehensive consultation, our skilled artists will meticulously craft your custom tattoo design. We iterate based on your feedback, ensuring every detail aligns perfectly with your vision and personal aesthetic.",
        buttonText: "Get Your Custom Design",
      },
      {
        title: "Professional Tattoo Application",
        description:
          "Bring your unique design to life in our state-of-the-art studio. Our expert artists use cutting-edge equipment and adhere to stringent medical-grade hygiene protocols, ensuring a safe, comfortable, and high-quality tattooing experience.",
        buttonText: "Initiate Your Tattoo Journey",
      },
    ]);

    return {
      steps,
    };
  },
};
</script>
