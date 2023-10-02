<script setup>
import AnimeSlider from '../components/AnimeSlider.vue'
import AnimeFeature from '../components/AnimeFeature.vue'
import {fetchAnimeRandom} from '../api.js';
import {ref, onMounted} from 'vue';

const responseFeature = ref(null);

onMounted(async () => {
    try {
        responseFeature.value = await fetchAnimeRandom();
    } catch (error) {
    console.error(error);
    }
})

</script>
<template>
    <div class="home">
        <AnimeFeature :response-data="responseFeature"></AnimeFeature>
        <AnimeSlider/>
    </div>
</template>