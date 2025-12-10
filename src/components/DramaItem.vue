<template>
    <article @click="$emit('deleteDrama', drama.drama_id)">
        {{ drama.title }}
    </article>
</template>

<script setup>
    const props = defineProps({
        drama: Object
    });

    const emits = defineEmits(["deleteDrama"]);
</script>