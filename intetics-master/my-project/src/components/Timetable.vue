<template>
  <div class="container">
    <p class="caption">
      Today
    </p>
    <div class="forTable">
      <b-table class="margin" :fields="fields" :items="items">
        <template slot="time" scope="data">
          {{data.value.first}} - {{data.value.last}}
        </template>
        <template slot="name" scope="data">
          {{data.value}}
        </template>
        <template slot="hall" scope="data">
          {{data.value}}
        </template>
        <template slot="lessonId" scope="data">
          <b-button @click="log(data)" size="sm" class="mr-2">
            Edit
          </b-button>
        </template>
      </b-table>
    </div>
    <b-button @click="addLesson" class="add">Add Lesson</b-button>
    <p class="date">Choose date</p>
    <input v-if="items" v-model="day" type="date" name="calendar" class="calendar">
  </div>
</template>

<script>
  import bus from '../bus'

  export default {
    data() {
      return {
        fields: [
          {key: 'time', label: 'Time'},
          {key: 'name', label: 'Lesson Name'},
          {key: 'hall', label: 'Lecture Hall'},
          {key: 'lessonId', label: 'Actions'}
        ],
        items: [],
        id: '',
        day: ''
      }
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
      this.id = this.$route.params.userId;
    },
    created() {
      let user = {id: this.$route.params.userId};
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/getlessons", false);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(user));
      if (xhr.status !== 200) {
      } else {
        let loaded = JSON.parse(xhr.responseText);
        console.log(loaded);
        this.items = loaded;
      }
    },
    methods: {
      log: function (e) {
        // bus.$emit('editlesson',e.item);
        // this.$router.push({path: `/timetable/${e.value}/editlesson`})
        console.log(e);
      },
      addLesson: function () {
        this.$router.push({path: `/timetable/${this.id}/addlesson`});
      }
    },
    watch: {
      day: function () {
        let user = {id: this.$route.params.userId, currentDay: this.day};
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/getlessons", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(user));
        if (xhr.status !== 200) {
        } else {
          let loaded = JSON.parse(xhr.responseText);
          this.items = loaded;
        }
      }
    }
  }
</script>

<style scoped>
  .add {
    display: table;
    margin: auto;

  }

  .calendar {
    display: table;
    margin: auto;

  }

  .date {
    width: 200px;
    height: 40px;
    font-size: 150%;
    display: table;
    text-align: center;
    margin: 10px auto;

  }

  .b-table {
    display: table;
    margin-left: 130px;
    margin-top: 30px;
    width: 600px;
  }

  .container {
    margin: 20px auto;
    width: 60%;
    justify-content: space-between;

  }

  .caption {
    width: 200px;
    height: 40px;
    font-size: 250%;
    display: table;
    text-align: center;
    margin: auto;
  }

  .margin {
    margin: auto;
  }

  .forTable {
    display: flex;
    padding: 10px;
  }
</style>
