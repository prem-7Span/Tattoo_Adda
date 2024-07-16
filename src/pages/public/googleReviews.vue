<template>
  <div class="w-full p-5 flex gap-5 justify-between">
    <div class="w-full bg-green-500">
      <div class="w-full p-5">
        <div class="card-parent p-5 bg-stone-100 max-w-72 rounded-xl border-2">
          <div class="img-text flex items-center gap-5">
            <div class="rounded-full h-24 w-24 overflow-hidden">
              <img src="../../assets/artists/IMG_0025.png" alt="" />
            </div>
            <div>
              <span class="font-bold text-xl"> Name:Test </span>
              <p>2 days ago</p>
            </div>
          </div>
          <div class="py-3">
            <span class="font-bold"> description: </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            dolorem debitis dolores laboriosam ratione, odio minima rem
            necessitatibus sunt optio eius! Laboriosam provident earum
            architecto quae, dignissimos rerum sapiente facilis?
          </div>
          <div class="img-text flex items-center gap-5">
            <div class="rounded-full h-20 w-20 overflow-hidden">
              <img src="../../assets/artists/jay.png" alt="" />
            </div>
            <div>
              <p>Posted on Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-parent p-5 bg-stone-100 max-w-72 rounded-xl border-2 mb-4"
    >
      <div class="img-text flex items-center gap-5">
        <div class="rounded-full h-24 w-24 overflow-hidden">
          <img :src="card.imgSrc" alt="" />
        </div>
        <div>
          <span class="font-bold text-xl"> Name: {{ card.name }} </span>
          <p>{{ card.timeAgo }}</p>
        </div>
      </div>
      <div class="py-3">
        <span class="font-bold"> description: </span>
        {{ card.description }}
      </div>
      <div class="img-text flex items-center gap-5">
        <div class="rounded-full h-20 w-20 overflow-hidden">
          <img :src="card.postedByImg" alt="" />
        </div>
        <div>
          <p>{{ card.postedBy }}</p>
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
      cards: [
        {
          imgSrc: "../../assets/artists/IMG_0025.png",
          name: "Test",
          timeAgo: "2 days ago",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorem debitis dolores laboriosam ratione, odio minima rem necessitatibus sunt optio eius! Laboriosam provident earum architecto quae, dignissimos rerum sapiente facilis?",
          postedByImg: "../../assets/artists/jay.png",
          postedBy: "Posted on Google Reviews",
        },
        {
          imgSrc: "../../assets/artists/IMG_0025.png",
          name: "Test",
          timeAgo: "2 days ago",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorem debitis dolores laboriosam ratione, odio minima rem necessitatibus sunt optio eius! Laboriosam provident earum architecto quae, dignissimos rerum sapiente facilis?",
          postedByImg: "../../assets/artists/jay.png",
          postedBy: "Posted on Google Reviews",
        },
        {
          imgSrc: "../../assets/artists/IMG_0025.png",
          name: "Test",
          timeAgo: "2 days ago",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorem debitis dolores laboriosam ratione, odio minima rem necessitatibus sunt optio eius! Laboriosam provident earum architecto quae, dignissimos rerum sapiente facilis?",
          postedByImg: "../../assets/artists/jay.png",
          postedBy: "Posted on Google Reviews",
        },
      ],
    });

    return {
      cards: state.cards,
    };
  },
};
</script>
