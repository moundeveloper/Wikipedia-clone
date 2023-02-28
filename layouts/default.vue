<script setup>
</script>

<template>
    <div>
        <navBar class="nav-bar"></navBar>
        <main>
            <slot />
        </main>
    </div>
</template>


<style scoped>
.nav-bar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>
