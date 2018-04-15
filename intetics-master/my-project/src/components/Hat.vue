<template>
  <div class="hat">
    <div class="left-side-hat">
      <router-link v-if="id" :to="{ name: 'Timetable', params: { userId: id }}">
        <div class="section">Timetable</div>
      </router-link>
      <router-link v-if="id" :to="{ name: 'Tasks', params: { userId: id }}">
        <div class="section" id="no-borders">Tasks</div>
      </router-link>
    </div>
    <div class="right-side-hat">
      <router-link v-if="id" :to="{name: 'LogInPage'}">
        <div class="section">Log out</div>
      </router-link>
      <router-link v-if="id" :to="{ name: 'Profile', params: { userId: id }}">
        <div class="section">Profile</div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import bus from "../bus"


  export default {
    data() {
      return {
      }
    },
    props:{
      id:{
        type: String
      }
    }
  }
</script>
<style scoped>

  .hat {
    background-color: #d8e5ff;
    display: flex;
    margin: 0 auto;
    width: 70%;
    justify-content: space-between;
  }

  .section {
    color: rgba(255, 255, 255, 0.8);
    display: inline-block;
    text-align: center;
    font-size: 150%;
    padding: .3em 0.5em;
    cursor: pointer;
    text-transform: uppercase;
  }

  .section:hover {
    color: rgba(255, 255, 255, 1);
  }

</style>
