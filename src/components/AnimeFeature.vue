<script setup>

const props = defineProps({
    responseData: Object
})

</script>

<template>
<section class="featured bg-no-repeat" :style="{ backgroundImage: `url('${responseData.cover}')` }" v-if="responseData">
    <div class="featured--vertical">
        <div class="featured--horizontal">
            <div class="featured--name text-left">{{ responseData.title.romaji }}</div>
            <div class="featured--info text-left">
                <div class="featured--points">{{ responseData.popularity }} popularity</div>
                <div class="featured--year">{{ responseData.releaseDate }} year</div>
                <div class="featured--seasons">Total episodes: {{ responseData.totalEpisodes }}</div>
                <div class="featured--buttons">
                    <router-link :to="{ name: 'About', params: { slug: responseData.id }}" class="featured--watchbutton">▶ Watch</router-link>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.featured {
    height: 70vh;
    background-size: cover;
}

.featured--vertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%)
}

.featured--horizontal {
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
}

.featured--name {
    font-size: 60px;
    font-weight: bold;
}

.featured--info {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
}

.featured--points,
.featured--year,
.featured--seasons {
    display: inline-block;
    margin-right: 15px;
}

.featured--points {
    color: #46d369;
}

.featured--description {
    margin-top: 5px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
}

.featured--buttons {
    margin-top: 15px;

}

.featured--watchbutton {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
}

.featured--watchbutton:hover {
    opacity: 0.7;
}

.featured--watchbutton {
    background-color: #FFF;
    color: #111;
}

.featured--genres {
    margin-top: 20px;
    font-size: 18px;
    color: #999;
}

@media (max-width: 760px) {
    .featured {
        height: 90vh;
    }

    .featured--name {
        font-size: 40px;
    }

    .featured--info {
        font-size: 16px;
    }

    .featured--description {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }

    .featured--watchbutton{
        font-size: 16px;
    }

    .featured--genres {
        font-size: 14px;
    }
}
</style>
