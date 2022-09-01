<script setup>

defineProps({
    data: {
        type: Object,
        required: true,
    }
})

</script>

<template>

    <div class="flex flex-col gap-4">
        <h2 class="text-lg">Nombre pokemon : {{ data.name }}</h2>
        <h2 class="flex flex-row gap-2 items-center text-lg">Tipo :
            <p v-for="labels in data.types" :key="labels.id" class="border rounded p-1" >
                {{ labels.type.name }}
            </p>
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