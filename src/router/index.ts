import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Albums from "../views/Albums.vue";
import Info from "../views/Info.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/albums",
      name: "albums",
      component: Albums
    },
    {
      path: "/info",
      name: "info",
      component: Info
    }
  ]
})

export default router
