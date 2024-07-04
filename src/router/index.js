import { createRouter, createWebHashHistory } from "vue-router";
import Default from "../layouts/default.vue";
import HomePage from "../pages/public/home-page.vue";
import MinimalDesign from "../pages/public/minimal-designs.vue";
import Hemal from "../pages/public/artists/hemal.vue";
import Mishal from "../pages/public/artists/mishal.vue";
import Jay from "../pages/public/artists/jay.vue";
import Milan from "../pages/public/artists/milan.vue";
import Parth from "../pages/public/artists/parth.vue";

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        name: "HomePage",
        path: "",
        component: HomePage,
      },
      // {
      //   name: "MinimalDesign",
      //   path: "minimal-designs",
      //   component: MinimalDesign,
      // },
      {
        path: "/hemal",
        name: "hemal",
        component: Hemal,
      },
      {
        path: "/mishal",
        name: "mishal",
        component: Mishal,
      },
      {
        path: "/jay",
        name: "jay",
        component: Jay,
      },
      {
        path: "/milan",
        name: "milan",
        component: Milan,
      },
      {
        path: "/parth",
        name: "parth",
        component: Parth,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
