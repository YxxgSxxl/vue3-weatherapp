<script setup>
import { defineEmits, ref } from 'vue';

let emit = defineEmits(['query'])

let query = ref('');

function search() {
    emit('query', query);
}
</script>

<template>
    <div class="searchbar-wrapper">
        <input type="text" name="" id="" v-model.trim="query" @keydown.enter="search()" placeholder="Search the city you want...">
        <!-- <p>{{ query }}</p> -->
    </div>
</template>


<style lang="scss" scoped>
input[type=text] {
	appearance: none;
	border: none;
	outline: none;
	border-bottom: .2em solid #393F86;
	background: rgba(#393F86, .2);
	border-radius: .2em .2em 0 0;
	padding: .5em;
    width: 200px;
	color: #8d96ff;
}

.searchbar-wrapper {
    margin-bottom: 2rem;
}
</style>