<template>
  <div>
    <p>Add task</p>
    <div class="container">
      <form method="post" @submit.prevent="addTask">
        <fieldset class="form-group">
          <input required class="form-control" type="text" v-model="form.subject" placeholder="Subject">
        </fieldset>
        <fieldset required class="form-group">
          <textarea class="form-control" v-model="form.summary" placeholder="Summary"></textarea>
        </fieldset>
        <fieldset class="form-group">
          <textarea required class="form-control" v-model="form.description" placeholder="Description"></textarea>
        </fieldset>
        <fieldset class="form-group">
          <input required class="form-control" type="date" v-model="form.date" placeholder="Date">
        </fieldset>
        <fieldset class="form-group">
          <input required class="form-control" type="number" min="0" max="5" v-model="form.priority" placeholder="Priority">
        </fieldset>
        <fieldset class="form-group">
          <input class="btn btn-success" type="submit" name="submit" value="Add task">
        </fieldset>
      </form>
    </div>
    <div calss="alert">
      <b-alert :show="dismissCountDown"
               variant="success"
               @dismissed="dismissCountdown=0"
               @dismiss-count-down="countDownChanged">
        {{status}}
      </b-alert>
    </div>
  </div>
</template>

<script>


  import bus from '../bus'

  export default {
    data() {
      return {
        form: {
          subject: '',
          summary: '',
          description: '',
          date: null,
          priority: null
        },
        dismissSecs: 3,
        dismissCountDown: 0,
        status:''
      }
    },
    methods: {
      addTask: function () {
        let temp = this.form;
        temp.id = this.$route.params.userId;
        temp = JSON.stringify(this.form);
        let showAlert = this.showAlert;
        fetch('/api/addtask', {
          headers: {"Content-Type": "application/json"},
          method: 'post',
          body: temp
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("kek");
          }
        }).then(function (user) {
          showAlert(user);
        }).catch(function (er) {
          alert(er);
        });
        this.form = {};
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert(el) {
        this.status = el;
        console.log(this.status);
        this.dismissCountDown = this.dismissSecs
      }
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
    }
  }
</script>
<style scoped>
  .selectors {
    margin: 10px auto;
    width: 30%;
  }

  .date {
    display: flex;
    width: 30%;
    margin: 0 auto;
    font-size: 150%;
  }

  select {
    font-size: 150%;
    width: 30%;
  }

  .buttons {
    font-size: 150%;
    margin: 10px auto;
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  ul {
    width: 30%;
    margin: 0 auto;
    padding: 0;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 200%;
    font-weight: bold;
  }

  .container {
    margin-top: 10px;
    width: 60%;
  }
  .alert{
    position: absolute;
    width: 150px;
    bottom: 10px;
    left: 10px;
  }
</style>
