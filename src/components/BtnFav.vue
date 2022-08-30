<script setup>
import { useFavoritoStore } from '../store/Favorito';

defineProps(['data'])

const useFavorito = useFavoritoStore()
const { add, disabledBtn } = useFavorito

</script>

<template>

    <button :disabled="disabledBtn(data)" class="px-3 py-2 m-4 text-white rounded bg-yellow-600"
        @click="add(data)">Favorito</button>

</template>