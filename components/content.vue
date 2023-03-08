<script setup>
const wikiInfo = ref({})
const unsplashImgs = ref({})
const route = useRoute()
const runtime = useRuntimeConfig()

if (process.client) {
    const historyItems = JSON.parse(localStorage.getItem("history"))
    console.log(historyItems)
    const itemToUpdate = historyItems.findIndex(item => route.params.search_topic.toLowerCase() === item.topic.toLowerCase())
    console.log(itemToUpdate)
    if (itemToUpdate > -1) {
        historyItems[itemToUpdate].lastSearch = new Date().toLocaleString()
        historyItems[itemToUpdate].visits += 1
    } else {
        historyItems.push({
            topic: route.params.search_topic,
            lastSearch: new Date().toLocaleString(),
            visits: 1
        })
    }

    localStorage.setItem("history", JSON.stringify(historyItems))

}


const contentData = await useFetch(`${runtime.public.baseUrl}?search_topic=${route.params.search_topic}`).then((res) => res.data)
    .catch((error) => console.error(error));
const imgData = await useFetch(`${runtime.public.baseUrl}/img?search_topic=${route.params.search_topic}`).then((res) => res.data)
    .catch((error) => console.error(error));

wikiInfo.value = contentData._rawValue
unsplashImgs.value = imgData._rawValue

function scrollToItem(index) {
    const itemId = `${index}`;
    const item = document.getElementById(itemId);
    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
</script>

<template>
    <div class="content-wraper">
        <img v-if="unsplashImgs.imgUrl" v-bind:src="unsplashImgs.imgUrl" alt="" class="banner">
        <h2 class="error-not-found" v-if="wikiInfo.errore">{{ wikiInfo.errore }}</h2>
        <h1 class="error-404 error-not-found" v-if="wikiInfo.errore">404</h1>
        <article v-if="!wikiInfo.errore">
            <h1>{{ wikiInfo.header }}</h1>
            <h3 v-if="wikiInfo.quote">“{{ wikiInfo.quote }}“</h3>
            <p v-for="item in wikiInfo.preContent">
                {{ item }}
            </p>
            <div class="indices" v-if="wikiInfo.indices">
                <h2 class="index-title">Indice</h2>
                <div v-for="index in wikiInfo.indices">
                    <p @click="scrollToItem(index)">{{ index }}</p>
                </div>
            </div>
            <div v-for="section in wikiInfo.content">

                <h2 v-if="section.title" :id="section.title" :key="section.title">
                    {{ section.title }}
                </h2>
                <p>
                    {{ section.paragraph }}
                </p>
            </div>
        </article>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap');


h1,
h2,
h3,
p,
span {
    color: var(--secondary-color);
}

.content-wraper {
    display: flex;
    flex-direction: column;
}

.error-404 {
    font-weight: bolder;
}

.error-not-found {
    margin-top: 3rem;
    align-self: center;
}

.banner {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    object-position: center;
}

article {
    margin: 1rem 14vw;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Slab', serif;
}

h1 {
    font-size: clamp(1rem, 5rem, 7rem);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.005em;
    padding: 1rem 0;
    word-wrap: break-word;
}

.index-title {
    text-transform: uppercase;
}

h2 {
    font-size: 2rem;
    font-weight: 400;
    margin: 1rem 0;
}

h3 {
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.005em;
    max-width: 60ch;
    margin: .5rem 0;
    color: var(--tertiary-color);
}

p {
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.005em;
    line-height: 2.5rem;
    word-wrap: break-word;
}

.indices {
    margin: 1rem 0;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.625rem;
    width: fit-content;
    padding: 1rem 2rem;
}


.indices div p {
    font-size: clamp(.8rem, 1rem, 1.5rem);
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 1rem;
    border-radius: 1rem;
    transition: color, background-color .25s;
}


.indices div:not(:first-child) p:hover {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
}
</style>
