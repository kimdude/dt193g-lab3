<template>
    <form @submit.prevent="addDrama">
        <label for="addDrama">Titel: </label>
        <br>
        <input type="text" name="addDrama" id="addDrama" v-model="title">
        <label for="year">Startade: </label>
        <input type="number" name="year" id="year" min="1900" max="2027" step="1">
        <label for="episodes">Avsnitt: </label>
        <input type="number" name="episodes" id="episodes" min="1" max="100" step="1">
        <input type="checkbox" name="webtoon" id="webtoon" value="yes">
        <label for="webtoon">Baserat på webtoon</label>
        <br>
        <!-- LÄS UT GENRER OCH TAGGAR FRÅN API:ET SEDAN-->
        <select name="genre">
            <option value="1">Thriller</option>
        </select>
        <div>
            <input type="checkbox" id="apocolypse" name="tags" value="1">
            <label for="apocolypse">Apokalyps</label>
            <br>
        </div>
        <input type="submit" value="Lägg till">
    </form>
    <p id="errorMessage"></p>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const title = ref("");
    const errorMessage = ref("");

    const genres = ref([]);
    const tags = ref([])

    //Triggar funktioner när komponenten körs
    onMounted(() => {
        listGenres();
        listTags();
    })

    //Hämtar och lagrar alla genrer i array
    const listGenres = async () => {
        try{
            const response = await fetch("https://dt193g-lab2.onrender.com/genres");

            if(response.ok) {
                const data = await response.json();
                genres.value = data;
            }

        } catch(error) {
            console.log("There was an error: " + error);
        }
    }

    //Hämtar och lagrar alla taggar i array
    const listTags = async () => {
        try{
            const response = await fetch("https://dt193g-lab2.onrender.com/tags");

            if(response.ok) {
                const data = await response.json();
                tags.value = data;
            }

        } catch(error) {
            console.log("There was an error: " + error);
        }
    }


</script>