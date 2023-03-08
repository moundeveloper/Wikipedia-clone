<template>
    <div class="history-wraper">
        <h1>History</h1>
        <div class="history-item" v-for="item in history" :key="item.topic">
            <ul @click="goToSearchedPage(item.topic)">
                <li><span>Topic:</span>{{ item.topic }}</li>
                <li><span>Date last searched:</span>{{ item.lastSearch }}</li>
                <li><span>Times visited:</span>{{ item.visits }}</li>
            </ul>
            <i class="fa-solid fa-trash" @click="deleteHistoryItem(item.topic)"></i>
        </div>
    </div>
</template>

<script setup>

const history = ref("")
if (process.client) {
    history.value = JSON.parse(localStorage.getItem("history"))
}

const goToSearchedPage = (topic) => {
    useRouter().push({ path: `/result/${topic}` })
}

const deleteHistoryItem = (topic) => {
    history.value = history.value.filter((item) => item.topic !== topic)
    localStorage.setItem("history", JSON.stringify(history.value))
}
</script>

<style scoped>
h1 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.history-wraper,
ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--secondary-color);
}

.history-wraper {
    align-items: center;
    padding: 2rem 0;
}

.history-item {
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    gap: 2rem;
    box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
}

.history-item i {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color .5s;
}

.history-item i:hover {
    color: var(--tertiary-color);
}

ul {
    list-style: none;
    gap: 1rem;
    cursor: pointer;
}

span {
    font-weight: 600;
    margin-right: .5rem;
}
</style>