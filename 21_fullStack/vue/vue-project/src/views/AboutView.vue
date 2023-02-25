<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="notify">Notify !</button>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify';
const notify = () => {
  toast("Wow so easy !", {
    autoClose: 1000,
  }); // ToastOptions
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
