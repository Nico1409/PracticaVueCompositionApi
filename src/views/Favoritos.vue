<script setup>
import { storeToRefs } from 'pinia';
import { ref } from "vue"
import { useFavoritoStore } from '../store/Favorito';
import Select from '../components/Select.vue';
import Modal from '../components/Modal.vue';
import { format, parseISO } from 'date-fns'


const useFavorito = useFavoritoStore();
const { favoritos } = storeToRefs(useFavorito)
const showModal = ref(false)
const pokemonFavName = ref('')
const pokemonFavDate = ref('')

function getDataModal(name) {
    pokemonFavName.value = name
    pokemonFavDate.value = format(parseISO('1999-12-05'), 'MM/dd/yyyy')
    showModal.value = true
}

function closeModal() {
    showModal.value = false
}

</script>

<template>
    <div class="h-full flex justify-center items-center">
        <div>
            <Select @update:selected="getDataModal" :selected="null" :options="favoritos"></Select>
        </div>

        <Modal v-if="showModal" @cancel="closeModal">
            <template v-slot:title>
                {{ pokemonFavName }}
            </template>
            <template v-slot:body>
                {{ pokemonFavDate }}
            </template>
        </Modal>
    </div>
</template>