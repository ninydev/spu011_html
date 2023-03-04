<template>
  <h2>Список постов</h2>
  <div v-if="postStore.isLoaded">
    <ul>
      <li v-for="post in postStore.posts" :key="post.id">
        {{post.title}}
      </li>
    </ul>
  </div>
  <div v-else>
    Data is not loading
  </div>
</template>

<script setup>
import {usePostStore} from "@/stores/posts";
const postStore = usePostStore()

import { onMounted } from 'vue'

onMounted(() => {
  postStore.loadFromServer()
})

</script>

<style scoped>

</style>
