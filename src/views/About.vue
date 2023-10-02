<script setup>
import AnimeInfo from '../components/AnimeInfo.vue';
import {fetchAnimeInfo} from '../api.js';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
const route = useRoute()

const responseData = ref(null);

onMounted(async () => {
    try {
    responseData.value = await fetchAnimeInfo(route);
    } catch (error) {
    console.error(error);
    }
})

</script>

<template>
    <div class="about">
        <AnimeInfo :response-data="responseData"/>
    </div>
</template>