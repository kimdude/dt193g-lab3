<template>
    <header>
        <h1>Drama collection</h1>
        <nav>
            <ul>
                <li><RouterLink to="/">Startsida</RouterLink></li>
                <li><RouterLink to="/drama">Drama serier</RouterLink></li>
                <li><RouterLink to="/about">Om labben</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="css" scoped>
    header {
        display: flex;
        padding: 20px 2vw;
        border-bottom: solid 5px #ECE4D4;
        background-color: #E47DAB;
    }

    ul {
        display: flex;
        list-style-type: none;
    }

    li {
        padding: 10px 10px;
    }

    a {
        text-decoration: none;
    }

</style>