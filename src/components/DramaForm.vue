<template>
    <form @submit.prevent="addDrama">
        <label for="addDrama">Titel: </label>
        <br>
        <input type="text" name="addDrama" id="addDrama" v-model="title">
        <br>
        <label for="year">Startade: </label>
        <br>
        <input type="number" name="year" id="year" min="1900" max="2027" step="1">
        <br>
        <label for="episodes">Avsnitt: </label>
        <br>
        <input type="number" name="episodes" id="episodes" min="1" max="100" step="1">
        <input type="checkbox" name="webtoon" id="webtoon" value="yes"> 
        <label for="webtoon">Baserat på webtoon</label>
        <br>
        <select name="genre">
            <option v-for="genre in genres" v-bind:value="genre.genre_id">{{ genre.genre_name }}</option>
        </select>
        <div class="tagsList">
            <!-- Loopar igenom taggar och delar i två för design -->
            <div v-for="(tag,i) in tags">
                <input type="checkbox" v-if="i <= tags.length /2 " v-bind:id="tag.tag_name" name="tags" v-bind:value="tag.tag_id">
                <label v-if="i < tags.length /2 " v-bind:for="tag.tag_name"> {{ tag.tag_name }}</label>
            </div>
            <div v-for="(tag,i) in tags">
                <input type="checkbox" v-if="i > tags.length /2 " v-bind:id="tag.tag_name" name="tags" v-bind:value="tag.tag_id">
                <label v-if="i > tags.length /2 " v-bind:for="tag.tag_name"> {{ tag.tag_name }}</label>
            </div>
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
                genres.value = data.sort((a,b) => a.genre_name.localeCompare(b.genre_name));;
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
                tags.value = data.sort((a,b) => a.tag_name.localeCompare(b.tag_name));
            }

        } catch(error) {
            console.log("There was an error: " + error);
        }
    }

    //Lägger till drama
    const addDrama = async () => {

    }

</script>