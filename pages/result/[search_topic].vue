<script setup>

</script>

<template>
    <div class="result-wraper">
        <Suspense>
            <!-- component with nested async dependencies -->
            <content></content>

            <!-- loading state via #fallback slot -->
            <template #fallback>
                <loader></loader>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
.nav-bar {
    position: sticky;
    top: 0;
}

.loading-wraper {
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.loader {
    border: 10px solid var(--primary-accent-color);
    border-radius: 50%;
    border-top: 10px solid var(--secondary-accent-color);
    width: 5rem;
    aspect-ratio: 1;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
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
