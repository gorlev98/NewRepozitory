/**
 * Created by Лев on 05.10.2017.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var app = express();
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var url1='mongodb://127.0.0.1:27017/names';
var url2='mongodb://127.0.0.1:27017/pictures';
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

/*functions for FIRST creation of databases*/
/*MongoClient.connect(url1, function(err, db) {
    if(err) throw err;
    var collection = db.collection('names');
    var login_mass =[{username:"userA",password:"IdontK9ou",email:"user1@mail.de"},
        {username:"userB",password:"MeT000",email:"hello@mail.by"},
        {username:"userC",password:"Just2do",email:"frombehind@mail.ru"}];
    collection.remove();
    for(var i=0;i<login_mass.length;i++){
        collection.insert({id:i,username:login_mass[i].username,password:login_mass[i].password,
            email:login_mass[i].email});
    }
});

MongoClient.connect(url2,function(err,db){
    if(err) throw err;
    var collection=db.collection('pictures');
    collection.remove();
    var picture_mass=[{name:"0",tag:"Disaster",src:"http://photos1.blogger.com/blogger/3077/3374/1600/oil5.jpg",info:"info0"},
        {name:"1asdf",tag:"Best Man",src:"https://classicweddingsgroup.files.wordpress.com/2012/09/best-man.jpg",info:"info1"},
        {name:"2asdf",tag:"Man",src:"https://im0-tub-by.yandex.net/i?id=9d2764be2347ace2702fd479d2fa9f27&n=13",info:"info2"},
        {name:"3asdf",tag:"Best Sky",src:"http://www.xsjjys.com/data/out/112/WHDQ-512540540.jpg",info:"info2"},
        {name:"4asdf",tag:"Future",src:"http://www.wujinshike.com/data/wallpapers/153/WDF_1942118.jpg",info:"info2"},
        {name:"5asdf",tag:"Best",src:"https://previews.123rf.com/images/ylivdesign/ylivdesign1301/ylivdesign130100017/17309282-Best-icon-located-on-a-white-background-Stock-Vector.jpg",info:"info3"}
    ];
    for(var i=0;i<picture_mass.length;i++){
        collection.insert({id:i,name:picture_mass[i].name,tag:picture_mass[i].tag,
            src:picture_mass[i].src, info:picture_mass[i].info});
    }

});*/


/*******************************/

app.use(bodyParser.json());//парсить json

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({secret:'mySecretKey'}));
app.use(cookieParser());

app.get('/array',function (req,res){//массив картинок
    MongoClient.connect(url2,function(err,db){
        if(err) throw err;
        var collection = db.collection("pictures");
        collection.find().toArray(function(err,results){
            res.send(results);
        })
    })
})

app.get('/login', function (req,res) {//проверка на наличие пользователя


    console.log("log in");
    console.log(req.query.email);
    console.log(req.query.password);
    var email = req.query.email;
    var password = req.query.password;
    console.log(email + "  "+password);
    var find=false;var name;
    MongoClient.connect(url1, function(err, db) {
        var collection  = db.collection("names");
        collection.find().toArray(function(err, results) {
            for(i = 0;i<results.length;i++)
            {
                console.log("Sravnivaem usernames")
                console.log(email+" "+results[i].email)
                if(email == results[i].email){
                    console.log("Sravnivaem password's");
                    console.log(password+" "+results[i].password);
                    if(password==results[i].password){
                        console.log("all is good");
                        find = true;
                        name=results[i].username;
                        i=results.length;
                    }
                }
            }
            if(find){
                res.send(name);
                // res.sendStatus(200);
            }
            else {
                res.send();
            }
        });
    })

})

app.post('/array', function (req,res){//add picture

    MongoClient.connect(url2,function(err,db){
        if(err)throw err;
        var collection=db.collection("pictures");
        var Nid=Date.now();
        console.log(Nid+" = id of added picture");
        collection.insert({ id: Nid,name: req.body.name,tag: req.body.tag,
            src: req.body.src,info: req.body.info});
        //db.close();
        res.sendStatus(200);
    });
});

app.post('/user', function(req,res){//добавить пользователя
    MongoClient.connect(url1,function(err,db){
        console.log("add");
        if(err)throw err;
        console.log("no error");
        var collection = db.collection("names");

        collection.insert({username:req.body.username,password:req.body.password,email:req.body.email});
        console.log("send 200");
        res.sendStatus(200);
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
