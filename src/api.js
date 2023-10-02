import axios from 'axios';

axios.defaults.baseURL = 'https://api.consumet.org/'

export async function fetchAnimeInfo(route) {
    try {
        const response = await axios.get("meta/anilist/info/"+ route.params.slug + "?provider=gogoanime" );
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

export async function fetchAnimeSlider() {
    try {
        const response = await axios.get('meta/anilist/popular?page=1&perPage=20');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

export async function fetchAnimeRandom() {
    try {
        const response = await axios.get('meta/anilist/random-anime', {
            headers: {
            "Cache-control": "no-cache"
        }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

export async function fetchAnimePlayer(route) {
    try {
        const response = await axios.get("anime/gogoanime/servers/" + route.params.slug);
        return response.data;
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
}

export async function fetchAnimeGrid(type, page = 1) {
    try {
        const response2 = await axios.get('https://api.consumet.org/meta/anilist/advanced-search?type=ANIME&genres=["'+ type +'"]&page='+ page +'&perPage=50');
        return response2.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}



