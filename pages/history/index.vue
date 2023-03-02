<template>
    <div class="history-wraper">
        <h1>History</h1>
        <div v-for="item in history" :key="item.topic" @click="goToSearchedPage(item.topic)">
            <ul>
                <li><span>Topic:</span>{{ item.topic }}</li>
                <li><span>Date last searched:</span>{{ item.lastSearch }}</li>
                <li><span>Times visited:</span>{{ item.visits }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const searchHistory = [
    {
        topic: "JavaScript",
        lastSearch: "2022-10-15 13:20:30",
        visits: 5
    },
    {
        topic: "Artificial Intelligence",
        lastSearch: "2022-09-01 09:10:20",
        visits: 3
    },
    {
        topic: "Machine Learning",
        lastSearch: "2022-08-25 16:45:10",
        visits: 4
    },
    {
        topic: "Blockchain",
        lastSearch: "2022-11-02 11:30:40",
        visits: 2
    },
    {
        topic: "Python",
        lastSearch: "2022-10-20 14:50:15",
        visits: 6
    },
    {
        topic: "Data Science",
        lastSearch: "2022-09-12 18:20:30",
        visits: 1
    },
    {
        topic: "Cloud Computing",
        lastSearch: "2022-11-10 10:00:00",
        visits: 2
    },
    {
        topic: "Internet of Things",
        lastSearch: "2022-09-30 15:30:45",
        visits: 3
    },
    {
        topic: "Cybersecurity",
        lastSearch: "2022-11-15 08:40:20",
        visits: 4
    },
    {
        topic: "Virtual Reality",
        lastSearch: "2022-10-05 12:15:00",
        visits: 2
    }
];

const history = ref("")
if (process.client) {

    console.log(JSON.parse(localStorage.getItem("history")))
    history.value = JSON.parse(localStorage.getItem("history"))
}

const goToSearchedPage = (topic) => {
    useRouter().push({ path: `/result/${topic}` })
}
</script>

<style scoped>
h1 {
    color: var(--secondary-color);
}

.history-wraper,
ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--secondary-color);
    cursor: pointer;
}

.history-wraper {
    align-items: center;
}

ul {
    list-style: none;
    padding: 1rem 2rem;
    box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    gap: 1rem;
}

span {
    font-weight: 600;
    margin-right: .5rem;
}
</style>