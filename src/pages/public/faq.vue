<template>
  <div class="max-w-full px-4 mx-auto my-10">
    <div class="text-center">
      <h1 class="mb-2 text-4xl font-bold">FAQs</h1>
      <h2 class="mb-6 text-xl">Frequently Asked Questions</h2>
    </div>
    <div class="space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border-b border-gray-200"
      >
        <button
          @click="toggleFaq(index)"
          class="flex items-center justify-between w-full py-4 text-left"
          :class="{ 'text-blue-600': openFaqIndex === index }"
        >
          <span class="font-medium">{{ faq.question }}</span>
          <svg
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'rotate-180': openFaqIndex === index }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-show="openFaqIndex === index" class="pb-4">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Can I pay for my tattoo in installments (EMI)?",
    answer: "Answer to EMI question goes here.",
  },
  {
    question: "How are touch-ups or follow-up sessions priced?",
    answer: "Answer about touch-ups pricing goes here.",
  },
  {
    question: "Is a deposit required for booking a tattoo session?",
    answer: "Answer about deposit requirement goes here.",
  },
  {
    question: "Is a deposit required for booking a tattoo session?",
    answer: "Answer about deposit requirement goes here.",
  },
  {
    question: "Is a deposit required for booking a tattoo session?",
    answer: "Answer about deposit requirement goes here.",
  },
]);

const openFaqIndex = ref(null);

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};
</script>
