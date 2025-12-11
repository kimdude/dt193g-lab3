<template>
    <section>
        <h3>Lägg till drama</h3>
        <!-- Formulär för att lägga till drama-->
        <form @submit.prevent="addDrama">
            <div class="inputContainer">
                <label for="addDrama">Titel: </label>
                <br>
                <input v-model="titleInp" type="text" name="addDrama" id="addDrama">
                <br>
                <div id="numContainer">
                    <div>
                        <label for="year">Startade: </label>
                        <br>
                        <input v-model.number="yearInp" type="number" name="year" id="year" min="1900" max="2027" step="1">
                    </div>
                    <div>
                        <label for="episodes">Avsnitt: </label>
                        <br>
                        <input v-model.number="episodesInp" type="number" name="episodes" id="episodes" min="1" max="100" step="1">
                    </div>
                </div>
                <input v-model="webtoonInp" type="checkbox" name="webtoon" id="webtoon"> 
                <label for="webtoon">Baserat på webtoon</label>
                <br>
                <!-- Select som loopar igenom genrer -->
                <select v-model="genreInp" name="genre">
                    <option disabled value="">Genrer</option>
                    <option v-for="genre in genres" v-bind:value="genre.genre_id">{{ genre.genre_name }}</option>
                </select>
            </div>
            <div class="tagsList">
                <p>Taggar: </p>
                <div>
                    <!-- Loopar igenom taggar  -->
                    <div v-for="tag in firstTags">
                        <input v-model="tagsInp" type="checkbox" v-bind:id="tag.tag_name" name="tags" v-bind:value="tag.tag_id">
                        <label v-bind:for="tag.tag_name"> {{ tag.tag_name }}</label>
                    </div>
                </div>
                <div>
                    <div v-for="tag in secondTags">
                        <input v-model="tagsInp" type="checkbox" v-bind:id="tag.tag_name" name="tags" v-bind:value="tag.tag_id">
                        <label v-bind:for="tag.tag_name"> {{ tag.tag_name }}</label>
                    </div>
                </div>
            </div>
            <div class="submitContainer">
                <input type="submit" value="Lägg till" id="submitBtn">
            </div>
        </form>
        <p id="errorMessage" v-if="errorMessage">{{ errorMessage }}</p>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const emits = defineEmits(["refreshList"]);

    const titleInp = ref("");
    const yearInp = ref(null);
    const episodesInp = ref(null);
    const webtoonInp = ref(false);
    const genreInp = ref("");
    const tagsInp = ref([]);
    let errorMessage = ref("");

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
        try {
            const response = await fetch("https://dt193g-lab2.onrender.com/genres");

            if(response.ok) {
                const data = await response.json();
                genres.value = data.sort((a,b) => a.genre_name.localeCompare(b.genre_name));;
            }

        } catch(error) {
            console.log("Ett gel uppstod: " + error);
        }
    }

    //Hämtar och lagrar alla taggar i array
    const listTags = async () => {
        try {
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
            console.log("Ett gel uppstod: " + error);
        }
    }

    //Lägger till drama
    const addDrama = async () => {

        //Validerar inputs
        let errorArr =[];
        
        if(titleInp.value === "") errorArr.push("titel");
        if(yearInp.value === null || yearInp.value > 2027 || yearInp.value < 1950) errorArr.push("årtal 1950-2027");
        if(episodesInp.value === null || episodesInp.value === 0) errorArr.push("antal avsnitt");
        if(genreInp.value === "") errorArr.push("genrer");

        if(errorArr.length > 0) {
            const errors = errorArr.join(", ");

            return errorMessage.value = `Du måste ange ${errors}.`;
        }

        errorMessage.value = "";
        errorArr = [];

        //Skapar nytt objekt
        const dramaObj = {
                "title": titleInp.value,
                "release_year": yearInp.value,
                "episodes": episodesInp.value,
                "webtoon": webtoonInp.value,
                "genres": [genreInp.value],
                "tags": tagsInp.value
        }

        //Skickar objekt med fetch
        try {
            const response = await fetch("https://dt193g-lab2.onrender.com/", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(dramaObj)
            });

            if(response.ok) {
                emits("refreshList");

                titleInp.value = "";
                yearInp.value = null;
                episodesInp.value = null;
                webtoonInp.value = false;
                genreInp.value = "";
                tagsInp.value = [];
            }
            
        } catch(error) {
            console.log("Ett gel uppstod: " + error);
        }
        
    }

</script>

<style scoped>
    section {
        border-bottom: solid 4px #ECE4D4;
        background-color: #e2a93f;
    }

    h3 {
        margin-left: 20vw;
        margin-bottom: 30px;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        justify-self: center;
        width: 50vw;
    }

    .inputContainer {
        flex: 40%;
    }

    input {
        padding: 5px 10px;
        border: none;
        border-left: solid 3px #E47DAB;
        border-radius: 5px;
    }

    select {
        margin-top: 10px;
        padding: 5px 10px;
        border-left: solid 3px #E47DAB;
        border-radius: 5px;
    }

    #numContainer {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #numContainer > div:last-of-type {
        margin-left: 10px;
    }

    .tagsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 40%;
    }

    .tagsList > p {
        margin-top: 0px;
        flex: 90%;
    }

    .submitContainer {
        flex: 30%;
        margin-top: 20px;
    }

    #submitBtn {        
        display: block;
        margin: 20px auto;
        padding: 10px 15px;
        background-color: #ECE4D4;
        border: none;
        border-radius: 10px;
        box-shadow: inset 0px -2px 0px #E47DAB;
        cursor: pointer;
    }

    /* Screens under 800px*/
    @media screen and (max-width: 800px) {
        h3 { margin-left: 10vw; }
        form { width: 70vw; }
    }

    /* Screens under 640px*/
    @media screen and (max-width: 640px) {
        form { flex-direction: column; }
        .tagsList { flex-direction: column; margin-top: 20px; }
    }
</style>