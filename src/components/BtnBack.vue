<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const back = () => {
    router.push('/pokemons')
}
</script>

<template>

    <button class="px-3  py-2 m-4 text-white rounded bg-green-600" @click="back">Volver</button>

</template>