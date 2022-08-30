import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../views/PokemonsView.vue"),
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: () => import("../views/FavView.vue"),
    },
    {
      path: "/pokemons/:name",
      name: "pokemon",
      component: () => import("../views/PokeView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
