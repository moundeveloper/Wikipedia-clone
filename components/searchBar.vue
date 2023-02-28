<script setup>
const searchTopic = ref('')
const router = useRouter()
const route = useRoute();

watch(route, (newValue, oldValue) => {
    console.log('Route changed from', oldValue.path, 'to', newValue.path);
});

const search = () => {
    router.push({ path: `/searchResult/${searchTopic.value}` })
}
</script>

<template>
    <div class="input-wraper">
        <input type="text" placeholder="search-topic" v-bind:style="[route.fullPath === '/' ? { width: '20rem' } : '']"
            v-on:keyup.enter="search" v-model="searchTopic" />
    </div>
</template>

<style scoped>
.input-wraper {
    position: relative;
    width: fit-content;
}

input {
    padding: .5rem 1rem;
    background: var(--primary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 0.5rem;
    color: var(--secondary-color);
}

img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%) scaleX(-1);
    width: 1.4rem;
}

input:focus+img {
    content: url("../public/assets/Close.svg");
}
</style>
