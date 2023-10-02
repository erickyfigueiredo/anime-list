<script setup>
import {ref, onMounted} from 'vue';
import {fetchAnimeGrid} from '../api.js';

const responseRecent = ref(null);
const arrayGenres = ["Action", "Adventure", "Cars", "Comedy", "Drama", "Fantasy", "Horror", "Mahou Shoujo",
"Mecha", "Music", "Mystery", "Psychological", "Romance", "Sci-Fi", "Slice of Life", "Sports", "Supernatural", "Thriller"]

const getAnime = async (genre) => {
  try {
    responseRecent.value = await fetchAnimeGrid(genre);
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
    try {
        responseRecent.value = await fetchAnimeGrid('Action');
    } catch (error) {
    console.error(error);
    }
})

</script>

<template>
    <div class="mt-10">
        <button v-on:click="getAnime(genres)" v-for="genres in arrayGenres" class="px-3 py-2 text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">{{genres}}</button>
    </div>
    <div class="w-full -mt-52">
      <div className="movieRow" v-if="responseRecent">
        <div className="movieRow--listarea">
            <div className="movieRow--list">
                <div className="movieRow--items">
                    <div className="movieRow--item" v-for="results2 in responseRecent.results">
                        <router-link :to="{ name: 'About', params: { slug: results2.id }}">
                            <img class="md:h-60 md:w-100" :src="results2.image" :alt="results2.title.romaji">
                            <p className='text-white font-bold p-2 truncate'>{{results2.title.romaji}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.movieRow {
    margin-bottom: 30px;
    margin-top: 250px;
}

.movieRow h2 {
    margin: 0px 0px 0px 30px;
}

.movieRow--listarea {
    overflow-x: hidden;
    transition: all ease 0.5s;
}

.movieRow--list {
    transition: all ease 0.5s;
}

.movieRow--item {
    display: inline-block;
    width: 150px;
    cursor: pointer;
}

.movieRow--item img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
}

.movieRow--item img:hover {
    transform: scale(1);
}


@media (max-width: 760px) {
    .movieRow--left, .movieRow--right {
        opacity: 1;
    }
}

.movieRow--items {
}

.movieRow--item {
    flex: 0 0 auto;         /* Evite que os elementos forcem a quebra para a próxima linha */
}

</style>