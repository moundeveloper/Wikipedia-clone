<template>
    <div class="error-wraper">
        <h1>{{ error.statusCode }}</h1>
        <h2>{{ error.statusMessage }}</h2>
        <h2>{{ error }}</h2>
        <NuxtLink class="link" to="/">Home</NuxtLink>
    </div>
</template>

<script setup>
defineProps(["error"])
</script>

<style scoped>
.error-wraper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 4rem;
    color: var(--secondary-color);
}

h1 {
    font-size: clamp(10rem, 2.5vw, 30rem);
}


.link {
    padding: 1rem 2rem;
    outline: 1px solid;
    border-radius: 1rem;
    color: var(--secondary-color);
    text-decoration: none;
    transition: color, background-color 1s;
}

.link:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
}
</style>