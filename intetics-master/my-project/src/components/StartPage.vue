<template>
  <div class="hello">
    <p>Choose links: </p>
    <router-link to="/helloWorld">First page</router-link>
    <router-link to="/editProfile">Second page</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Privet',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
