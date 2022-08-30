<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template >
  <div class="h-full bg-gray-700">

    <Navbar />

    <RouterView class="h-full" />
  </div>
</template>


