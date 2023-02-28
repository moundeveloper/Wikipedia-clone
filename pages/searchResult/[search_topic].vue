<script setup>
const route = useRoute()
const searchTopic = route.params.search_topic
</script>

<template>
    <div class="result-wraper">
        <Suspense>
            <!-- component with nested async dependencies -->

            <search_results :searchTopic="searchTopic"></search_results>

            <!-- loading state via #fallback slot -->
            <template #fallback>

                <loader></loader>

            </template>
        </Suspense>
    </div>
</template>

<style scoped></style>
