<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const pokemons = ref([])

async function getPokemons() {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
        pokemons.value = data.results
    } catch (err) {
        console.log(err)
    }
}
getPokemons()
</script>

<template>
    <div class="flex  justify-center h-full items-center">
        <ul class="grid grid-cols-5 gap-8">
            <li v-for="pokemon in pokemons" :key="pokemon.id" class="text-xl text-white  rounded justify-center flex bg-green-600">
                <RouterLink class="p-3" :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>