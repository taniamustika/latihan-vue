<script setup lang="ts">
import ListCard from './components/ListCard.vue'
import { listToDo } from './data/list-to-do'
</script>

<template>
  <h1>To Do list in Vue.js</h1>
  <div v-for="item in listToDo" :key="item.id">
    <ListCard :id="item.id" :name="item.name" :message="item.message" :time="item.time" :likeCount="item.likeCount"/>
  </div>

</template>

<style lang="scss">
h1{
  font-size: 30px;
  text-align: center;
  color: rgb(75, 160, 99);
}
</style>