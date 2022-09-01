<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function returnPokemons() {
    router.push('/pokemons')
}
</script>

<template>

    <button class="px-3  py-2 m-4 text-white rounded bg-green-600" @click="returnPokemons">Volver</button>

</template>