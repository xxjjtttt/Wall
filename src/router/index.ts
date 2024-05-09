import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import HomeLayout from "@/layout/HomeLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-layout",
      component: HomeLayout,
      children: [
        {
          path: "",
          name: "home-view",
          component: HomeView
        }
      ]
    }
  ]
})

export default router
