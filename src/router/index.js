import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test1",
      name: "test1",
      component: () => import("../example/test1.vue"),
    },
    {
      path: "/test2",
      name: "test2",
      component: () => import("../example/test2.vue"),
    },
  ],
});

export default router;
