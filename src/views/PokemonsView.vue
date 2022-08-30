<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";
const pokemons = ref([])

const getPokemons = async () => {
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
            <li class="text-xl text-white  rounded justify-center flex bg-green-600" v-for="pokemon in pokemons">
                <RouterLink class="p-3" :to="`/pokemons/${pokemon.name}`">{{  pokemon.name  }}</RouterLink>
            </li>
        </ul>
    </div>
</template>