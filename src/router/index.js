import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../views/ChoosePokemon.vue"),
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: () => import("../views/Favoritos.vue"),
    },
    {
      path: "/pokemons/:name",
      name: "pokemon",
      component: () => import("../views/InfoPokemon.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
