<template>
  <h2>Тут будет список </h2>
  <div v-if="entityStore.isLoaded">
    <ul>
      <li v-for="entity in entityStore.entities" :key="entity.id">
        {{entity.name}}
      </li>
    </ul>
  </div>
  <div v-else>
    Data is not loading
  </div>
  <input type="button" @click="doLoadFromServer">
</template>


<script setup>
import {useEntityStore} from '../../stores/entity'
const entityStore = useEntityStore()
const doLoadFromServer = () => entityStore.loadFromServer()

</script>


<style scoped>
</style>
