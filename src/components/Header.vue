<template>
    <header>
        <div>
            <h1>Drama collection</h1>
            <nav>
                <ul>
                    <li><RouterLink to="/">Startsida</RouterLink></li>
                    <li><RouterLink to="/drama">Drama serier</RouterLink></li>
                    <li><RouterLink to="/about">Om labbenS</RouterLink></li>
                </ul>
            </nav>

        </div>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>