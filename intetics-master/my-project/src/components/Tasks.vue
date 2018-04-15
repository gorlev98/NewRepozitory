<template>
  <div class="tasks">
    <b-card-group deck>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">Tomorrow</h6>
        <em slot="footer">
          <b-button @click="addTask"
                    variant="primary">Add task
          </b-button>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[0]"
                             :id="task.taskId">
            <TaskElement :id="task.taskId"
                         :task="task"></TaskElement>
          </b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">This week</h6>
        <em slot="footer">
          <b-button @click="addTask"
                    variant="primary">Add task
          </b-button>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[1]"
                             :id="task.taskId">
            <TaskElement :id="task.taskId"
                         :task="task"/>
          </b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">Soon</h6>
        <em slot="footer">
          <b-button @click="addTask"
                    variant="primary">Add task
          </b-button>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[2]"
                             :id="task.taskId">
            <TaskElement :id="task.taskId"
                         :task="task"/>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
    <div v-if="task" class="task-detailes">
      <b-card :title="task.subject">
        <p class="card-text">{{task.summary}}</p>
        <p class="card-text">{{task.description}}</p>
        <p class="card-text">Date due: {{task.date}}</p>
        <b-button @click="task=null">CLOSE</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
  import TaskElement from "./TaskElement.vue"
  import bus from '../bus'

  export default {
    components: {TaskElement},
    data() {
      return {
        tasks: [],
        id: '',
        task: null
      }
    },
    beforeMount() {
      this.id = this.$route.params.userId;
      bus.$emit('userin', localStorage.getItem('userId'));
    },
    methods: {
      addTask: function () {
        this.$router.push({path: `/tasks/${this.id}/add`});
      }
    },
    created() {
      bus.$on('showtask', task => {
        this.task = task;
      });
      bus.$on('deletetask', task => {
        fetch('/api/deletetask', {
          headers: {"Content-Type": "application/json"},
          method: 'post',
          body: JSON.stringify({taskId: task.taskId})
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("kek");
          }
        }).then(function (user) {
          console.log(user);
        }).catch(function (er) {
          alert(er);
        });
        let index = {pos: -1, arr: -1};
        this.tasks.forEach(function (el, id) {
          if (el.indexOf(task) !== -1) {
            index.pos = el.indexOf(task);
            index.arr = id;
          }
        })
        if (index.pos !== -1) {
          this.tasks[index.arr].splice(index.pos, 1);
        }
        console.log(index);
      });
      let date = new Date();
      let user = {id: this.$route.params.userId};
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/gettasks", false);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(user));
      if (xhr.status !== 200) {
      } else {
        let loaded = JSON.parse(xhr.responseText);
        this.tasks = loaded;
        console.log(loaded);
      }
    },
  }
</script>
<style scoped>
  input {
    vertical-align: middle
  }

  .tasks {
    width: 60%;
    margin: 10px auto;
  }
  .task-detailes{
    margin: 10px auto;
  }
</style>
