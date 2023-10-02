<script setup>
import { ref, onMounted } from 'vue'
const scrollX = ref(0);
import {fetchAnimeSlider} from '../api.js';
const responseData = ref(null);

onMounted(async () => {
    try {
        responseData.value = await fetchAnimeSlider();
    } catch (error) {
    console.error(error);
    }
})

const handleLeftArrow = () => {
  let x = scrollX.value + Math.round(window.innerWidth / 2);
  if (x > 0) {
    x = 0;
  }
  scrollX.value = x;
};

const handleRightArrow = () => {
  let x = scrollX.value - Math.round(window.innerWidth / 2);
  const listW = responseData.value.results.length * 147;
  if (window.innerWidth - listW > x) {
    x = window.innerWidth - listW - 60;
  }
  scrollX.value = x;
};

</script>


<template>
  <div class="w-full overflow-hidden -mt-48">
      <div className="movieRow" v-if="responseData">
          <p class="text-left ml-2 mt-4">Popular</p>
        <div className="movieRow--left" v-on:click="handleLeftArrow()">
          <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;" />
        </div>
        <div className="movieRow--right" v-on:click="handleRightArrow()">
          <font-awesome-icon :icon="['fas', 'chevron-right']" style="color: #ffffff;" />
        </div>
        <div className="movieRow--listarea" :style="{ marginLeft: scrollX + 'px', width: responseData.results.length * 150 + 'px' }">
            <div className="movieRow--list">
                <div className="movieRow--items" >
                    <div className="movieRow--item" v-for="results2 in responseData.results" :key="results2.id">
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

.movieRow--left, .movieRow--right {
    position: absolute;
    width: 40px;
    height: 270px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
}

.movieRow--left {
    left: 0;
}

.movieRow--right {
    right: 0;
}

.movieRow:hover .movieRow--left,
.movieRow:hover .movieRow--right {
    opacity: 1;
}
@media (max-width: 760px) {
    .movieRow--left, .movieRow--right {
        opacity: 1;
    }
}

.movieRow--items {
    display: flex;          /* Exiba os elementos em uma única linha */
    overflow: hidden;     
}

.movieRow--item {
    flex: 0 0 auto;         /* Evite que os elementos forcem a quebra para a próxima linha */
}
</style>