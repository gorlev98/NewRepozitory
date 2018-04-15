/*
 * Инициализация Express
 */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');
const algorithm = 'aes-256-gcm';
const password = 'dHEnkskdkHDHEY63802KDrjf83Jfr503';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));

const db = require('diskdb');
db.connect('database', ['users', 'classes', 'timetable', 'tasks']);


function encrypt(text) {
  let cipher = crypto.createCipher(algorithm, password)
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text) {
  let decipher = crypto.createDecipher(algorithm, password)
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8');
  return dec;
}

app.post('/login', function (req, res) {
  let user = db.users.findOne({email: req.body.email});
  console.log(req.body);
  if (!user) {
    console.log('Incorrect username.');
  } else if (user.password !== req.body.password) {
    console.log('Incorrect password.')
  } else {
    res.json(user.id);
  }
});

app.post('/signup', (req, res) => {
  if (!db.users.findOne({email: req.body.email})) {
    let id = encrypt(req.body.email);
    req.body.id = id;
    db.users.save(req.body);
    console.log("User saved");
    res.json(id);
  } else {
    res.status(400).json("Email is taken");
  }
});
app.post('/editprofile', (req, res) => {
  let user = db.users.findOne({id: req.body.id});
  if (user) {
    let userJSON = user;
    userJSON.faculty = req.body.faculty;
    userJSON.group = req.body.group;
    userJSON.status = req.body.status;
    userJSON.course = req.body.course;
    let update = db.users.update(req.body, userJSON, {multi: false});
    res.json("done");
  } else {

  }
});
app.post('/user', (req, res) => {
  let user = db.users.findOne({id: req.body.id})
  if (user) {
    res.json(user);
  } else {
    console.log("no such user");
    res.status(400).end();
  }
});
app.post('/addtask', (req, res) => {
  let task = req.body;
  task.taskId = encrypt(task.subject + task.summary + task.id);
  let save = db.tasks.save(task);
  if (save) {
    res.json('saved correct');
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
app.post('/deletetask', (req, res) => {
  let id = req.body;
  let remove = db.tasks.remove(id, true);
  if (remove) {
    res.json(id);
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
app.post('/gettasks', (req, res) => {
  let date = new Date();
  let counter = 0;
  let tasks = [[], [], []];
  let save = db.tasks.find({id: req.body.id});
  if (save) {
    save.forEach(function (el) {
      el.taskNumber = counter++;
      if ((new Date(el.date) - date) < 86400000) {
        tasks[0].push(el);
      } else if ((new Date(el.date) - date) < 7 * 86400000) {
        tasks[1].push(el);
      } else {
        tasks[2].push(el);
      }
    });
    tasks[0].sort(function (a, b) {
      return parseInt(a.priority) < parseInt(b.priority) ? 1 : -1;
    });
    tasks[1].sort(function (a, b) {
      return parseInt(a.priority) < parseInt(b.priority) ? 1 : -1;
    });
    tasks[2].sort(function (a, b) {
      return parseInt(a.priority) < parseInt(b.priority) ? 1 : -1;
    });
    res.json(tasks);
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
app.post('/addclass', (req, res) => {
  let clas = req.body;
  clas.classId = encrypt(clas.className + clas.type + clas.id);
  let save = db.classes.save(clas);
  if (save) {
    res.json('saved correct');
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
app.post('/deleteclass', (req, res) => {
  let id = req.body;
  console.log(id);
  let remove = db.classes.remove(id, true);
  if (remove) {
    res.json(remove);
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
app.post('/getclasses', (req, res) => {
  let template = {}
  let classes = db.classes.find({id: req.body.id});
  if (classes) {
    res.json(classes);
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
app.post('/addlesson', (req, res) => {
  let lesson = req.body;
  if (lesson.lessonId) {
    let save = db.timetable.update({lessonId: lesson.lessonId}, lesson);
    if (save) {
      res.json('success');
    } else {
      console.log("some problems");
      res.status(400).end();
    }
  } else {
    lesson.lessonId = encrypt(lesson.id + lesson.name);
    let save = db.timetable.save(lesson);
    if (save) {
      res.json('success');
    } else {
      console.log("some problems");
      res.status(400).end();
    }
  }
});
app.post('/getlessons', (req, res) => {
  let lessons = db.timetable.find({id: req.body.id});
  let buff = {time: {}};
  if (lessons) {
    if (req.body.currentDay) {
      let option = {weekday: 'long'};
      let date = new Date(req.body.currentDay);
      let day = date.toLocaleString('en-US', option);
      let response = [];
      lessons.forEach(function (lesson) {
        buff.time.first = lesson.begin;
        buff.time.last = lesson.end;
        buff.name = lesson.name;
        buff.hall = lesson.hall;
        buff.lessonId = lesson.lessonId;
        buff.professor = lesson.professor;
        buff.day = lesson.day;
        if (lesson.day === day) {
          response.push(buff);
        } else if (lesson.selected === 'day') {
          response.push(buff);
        }
        buff = {time: {}};
      });
      res.json(response);
    } else {
      let option = {weekday: 'long'};
      let date = new Date();
      let day = date.toLocaleString('en-US', option);
      let response = [];
      lessons.forEach(function (lesson) {
        buff.time.first = lesson.begin;
        buff.time.last = lesson.end;
        buff.name = lesson.name;
        buff.hall = lesson.hall;
        buff.lessonId = lesson.lessonId;
        buff.professor = lesson.professor;
        buff.day = lesson.day;
        if (lesson.day === day) {
          response.push(buff);
        } else if (lesson.selected === 'day') {
          response.push(buff);
        }
        buff = {time: {}};
      });
      res.json(response);
      //let filter = {day : new d};
    }
  } else {
    console.log("some problems");
    res.status(400).end();
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
