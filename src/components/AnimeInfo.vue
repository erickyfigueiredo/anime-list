<script setup>

const props = defineProps({
  responseData: Object
})

</script>

<template>
<section class="featured" :style="{ backgroundImage: `url('${responseData.cover}')` }" v-if="responseData">
    <div class="featured--vertical">
        <div class="featured--horizontal">
        </div>
    </div>
</section>
    <div class="container mx-auto px-4">
        <div class="mx-auto bg-white rounded-lg shadow-md p-5" v-if="responseData">
            <img class="w-64 h-64 -mt-32 rounded" :src="responseData.image" alt="Profile picture">
            <h2 class="text-center text-gray-600 -mt-32 text-2xl font-semibold mt-3">{{ responseData.title.romaji}}</h2>
            <hr class="w-48 h-1 mt-1 mb-5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700">
            <p class="text-center text-gray-600 mt-1">Total Episodes: {{ responseData.totalEpisodes }}</p>
            <div class="flexjustify-center mt-5"> 
                <a class="text-blue-500 mr-2" v-for="results in responseData.genres"> {{ results }}</a>
            </div>
            <div class="mt-10 flex wrap">
              <div class="w-1/2">
                <h3 class="text-gray-600 text-xl font-semibold">Sinopse</h3>
                <hr class="w-48 h-1 mt-1 mb-5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700">
                <p v-html="responseData.description" class="text-gray-600 mt-2"></p>
              </div>
              <div class="w-1/2">
                <h3 class="text-gray-600 text-xl font-semibold">Episodes</h3>
                <hr class="w-48 h-1 mt-1 mb-5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700">
                <div class="overflow-y-auto h-80">
                  <div v-for="episodes in responseData.episodes" >
                    <router-link class="text-gray-600 mt-2"  :to="{ name: 'Player', params: { slug: episodes.id }}">ep: {{ episodes.number }}</router-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.featured {
    height: 50vh;
}

.featured--vertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%)
}

.featured--horizontal {
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 1%, transparent 10%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
}

@media (max-width: 760px) {
    .featured {
        height: 30vh;
    }
}
</style>
