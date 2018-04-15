<template>
  <div class="photo">
    <p class="name" v-text="info.status">Your Faculty</p>
    <div>
      <p class="name" v-text="info.name+' '+info.surname"></p>
      <p class="name" v-text="info.faculty">Your Faculty</p>
      <p class="name" v-text="info.course+' course'">Your Course</p>
      <p class="name" v-text="info.group+' group'">Your Group</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .photo {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
  .name {
    text-align: center;
    font-family: 'Abril Fatface', cursive;
    border-bottom: 4px solid black;
    font-weight: 600;
    font-size: 150%;
  }
</style>
