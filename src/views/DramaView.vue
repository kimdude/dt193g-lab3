<template>
    <h2>Drama serier</h2>
    <DramaForm  @refresh-list="getDramas"/>
    <DramaItem v-for="drama in dramas" :key="drama.drama_id" :drama="drama" @delete-drama="deleteDrama"/>
</template>

<script setup>
    import DramaItem from '@/components/DramaItem.vue';
    import DramaForm from '@/components/DramaForm.vue';
    import { ref, onMounted } from 'vue';

    const dramas = ref([]);

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

</script>

<style scoped>
    
</style>