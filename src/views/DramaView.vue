<template>
    <DramaForm v-if="form" @refresh-list="getDramas"/>
    <button @click="listForm" id="formBtn">
        <span v-if="!form" class="textSpan">Lägg till drama</span>
        <span class="arrowSpan span1" :style="{transform: `rotate(${spanRotateOne})`}"></span>
        <span class="arrowSpan span2" :style="{transform: `rotate(${spanRotateTwo})`}"></span>
    </button>
    <section>
        <h2>Dramaserier</h2>
        <DramaItem v-for="drama in dramas" :key="drama.drama_id" :drama="drama" @delete-drama="deleteDrama"/>
    </section>
</template>

<script setup>
    import DramaItem from '@/components/DramaItem.vue';
    import DramaForm from '@/components/DramaForm.vue';
    import { ref, onMounted } from 'vue';

    const dramas = ref([]);
    const form = ref(false);

    const spanRotateOne = ref("45deg");
    const spanRotateTwo = ref("-45deg");

    onMounted(() => {
        getDramas();
    });

    const getDramas = async () => {
        try{
            const response = await fetch("https://dt193g-lab2.onrender.com/");

            if(response.ok) {
                const data = await response.json();
                dramas.value = data;
            }
        } catch(error) {
            console.log("Ett gel uppstod: " + error);
        }
    }

    const deleteDrama = async (id) => {   
        try{
            const response = await fetch("https://dt193g-lab2.onrender.com/" + id, {
                method: "DELETE"
            });

            if(response.ok) {
                getDramas();
            }
        } catch(error) {
            console.log("Ett gel uppstod: " + error);
        }
    }

    //Visa formuläret för att lägga till
    function listForm(){
        if(form.value === false) {
            form.value = true;
            spanRotateOne.value = "-45deg";
            spanRotateTwo.value = "45deg";

        } else {
            form.value = false;
            spanRotateOne.value = "45deg";
            spanRotateTwo.value = "-45deg";

        }
    }
</script>

<style scoped>
    #formBtn {
        display: flex;
        background-color: #ECE4D4;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 10px;
        border: none;
        border-radius: 0px 0px 10px 10px;
        box-shadow: inset 0px -2px 0px #E47DAB;
        font-size: 1rem;
    }

    .textSpan {
        margin-right: 10px;
    }

    .arrowSpan {
        display: block;
        align-self: center;
        width: 10px;
        height: 2px;
        margin: 3px 0px;
        background-color: black;
        border-radius: 10px;
    }

    .span1 {
        margin-right: -4px;
    }
    
</style>