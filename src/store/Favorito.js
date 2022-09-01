import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritoStore = defineStore("favorito", () => {
  const favoritos = ref([]);
  const index = ref(0);

  function add(name) {
    favoritos.value.push({
      value: name,
      text: name,
      fecha: "1999-12-05",
      id: index.value++,
    });
  }

  function disabledBtn(item) {
    if (favoritos.value.find((element) => element.value == item)) {
      return "true";
    }
  }

  return {
    favoritos,
    add,
    disabledBtn,
  };
});
