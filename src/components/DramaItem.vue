<template>
    <article>
        <h3>{{ drama.title }}</h3>
        <p><time v-bind:datetime=drama.release_year>{{ drama.release_year }}</time>, {{ drama.genres }}</p>
        <ul>
            <li v-for="tag in tags">{{ tag }}</li>
        </ul>
        <button @click="$emit('deleteDrama', drama.drama_id)">
            <span class="span1"></span>
            <span class="span2"></span>
        </button>
    </article>
</template>

<script setup>
    const props = defineProps({
        drama: Object
    });

    const emits = defineEmits(["deleteDrama"]);

    const listedTags = props.drama.tags.split(",");
    const tags = listedTags.map(tag => tag.trim());

</script>

<style lang="css" scoped>
    article {
        background-color: #ECE4D4;
        padding: 10px 2vw;
        margin: 20px 0px;
        border-left: solid 4px #E47DAB;
        border-radius: 10px;
    }

    button {
        background-color: transparent;
        border: none;
    }

    ul {
        display: flex;
        flex: wrap;
        padding: 20px 0px 0px 0px;
        list-style-type: none;
    }

    li {
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.9rem;
        background-color: #e2a93f;
    }

    li:not(:first-of-type) {
        margin-left: 15px;
    }

    span {
        display: block;
        width: 20px;
        height: 2px;
        margin: 3px 0px;
        background-color: black;
        border-radius: 10px;
    }

    .span1 {
        transform: rotate(45deg);
    }

    .span2 {
        margin-top: -5px;
        transform: rotate(-45deg);
    }

</style>