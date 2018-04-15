<template>
  <div class="container">
  <div class="caption">
      Today
  </div>
    <div>
      <b-table :fields="fields" :items="items">
        <!-- A virtual column -->
        <template slot="time" scope="data">
            {{data.value.first}} - {{data.value.last}}
        </template>
        <!-- A custom formatted column -->
        <template slot="name" scope="data">
            {{data.value}}
        </template>
        <!-- A virtual composite column -->
        <template slot="nameage" scope="data">
            {{data.value}}
        </template>
        <template slot="Actions" scope="data">
          <div></div>
        </template>
      </b-table>
    </div>


      <router-link to="/addLesson">
        <b-button class="add">Add Lesson</b-button>
      </router-link>

  <div class="date">Choose date</div>
    <input type="date" name="calendar" class="calendar">
  </div>
</template>

<script>

  export default {
    data () {
      return {
        fields: [
          // A virtual column that doesn't exist in items
          { key: 'time', label: 'Time' },
          // A column that needs custom formatting
          { key: 'name', label: 'Lesson Name' },
          // A regular column
          { key: 'hall', label: 'Lecture Hall' },
          // A regular column
          'Actions'
        ],
        items: [
          { time: { first: '8:15', last: '9:35' }, name: 'Maths', hall:'604'},
          { time: { first: '9:45', last: '11:15' }, name: 'Maths', hall:'604'},
          { time: { first: '11:15', last: '12:35' }, name: 'Maths', hall:'604'},
          { time: { first: '13:00', last: '14:20' }, name: 'Maths', hall:'604'}
        ]
      }
    }
  }
</script>

<style scoped>
  .add{
    display: table;
    margin: auto;

  }
  .calendar{
    display: table;
    margin: auto;

  }
  .date{
    width:200px;
    height: 40px;
    font-size: 150%;
    display: table;
    
    text-align: center;
    margin: auto;

  }
  .b-table{
    display: table;
    margin-left:130px;
    margin-top:30px;
    width: 600px;
  }
  .container {
    margin-top: 20px;
    width: 60%;
    justify-content: space-between;

  }
  .caption{
    width:200px;
    height: 40px;
    font-size: 250%;
    display: table;
    text-align: center;
    margin: auto;
  }

</style>
