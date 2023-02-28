<script setup>

const route = useRoute();

watch(route, (newValue, oldValue) => {
    console.log('Route changed from', oldValue.path, 'to', newValue.path);
});

const menuToggle = () => {
    const menu = document.querySelector('.menu-links');
    console.log(menu)
    menu.classList.toggle("menu-links-open")
}

onMounted(() => {
    document.documentElement.setAttribute('data-theme', "light")
})

const darkModeToggle = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
}
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <NuxtLink class="nuxt-link" to="/">
                    <svg width="74" height="47" viewBox="0 0 74 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M74 0.193498L73.9653 1.58213C70.7168 1.67319 68.763 3.38052 67.5145 6.16917C64.6243 12.7481 55.5723 33.4865 49.5607 46.9859H47.9884L38.5202 25.0068C34.763 32.2459 30.6243 39.8037 27.052 46.9859C27.0173 47.02 25.3179 46.9859 25.3179 46.9517C19.896 34.4654 14.2081 22.0701 8.77457 9.54969C7.45665 6.51064 3.06358 1.58213 0.0346821 1.61628C0.0346821 1.26343 0 0.478054 0 0H18.7168V1.58213C16.4971 1.70734 12.6127 3.09597 13.711 5.47485C16.2428 11.1318 25.6879 32.8264 28.2312 38.324C29.9653 34.9435 34.9133 25.8946 36.9364 22.0701C35.3295 18.849 30.1619 6.82934 28.5202 3.85858C27.3988 1.83254 24.3468 1.65042 22.0694 1.61628V0.0341466L38.5434 0.0682932V1.55937C36.3006 1.62766 34.1387 2.44718 35.1445 4.53013C37.3295 9.08302 38.6821 12.2814 40.7052 16.4473C41.3526 15.218 44.7168 8.54806 46.2659 4.97404C47.2948 2.6293 45.815 1.71872 41.8035 1.62766C41.8382 1.2179 41.8035 0.455289 41.8382 0.0796757C46.9711 0.045529 54.6821 0.0455288 56.0694 0.0113821V1.55937C53.4682 1.65042 50.7746 3.01629 49.3526 5.16753L42.5087 19.1449C43.2486 20.9775 49.8266 35.3987 50.5087 36.9809L64.659 4.81468C63.6647 2.18539 60.4509 1.61628 59.2023 1.59351V0.0113821L73.9769 0.136587L74 0.193498Z"
                            fill="black" />
                    </svg>
                </NuxtLink>
            </div>
            <ul class="menu-links">
                <li>
                    <div class="btn">
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.244 15.684L11.196 12.672L11.232 12.636C13.265 10.3765 14.7839 7.70311 15.684 4.8H19.2V2.4H10.8V0H8.4V2.4H0V4.788H13.404C12.6 7.104 11.328 9.3 9.6 11.22C8.484 9.984 7.56 8.628 6.828 7.2H4.428C5.304 9.156 6.504 11.004 8.004 12.672L1.896 18.696L3.6 20.4L9.6 14.4L13.332 18.132L14.244 15.684ZM21 9.6H18.6L13.2 24H15.6L16.944 20.4H22.644L24 24H26.4L21 9.6ZM17.856 18L19.8 12.804L21.744 18H17.856Z"
                                fill="black" />
                        </svg>
                        <span>Language</span>
                    </div>
                </li>
                <li>
                    <NuxtLink class="nuxt-link" to="/favourites">
                        <div class="btn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.89352 16.3L10.6735 14.02L14.4535 16.33L13.4635 12.01L16.7935 9.13003L12.4135 8.74002L10.6735 4.66002L8.93352 8.71002L4.55352 9.10002L7.88352 12.01L6.89352 16.3ZM10.6735 16.84L5.69352 19.84C5.47352 19.98 5.24352 20.04 5.00352 20.02C4.76352 20 4.55352 19.92 4.37352 19.78C4.19352 19.64 4.05352 19.4652 3.95352 19.2556C3.85352 19.0452 3.83352 18.81 3.89352 18.55L5.21352 12.88L0.803522 9.07003C0.603522 8.89003 0.478722 8.68482 0.429122 8.45442C0.378722 8.22482 0.393522 8.00003 0.473522 7.78003C0.553522 7.56003 0.673522 7.38002 0.833522 7.24002C0.993522 7.10002 1.21352 7.01003 1.49352 6.97003L7.31352 6.46002L9.56352 1.12002C9.66352 0.880025 9.81872 0.700025 10.0291 0.580025C10.2387 0.460025 10.4535 0.400024 10.6735 0.400024C10.8935 0.400024 11.1087 0.460025 11.3191 0.580025C11.5287 0.700025 11.6835 0.880025 11.7835 1.12002L14.0335 6.46002L19.8535 6.97003C20.1335 7.01003 20.3535 7.10002 20.5135 7.24002C20.6735 7.38002 20.7935 7.56003 20.8735 7.78003C20.9535 8.00003 20.9687 8.22482 20.9191 8.45442C20.8687 8.68482 20.7435 8.89003 20.5435 9.07003L16.1335 12.88L17.4535 18.55C17.5135 18.81 17.4935 19.0452 17.3935 19.2556C17.2935 19.4652 17.1535 19.64 16.9735 19.78C16.7935 19.92 16.5835 20 16.3435 20.02C16.1035 20.04 15.8735 19.98 15.6535 19.84L10.6735 16.84Z"
                                    fill="black" />
                            </svg>
                            <span>Favourites</span>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="nuxt-link" to="/history">
                        <div class="btn">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5474 10.52L15.5474 13.52C15.7674 13.74 15.8774 14.02 15.8774 14.36C15.8774 14.7 15.7674 14.98 15.5474 15.2C15.3274 15.42 15.0474 15.53 14.7074 15.53C14.3674 15.53 14.0874 15.42 13.8674 15.2L10.5074 11.84C10.3874 11.72 10.2974 11.5848 10.2374 11.4344C10.1774 11.2848 10.1474 11.13 10.1474 10.97V6.20001C10.1474 5.86001 10.2626 5.57481 10.493 5.34441C10.7226 5.11481 11.0074 5.00001 11.3474 5.00001C11.6874 5.00001 11.9726 5.11481 12.203 5.34441C12.4326 5.57481 12.5474 5.86001 12.5474 6.20001V10.52ZM11.3474 21.8C8.92736 21.8 6.75736 21.0848 4.83736 19.6544C2.91736 18.2248 1.62736 16.36 0.967363 14.06C0.867363 13.7 0.902563 13.36 1.07296 13.04C1.24256 12.72 1.50736 12.52 1.86736 12.44C2.20736 12.36 2.51256 12.4348 2.78296 12.6644C3.05256 12.8948 3.23736 13.18 3.33736 13.52C3.85736 15.28 4.86256 16.7 6.35296 17.78C7.84256 18.86 9.50736 19.4 11.3474 19.4C13.6874 19.4 15.6722 18.5848 17.3018 16.9544C18.9322 15.3248 19.7474 13.34 19.7474 11C19.7474 8.66001 18.9322 6.67481 17.3018 5.04441C15.6722 3.41481 13.6874 2.60001 11.3474 2.60001C9.96736 2.60001 8.67736 2.92001 7.47736 3.56001C6.27736 4.20001 5.26736 5.08001 4.44736 6.20001H6.54736C6.88736 6.20001 7.17256 6.31481 7.40296 6.54441C7.63256 6.77481 7.74736 7.06001 7.74736 7.40001C7.74736 7.74001 7.63256 8.02481 7.40296 8.25441C7.17256 8.48481 6.88736 8.60001 6.54736 8.60001H1.74736C1.40736 8.60001 1.12256 8.48481 0.892963 8.25441C0.662563 8.02481 0.547363 7.74001 0.547363 7.40001V2.60001C0.547363 2.26001 0.662563 1.97481 0.892963 1.74441C1.12256 1.51481 1.40736 1.40001 1.74736 1.40001C2.08736 1.40001 2.37256 1.51481 2.60296 1.74441C2.83256 1.97481 2.94736 2.26001 2.94736 2.60001V4.22001C3.96736 2.94001 5.21256 1.95001 6.68296 1.25001C8.15256 0.550012 9.70736 0.200012 11.3474 0.200012C12.8474 0.200012 14.2526 0.484812 15.563 1.05441C16.8726 1.62481 18.0126 2.39481 18.983 3.36441C19.9526 4.33481 20.7226 5.47481 21.293 6.78441C21.8626 8.09481 22.1474 9.50001 22.1474 11C22.1474 12.5 21.8626 13.9048 21.293 15.2144C20.7226 16.5248 19.9526 17.6648 18.983 18.6344C18.0126 19.6048 16.8726 20.3752 15.563 20.9456C14.2526 21.5152 12.8474 21.8 11.3474 21.8Z"
                                    fill="black" />
                            </svg>
                            <span>History</span>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="nuxt-link" to="/edit">
                        <div class="btn">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.87546 14.4432C4.59586 15.192 4.35946 15.8832 4.14826 16.5828C5.30026 15.7464 6.66946 15.216 8.24986 15.018C11.2655 14.6412 13.9451 12.6504 15.3011 10.1484L13.5539 8.4024L16.4495 5.5032C16.9655 4.9872 17.5475 4.0344 18.1631 2.6616C11.4515 3.702 7.34266 7.812 4.87546 14.4432ZM16.9475 8.4012L18.1475 9.6C16.9475 13.2 13.3475 16.8 8.54746 17.4C5.34466 17.8008 3.34426 20.0004 2.54506 24H0.147461C1.34746 16.8 3.74746 0 21.7475 0C20.5475 3.5964 19.3499 5.9952 18.1511 7.1964L16.9475 8.4012Z"
                                    fill="black" />
                            </svg>
                            <span>Edit</span>
                        </div>
                    </NuxtLink>
                </li>
                <li @click="darkModeToggle()">
                    <div class="btn">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 0.53C3.71 1.68 2.5 3.71 2.5 6.03C2.5 8.35 3.71 10.38 5.53 11.53C2.46 11.53 0 9.07 0 6.03C0 4.57131 0.579463 3.17236 1.61091 2.14091C2.64236 1.10946 4.04131 0.53 5.5 0.53ZM17.07 2.03L18.5 3.46L2.93 19.03L1.5 17.6L17.07 2.03ZM10.89 4.46L9.41 3.53L7.97 4.53L8.39 2.83L7 1.77L8.75 1.65L9.33 0L10 1.63L11.73 1.66L10.38 2.79L10.89 4.46ZM7.59 8.07L6.43 7.34L5.31 8.12L5.65 6.8L4.56 5.97L5.92 5.88L6.37 4.59L6.88 5.86L8.24 5.89L7.19 6.76L7.59 8.07ZM17 12.03C17 13.4887 16.4205 14.8876 15.3891 15.9191C14.3576 16.9505 12.9587 17.53 11.5 17.53C10.28 17.53 9.15 17.13 8.24 16.46L15.93 8.77C16.6 9.68 17 10.81 17 12.03ZM12.6 18.61L15.37 17.46L15.13 20.81L12.6 18.61ZM16.93 15.91L18.08 13.14L20.28 15.68L16.93 15.91ZM18.08 10.95L16.94 8.17L20.28 8.41L18.08 10.95ZM7.63 17.46L10.4 18.61L7.87 20.8L7.63 17.46Z"
                                fill="black" />
                        </svg>
                        <span>Nigga mode</span>
                    </div>
                </li>
            </ul>
            <div class="search-bar-wraper">
                <searchBar v-if="route.fullPath !== '/'"></searchBar>
            </div>
            <div class="hamburger" @click="menuToggle()">
                <svg viewBox="0 0 352 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H352V32H0V0ZM0 144H352V176H0V144ZM0 288H352V320H0V288Z" fill="black" />
                </svg>

            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: var(--primary-color);
}

