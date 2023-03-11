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

import {onMounted, onUnmounted} from 'vue'
import socket from "@/stores/service/mySocketIo";
import {toast} from "vue3-toastify";

onMounted(() => {
  postStore.loadFromServer()
  socket.on('newPost', (data) => {
    toast.info('New Post')
    postStore.loadFromServer()
  })
})

onUnmounted( () => {
  socket.off('newPost')
})

</script>

<style scoped>

</style>
