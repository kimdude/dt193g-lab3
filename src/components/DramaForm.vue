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
            <!-- Loopar igenom taggar  -->
            <div v-for="(tag) in firstTags">
                <input type="checkbox" v-bind:id="tag.tag_name" name="tags" v-bind:value="tag.tag_id">
                <label v-bind:for="tag.tag_name"> {{ tag.tag_name }}</label>
            </div>
            <div v-for="(tag) in secondTags">
                <input type="checkbox" v-bind:id="tag.tag_name" name="tags" v-bind:value="tag.tag_id">
                <label v-bind:for="tag.tag_name"> {{ tag.tag_name }}</label>
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
    const firstTags = ref([]);
    const secondTags = ref([]);

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
                let data = await response.json();
                data.sort((a,b) => a.tag_name.localeCompare(b.tag_name));

                //Delar taggar i två arrayer
                const halfArr = Math.ceil(data.length / 2);
                const firstHalf = data.splice(0, halfArr);
                const secondHalf = data;

                firstTags.value = firstHalf;
                secondTags.value = secondHalf;
            }

        } catch(error) {
            console.log("There was an error: " + error);
        }
    }

    //Lägger till drama
    const addDrama = async () => {

    }

</script>