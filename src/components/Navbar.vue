<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <nav class=" w-full fixed flex justify-between border-b border-black bg-slate-700">
    <div class="flex flex-row items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="text-2xl">PokeAPI</h1>
    </div>
    <div class="items-center flex gap-4 m-6 ">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pokemons">Pokemons</RouterLink>
      <RouterLink to="/favoritos">Favoritos</RouterLink>
    </div>
  </nav>

</template>