nav {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.menu-links {
    list-style: none;
}

.nuxt-link {
    text-decoration: none;
}

.logo,
.menu-links li {
    cursor: pointer;
    user-select: none;
}

.menu-links li {
    display: inline-block;
    margin: 0 1rem;
}


.btn {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.btn svg path {
    fill: var(--secondary-color);
}


.btn:hover svg path {
    fill: var(--tertiary-color);
}

.btn:hover span {
    color: var(--tertiary-color);
}

.btn svg {
    width: 1.2rem;
}

span {
    font-size: .8rem;
    color: var(--secondary-color);
}

.logo svg {
    width: 3rem;
}

.logo svg path {
    fill: var(--secondary-color);
}

@media (min-width: 868px) {
    .hamburger {
        display: none !important;
    }
}

@media (max-width: 868px) {
    header {
        position: relative;
    }

    .menu-links {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 1rem;
        padding-top: 4rem;
        background-color: var(--primary-color);
        z-index: 1;
        width: fit-content;
        height: 70vh;
        outline: 1px solid var(--secondary-color);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        scale: 0;
        opacity: 0;
        transition-property: scale, opacity;
        transition-duration: .5s;
        transition-timing-function: cubic-bezier(0, 1.32, 1, .92);
        transform-origin: 100% 0%;
        border-bottom-left-radius: 2rem;
    }

    .menu-links-open {
        scale: 1;
        opacity: 1;
    }

    .menu-links li {
        display: block;
    }

    .hamburger svg {
        width: 1.3rem;
        cursor: pointer;
        box-shadow: 0px 0px 44px 34px var(--primary-color);

    }

    .hamburger svg path {
        fill: var(--secondary-color);
    }


    .hamburger {
        z-index: 2;
        padding: 1rem 0.5rem;
    }

    .hamburger:hover svg path {
        fill: var(--tertiary-color);
    }
}
</style>
