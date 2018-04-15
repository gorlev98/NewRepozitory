<template>
  <div class="task">
    <div>
      <b-button @click="deleteTask" variant="danger">Done</b-button>
      <b-button variant="link" @click="showTask">{{task.subject}}</b-button>
    </div>
    <div class="stars">
      <icon name="star-o" v-for="n in parseInt(task.priority)"></icon>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import bus from '../bus'

  export default {
    components: {Icon},
    data() {
      return {
        star: star
      }
    },
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    methods: {
      showTask: function () {
        console.log('el');
        bus.$emit('showtask', this.task);
      },
      deleteTask: function () {
        bus.$emit('deletetask', this.task);
      }
    }
  }

  const star = [
    {id: 1}, {id: 2}, {id: 3}, {id: 4}
  ];
</script>
<style scoped>
  .stars{
    margin: auto;
  }
  .task {
    display: flex;
    justify-content: space-between;
  }

  input {
    vertical-align: middle
  }
</style>
