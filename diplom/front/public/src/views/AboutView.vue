<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="callApi"> Click </button>
  </div>
</template>

<script setup>
  const callApi = () => {
    fetch('/api/test')
        .then(res => {
          return res.text()
        })
        .then(txt => {
          console.log(txt)
        })
        .catch(err => {
          console.log('Err')
          console.log(err)
        })
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
