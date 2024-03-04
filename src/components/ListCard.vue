<script lang="ts" setup>

const propSaya = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
  }
})
</script>

<template>
    <div class="my-list-card">
    <div class="body">
      <h3>{{ propSaya.name }}</h3>
      <h4>{{ propSaya.message }}</h4>
      <h5>{{ propSaya.time }}</h5>
    </div>
    <div class="like-count">
      <h6>Like: {{ propSaya.likeCount }}</h6>
    </div>
  </div>
</template>

<style lang="scss">

.my-list-card{
  border: 1px solid #f3f3f3;
  margin: 10px;
  margin-left: 300px;
  margin-right: 300px;
  padding: 5px;
  display: flex;
  border-radius: 10px;
  font-family: sans-serif;

  .body{
    margin-right: 400px;
    h3, h5 {
      font-size: 12px;
      font-weight: 500;
      color: darkgray;
    }
  }

  .like-count{
    h6{
      font-size: 12px;
      font-weight: 500;
      color: darkgray;
    }
  }
}

</style>