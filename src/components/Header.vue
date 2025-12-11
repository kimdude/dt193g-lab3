<template>
    <header>
        <h1>Drama collection</h1>
        <nav>
            <!-- Knappar för responsiv meny -->
            <button v-if="openBtn" @click="displayMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button v-if="closeBtn" @click="displayMenu">
                <span class="span1"></span>
                <span class="span2"></span>
            </button>
            <!-- Huvud meny -->
            <ul v-if="displayNav">
                <li><RouterLink to="/">Startsida</RouterLink></li>
                <li><RouterLink to="/drama">Drama serier</RouterLink></li>
                <li><RouterLink to="/about">Om labben</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    //Importerar routing
    import { RouterLink } from 'vue-router';
    import { ref, onMounted } from 'vue';

    const displayNav = ref(true);
    const openBtn = ref(false);
    const closeBtn = ref(false);

    onMounted(() => {
        getScreenSize();
    })

    function displayMenu() {
        if(displayNav.value === true) {
            displayNav.value = false;
            openBtn.value = true;
            closeBtn.value = false;
        } else {
            displayNav.value = true;
            openBtn.value = false;
            closeBtn.value = true;
        }
    }

    function getScreenSize() {
        const screenWidth = window.innerWidth;

        if(screenWidth < 800) {
            displayNav.value = false;
            openBtn.value = true;
        } else {
            displayNav.value = true;
            openBtn.value = false;
        }
    }
</script>

<style lang="css" scoped>
    header {
        display: flex;
        padding: 20px 2vw;
        border-bottom: solid 5px #ECE4D4;
        background-color: #E47DAB;
    }
    
    nav {
        align-content: center;
        margin-left: auto;
    }

    ul {
        display: flex;
        list-style-type: none;
        padding-left: 0px;
    }

    li {
        padding: 10px 10px;
    }

    a {
        text-decoration: none;
        color: #000000;
    }

    .router-link-active {
        color:#63052f;
    }

    /* Responsiva knappar */
    button {
        background-color: transparent;
        border: none;
    }

    span {
        display: block;
        width: 25px;
        height: 2px;
        margin: 4px 0px;
        background-color: black;
        border-radius: 10px;
    }

    .span1 {
        transform: rotate(45deg);
    }

    .span2 {
        margin-top: -7px;
        transform: rotate(-45deg);
    }

    /* Media queries */
    @media screen and (max-width: 800px) {
        ul { z-index: 1000; position: absolute; flex-direction: column; right: 10px; margin-top: 30px; background-color: #E47DAB; }
        li { padding: 20px 30px; }
    }

</style>