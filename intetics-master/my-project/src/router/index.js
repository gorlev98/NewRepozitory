import Vue from 'vue';
import Router from 'vue-router';
import LogInPage from '../components/LogInPage.vue'
import AddTask from '../components/AddTask.vue'
import EditProfile from '../components/EditProfile.vue'
import Profile from '../components/Profile.vue'
import Tasks from '../components/Tasks.vue'
import TimeTable from '../components/Timetable.vue'
import AddLesson from '../components/AddLesson'
import bus from '../bus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogInPage',
      component: LogInPage,
      beforeEnter: (to, from, next) => {
        bus.$emit('userout');
        localStorage.removeItem('userId');
        next();
      }
    }, {
      path: '/tasks/:userId/add',
      name: 'Tasks add',
      component: AddTask
    }, {
      path: '/profile/:userId/edit',
      name: 'EditProfile',
      component: EditProfile
    }, {
      path: '/profile/:userId',
      name: 'Profile',
      component: Profile,
    }, {
      path: '/tasks/:userId',
      name: 'Tasks',
      component: Tasks
    }, {
      path: '/timetable/:userId',
      name: 'Timetable',
      component: TimeTable
    }, {
      path: '/timetable/:userId/addlesson',
      name: 'AddLesson',
      component: AddLesson
    },
    // {
    //   path: '/timetable/:lessonId/editlesson',
    //   name: 'AddLesson',
    //   component: AddLesson
    // }
  ]
})
