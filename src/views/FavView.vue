<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritoStore } from '../store/Favorito';

const useFavorito = useFavoritoStore();
const { favoritos } = storeToRefs(useFavorito)


</script>

<template>
    <div class="h-full flex justify-center items-center">
        <ul>
            <li v-for="favorito in favoritos" :key="favorito.id"> {{ favorito.name }} </li>
        </ul>
    </div>
</template>