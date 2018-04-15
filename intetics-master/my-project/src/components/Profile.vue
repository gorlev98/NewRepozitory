<template>
  <div class="container">
    <Info :info="info"/>
    <div class="marks">
      <b-table :fields="fields" :class="{ zeroMargins: toggle}" striped hover :items="items">
        <template slot="className" scope="data">
          {{data.value}}
        </template>
        <template slot="type" scope="data">
          {{data.value}}
        </template>
        <template slot="classId" scope="data">
          <b-button variant="danger" @click="deleteClass(data)" size="sm" class="mr-2">
            Delete
          </b-button>
        </template>
      </b-table>
      <div class="under">
        <b-button variant="primary" @click='editProfile'>Edit Profile
        </b-button>
      </div>
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
  import Info from './Info.vue';
  import bus from '../bus'

  export default {
    components: {Info},
    data() {
      return {
        fields: [
          {key: 'className', label: 'Enrolled Courses'},
          {key: 'type', label: 'Control'},
          {key: 'classId', label:'Delete'}
        ],
        items: [],
        info: {},
        toggle: true,
        dismissSecs: 3,
        dismissCountDown: 0,
        status:''
      }
    },
    methods:{
      editProfile: function () {
        this.$router.push({path: `/profile/${this.info.id}/edit`});
      },
      deleteClass: function (el) {
        let showAlert = this.showAlert;
        fetch('/api/deleteclass', {
          headers: {"Content-Type": "application/json"},
          method: 'post',
          body: JSON.stringify({classId: el.value})
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
        this.items.splice(this.items.indexOf(el.item),1);
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
    created: function () {
      let xhr = new XMLHttpRequest();
      xhr.open("POST","/api/user",false);
      xhr.setRequestHeader("Content-Type","application/json");
      let router = this.$router;
      let user = {id: this.$route.params.userId};
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
        router.push({name: "LogInPage"});
      } else{
        let loaded = JSON.parse(xhr.responseText);
        this.info = loaded;
      }
      xhr = new XMLHttpRequest();
      xhr.open("POST","/api/getclasses",false);
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
      } else{
        let loaded = JSON.parse(xhr.responseText);
        console.log(loaded);
        this.items = loaded;
      }
    },
    beforeMount(){
      bus.$emit('userin',localStorage.getItem('userId'));
    }
  }
  let template={};
</script>

<style scoped>
  .under {
  }

  .average {
    font-family: 'Abril Fatface', cursive;
    font-weight: 600;
    font-size: 150%;
  }

  .table {
    margin-left: 100px;
  }

  .container {
    margin-top: 20px;
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .marks {
    width: 60%;
    height: 100%;
  }

  .zeroMargins {
    margin: 0;
    width: 100%;
  }

  .alert{
    position: absolute;
    width: 150px;
    bottom: 10px;
    left: 10px;
  }
</style>
