import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritoStore = defineStore("favorito", () => {
  const favoritos = ref([]);

  const add = (id) => {
    favoritos.value.push(id);
    console.log(favoritos.value);
  };

  const disabledBtn = (item) => {
    if (favoritos.value.find((element) => element.id == item.id)) {
      return "true";
    }
  };

  return {
    favoritos,
    add,
    disabledBtn,
  };
});
