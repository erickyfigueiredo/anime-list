<script setup>
import { useRoute } from 'vue-router';
import {fetchAnimePlayer} from '../api.js';
const route = useRoute()
import { ref, onMounted } from 'vue'

const responseData = ref(null);
let responseVideo = ref(null);
const myIframe = ref(null);

onMounted(async () => {
    try {
      responseData.value = await fetchAnimePlayer(route);
      getVideo(responseData.value[0].url);
    } catch (error) {
    console.error(error);
    }
})

function getVideo (episodeUrl) {
    responseVideo = episodeUrl;
    myIframe.value.src = responseVideo;
}

</script>

<template>
    <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-md p-5" v-if="responseData">
            <iframe
                class="mx-auto w-full"
                ref="myIframe"
                width="600"
                height="400"
                :src="responseVideo"
                frameborder="0"
                allowfullscreen
            ></iframe>
            <div class="mt-5">
                <h3 class="text-gray-600 text-xl font-semibold">Servers</h3>
                <button v-on:click="getVideo(players.url)" class="text-white-600 mt-2 mr-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200" v-for="players in responseData">{{ players.name }}</button>
            </div>
        </div>
    </div>
</template>