<template>
    <div>
        <div class="loading-wraper">
            <h3>loading</h3>
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.loading-wraper {
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 14rem;
}

.loader {
    border: 10px solid var(--primary-accent-color);
    border-radius: 50%;
    border-top: 10px solid var(--tertiary-color);
    width: 5rem;
    aspect-ratio: 1;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

}

h3 {
    color: var(--secondary-color);
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>