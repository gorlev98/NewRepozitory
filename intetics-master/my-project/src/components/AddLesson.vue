<template>
  <div>
    <p>Add lesson</p>
    <div class="container">
      <form class="form-horizontal" @submit.prevent="sendLesson">
        <div class="form-group">
          <input required type="text" v-model="formLesson.name" class="form-control" placeholder="Lesson name">
        </div>
        <div class="form-group">
          <input required type="time" v-model="formLesson.begin" class="form-control">
          <input required type="time" v-model="formLesson.end" class="form-control">
        </div>
        <div class="form-group">
          <b-form-select required v-model="formLesson.day" :options="options" class="mb-3">
          </b-form-select>
        </div>
        <div class="form-group">
          <b-form-radio-group id="radios1" v-model="formLesson.selected" :options="optionsRadio" name="radioOpenions">
          </b-form-radio-group>
        </div>
        <div class="form-group">
          <input required type="text" v-model="formLesson.professor" class="form-control" placeholder="Proffessor">
          <input required type="text" v-model="formLesson.hall" class="form-control" placeholder="Lecture Hall">
        </div>
        <input class="btn btn-success" type="submit" name="submit" value="Add lesson">
      </form>
    </div>
  </div>
</template>

<script>


  import bus from '../bus'

  export default {
    data() {
      return {
        formLesson: {
          name: '',
          begin: null,
          end: null,
          day: null,
          selected: 'day',
          professor: '',
          hall: ''
        },
        options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        optionsRadio: [{text: 'Daily', value: 'day'},
          {text: 'Weekly', value: 'week'}]
      }
    },
    // created(){
    //   if(this.$route.params.lessonId){
    //     bus.$on('editlesson',item=>{
    //       console.log(item);
    //       this.formLesson.lessonId=item.lessonId;
    //       console.log(this.formLesson);
    //     })
    //   }
    // },
    methods: {
      sendLesson() {
        let temp = this.formLesson;
        temp.id = this.$route.params.userId;
        temp = JSON.stringify(temp);
        console.log(this.formLesson);
        fetch('/api/addlesson', {
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
          console.log(user);
        }).catch(function (er) {
          alert(er);
        });
        this.formLesson.name = '';
        this.formLesson.begin = null;
        this.formLesson.end = null;
        this.formLesson.day = null;
        this.formLesson.selected = 'day';
        this.formLesson.professor = '';
        this.formLesson.hall = '';
      }
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
    },
  }
</script>
<style scoped>
  .wrapper {
    text-align: center;
  }

  .form-horizontal {
    width: 70%;
    margin: auto;
  }

  .form-group {
    display: flex;
  }

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
</style>
