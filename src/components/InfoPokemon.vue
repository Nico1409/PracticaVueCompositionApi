<script setup>

defineProps(['data'])

</script>

<template>

    <div class="flex flex-col gap-4">
        <h2 class="text-lg">Nombre pokemon : {{  $route.params.name  }}</h2>
        <h2 class="flex flex-row gap-2 items-center text-lg">Tipo : <p class="border rounded p-1"
                v-for="tipo in data.types">{{  tipo.type.name  }} </p>
        </h2>
        <div class="flex flex-row">
            <img :src="data.sprites?.front_default" alt="" />
            <img :src="data.sprites?.front_shiny" alt="" />
        </div>
    </div>

</template>

<style scoped>
img {
    height: 200px;
    width: 200px;
}
</style>