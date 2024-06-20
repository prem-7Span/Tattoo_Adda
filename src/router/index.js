import { createRouter, createWebHashHistory } from "vue-router";
import Default from "../layouts/default.vue";
import HomePage from "../pages/public/home-page.vue";
import MinimalDesign from "../pages/public/minimal-designs.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
