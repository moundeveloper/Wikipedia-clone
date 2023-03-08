<script setup>
const props = defineProps({
    searchTopic: String,
});
const wikiSearchResults = ref({})
const runtime = useRuntimeConfig()

const { data } = await useFetch(`${runtime.public.baseUrl}/search_results?search_topic=${props.searchTopic}`)

wikiSearchResults.value = data._rawValue
const wikiSearchResultsLength = ref(wikiSearchResults.value.length)

</script>

<template>
    <div class="search-result-wraper">
        <h1>Risultati per {{ props.searchTopic }} : {{ wikiSearchResultsLength }} </h1>

        <div class="results" v-if="wikiSearchResultsLength">
            <NuxtLink v-for="item in wikiSearchResults" class="topic-link" :to="`/result/${item}`">{{ item }}</NuxtLink>
        </div>
        <div v-else class="fallback">
            <img src="https://em-content.zobj.net/source/microsoft-teams/337/ghost_1f47b.png" alt="">
            <span>Niente risulati per te ahahahaha!</span>
            <span class="big-love">🫶</span>
        </div>
    </div>
</template>

<style scoped>
h1 {
    margin-bottom: 3rem;
    font-size: clamp(1rem, 2.5vw, 3rem);
    color: var(--secondary-color);
}

.search-result-wraper,
.results {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search-result-wraper {
    padding: 2rem 0;
}


.results>* {
    margin: 1rem 0;
}


.fallback {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-size: clamp(1rem, 2.5vw, 3rem);
}

.fallback img {
    max-width: 15rem;
}


.topic-link {
    text-decoration: none;
    color: var(--secondary-color);
    border-radius: .5rem;
    border: 1px solid var(--secondary-color);
    width: fit-content;
    cursor: pointer;
    padding: .5rem 1rem;
    transition: color, background-color .5s;
}

.topic-link:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
}

span {
    color: var(--secondary-color);
}

.big-love {
    font-size: 5rem;
}
</style>
