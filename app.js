var express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var app = express();
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var url1='mongodb://127.0.0.1:27017/names';
var url2='mongodb://127.0.0.1:27017/news';
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//Здесь закрыты 2 функции для создания коллекций в MongoDB в стандартном виде
/*
MongoClient.connect(url1, function(err, db) {
    if(err) throw err;
    var collection = db.collection('names');
    collection.remove();
    collection.insert({"username":"Lev","password":"lkoelk"}, function(err, docs) {
       collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });
   collection.find().toArray(function(err, results) {
        console.dir(results);

       db.close();
    });
});

MongoClient.connect(url2,function(err,db){
    if(err) throw err;
    var collection=db.collection('news');
    collection.remove();
    var arr1 = [
        {
            id: '1',
            title: 'Объёмы производства в Афганистане снизились на 20%',
            summary: 'Представители Промышленной ассоциации Афганистана заявили, что в 2016 году производство упадёт на 20%.',
            createdAt: new Date('27 February 2017 10:10'),
            author: 'Афганистан.ру',
            content: 'Как рассказал на пресс-конференции в Кабуле ' +
            'президент Ассоциации Сахи Ахмад Пайман, производства сталкиваются' +
            ' с такими проблемами, как малая поддержка со стороны правительства,' +
            ' отсутствие безопасности в многих районах страны и недостаток кредитования' +
            ' на адекватных условиях. Это также приводит к снижению инвестиций в экономику' +
            ' страны, из-за чего возникает порочный круг, передает афганский телеканал "Толо".',
            tag: 'Мир' + ' ' + 'Экономика'
        },
        {
            id: '2',
            title: 'США и Китай выйдут на новый виток торговой войны?',
            summary: 'Теперь, когда в должность вступил президент Дональд Трамп, экономическое противостояние' +
            ' США и Китая может перерасти в настоящую торговую войну. ',
            createdAt: new Date('13 January 2017 12:14'),
            author: 'тэкно:///блог',
            content: 'По мнению эксперта момент для эскалации экономического противостояния двух' +
            ' держав выбран неподходящий. Ведь именно сейчас США и Китай достигли практически максимальной' +
            ' взаимозависимости, а ценность их торговых и инвестиционных отношений как никогда высока. Однако' +
            ' Трамп, севший в президентское кресло "на волне американского национализма и протекционизма", по-видимому, рассуждает иначе.',
            tag: 'Мир' + ' ' + 'Экономика' + ' ' + 'Аналитика' + ' ' + 'Политика'
        },
        {
            id: '3',
            title: 'Нервозный Мюнхен',
            summary: 'вице-председатель Европейской комиссии Франс Тиммерманс: "В Евросоюзе есть два типа стран-членов' +
            ' – маленькие страны-члены и те, кто еще не понял, что они маленькие страны-члены".',
            createdAt: new Date('23 February 2017 13:58'),
            author: 'Российская газета',
            content: 'Европейским государствам пора понять реальности современного мира и сплотиться,' +
            ' чтобы увеличить свой международный вес. Однако то, что обнаружила трехдневная дискуссия,' +
            ' свидетельствует о глубоком разброде и шатаниях в атлантическом сообществе.',
            tag: 'Мир' + ' ' + 'Политика'
        },
        {
            id: '4',
            title: 'Иран закупит у Казахстана 950 тонн уранового концентрата',
            summary: 'Астана в течение трех лет поставит в Иран 950 тонн уранового концентрата. Об этом заявил' +
            ' глава Организации по атомной энергии Ирана Али Акбар Салехи, которого в субботу, 25 февраля, цитирует' +
            ' информационное агентство ISNA.',
            createdAt: new Date('26 February 2017 10:25'),
            author: 'DW',
            content: '"Ожидается, что около 650 тонн будут доставлены в Тегеран двумя партиями в течение двух лет.' +
            ' Оставшиеся 300 тонн поступят в течение третьего года и после конвертации в газ UF6 (гексафторид урана. - Ред.)' +
            ' в обмен на финансовую компенсацию будут отправлены обратно в Казахстан", - отметил Али Акбар Салехи.',
            tag: 'Экономика' + ' ' + 'Политика'
        },
        {
            id: '5',
            title: 'Лидер "Талибана" в Афганистане: сажайте больше деревьев',
            summary: 'Лидер исламистского движения "Талибан" в Афганистане Хибатулла Ахундзада призвал жителей страны сажать больше деревьев.',
            createdAt: new Date('26 February 2017 20:31'),
            author: 'BBC',
            content: 'В своем заявлении он призывает всех бойцов и гражданское население посадить' +
            ' по меньшей мере одно фруктовое или нефруктовое дерево ради украшения Земли и "во благо всех' +
            ' созданий всеблагого Аллаха".Афганистан сталкивается с серьезной проблемой сведения и оскудения' +
            ' существующих лесов. В стране уничтожают деревья на топливо и в результате незаконных рубок.',
            tag: 'Мир'
        },
        {
            id: '6',
            title: 'Додон призвал послов США и Румынии не вмешиваться во внутренние дела Молдавии',
            summary: 'Президент Молдавии Игорь Додон потребовал от послов США и Румынии Джеймса Петтита и' +
            ' Даниела Ионицэ не вмешиваться в его деятельность как главы государства.',
            createdAt: new Date('26 February 2017 22:27'),
            author: 'ТАСС',
            content: 'Об этом говорится в ответном послании на письмо дипломатов, в котором' +
            ' они выразили озабоченность тем, что Додон как верховный главнокомандующий запретил' +
            ' молдавским военным участвовать в учениях НАТО, которые начались 20 февраля и завершатся' +
            ' 1 марта в учебном центре Смырдан в Румынии. Оба письма опубликовало молдавское интернет-издание Independent.',
            tag: 'Мир' + ' ' + 'Общество' + ' ' + 'Политика'
        },
        {
            id: '7',
            title: 'Китай первым оплатил взносы в бюджет ООН в 2017 г.',
            summary: 'Китай уже заплатил ежегодный взносы в бюджет ООН 2017 года, став не только первым' +
            ' из пяти постоянных членов ООН, заплативших взнос, но и первой страной среди "больших вкладчиков",' +
            ' выполнивших свои платежные обязательства.',
            createdAt: new Date('27 February 2017 10:30'),
            author: 'Жэньминь Жибао',
            content: 'С 2016 года, согласно решению Генеральной Ассамблеи ООН,' +
            ' распределившей между государствами расходы всемирной организации, доля взносов Китая' +
            ' в регулярный бюджет ООН с 5,148% увеличилась до 7,921%. В соответствии с этим планом, в 2016' +
            ' году Китай заплатил 196 млн долларов США в качестве взноса в регулярный бюджет ООН; по плану' +
            ' финансирования в 2017 году, Китай должен был выплатить 199 млн долларов США.',
            tag: 'Мир' + ' ' + 'Политика'
        },
        {
            id: '8',
            title: 'Кому выгоден уход Флинна в отставку?',
            summary: 'Генерал-лейтенант в отставке Майкл Флинн из-за оказанного на него давления' +
            ' ушел с поста советника по национальной безопасности, не проработав на нем и месяца.',
            createdAt: new Date('16 February 2017 16:51'),
            author: 'Иносми',
            content: 'Отставка Флинна отразится на всем Вашингтоне и на мировом сообществе,' +
            ' а ее последствия для внешней политики администрации Трампа начнут сказываться лишь' +
            ' через какое-то время. Но уже сейчас можно определить, кто от этого выиграл, а кто проиграл.',
            tag: 'Мир' + ' ' + 'Аналитика' + ' ' + 'Политика'
        },
        {
            id: '9',
            title: 'Варшава ожидает возвращения 400 тысяч поляков после Brexit',
            summary: 'До 400 тысяч поляков, живущих в Великобритании, могут лишиться' +
            ' права постоянного проживания в стране после Brexit',
            createdAt: new Date('27 February 2017 14:04'),
            author: 'РИА "Новости"',
            content: '"Трудно точно определить, сколько поляков после Brexit не подойдут для' +
            ' постоянного места жительства, следует считать, что эта проблема может коснуться' +
            ' 120-400 тысяч человек. Поэтому можно рассчитывать, что часть поляков (как ожидается,' +
            ' 100-200 тысяч), живущих в Великобритании, примут решение вернуться в страну", —' +
            ' говорится в сообщении ведомства, которое цитирует интернет-портал Onet.',
            tag: 'Мир' + ' ' + 'Экономика' + ' ' + 'Политика'
        },
        {
            id: '10',
            title: '3 года после Майдана: что стало с экономикой Украины',
            summary: 'На прошлой неделе Украина отмечала очередную годовщину Майдана,' +
            ' хотя с точки зрения экономики поводов для радости нет.',
            createdAt: new Date('27 February 2017 15:53'),
            author: 'VestiFinance.ru',
            content: 'Временное правительство было сформировано 27 февраля 2014 г., поэтому именно' +
            ' эту дату стоит взять за точку отсчета. Новые власти, несмотря на все обещания, заверения' +
            ' и амбиции, не только не смогли улучшить жизнь своих граждан, но и вообще как-то стабилизировать экономику.',
            tag: 'Экономика' + ' ' + 'Аналитика' + ' ' + 'Политика'
        }

    ];
    for(var i=0;i<arr1.length;i++){
        collection.insert({id:arr1[i].id,title:arr1[i].title,summary:arr1[i].summary,createdAt:arr1[i].createdAt,
        author:arr1[i].author,content:arr1[i].content,tag:arr1[i].tag});
    }
    collection.find().toArray(function(err,results){
        console.dir(results);
    });

})
*/
app.use(bodyParser.json());//парсить json

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({secret:'mySecretKey'}));
app.use(cookieParser());

passport.use(new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password',
        session: false
    },
    function (username,password,done) {
        console.log("username="+username+" ,password="+password);
        if(username==='Lev' && password==='lkoelk')
        {
            return done(null,{username:username, password:password});
        }
        return done(null, false);
    }

));
passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function( user, done) {
    var temp = findUser(user);
    if(temp){
        done(null, temp);
    }
    else{
        done(null,false);
    }
});

app.get('/array',function (req,res){//массив новостей
    MongoClient.connect(url2,function(err,db){
        if(err) throw err;
        var collection = db.collection("news");
        collection.find().toArray(function(err,results){
            res.send(results);
        })
    })
})

app.get('/array/:id',function (req,res){//новость по id
    MongoClient.connect(url2,function(err,db){
        if(err) throw err;
        var collection = db.collection("news");
        collection.find().toArray(function(err,results){
           for(var i=0;i<results.length;i++){
               if(results[i].id==req.params.id){
                   res.send(results[i]);
                   i=results.length+1;
               }
           }
        })
    })
});

app.get('/user',function (req,res){//массив пользователей

    MongoClient.connect(url1,function(err,db){
        if(err) throw err;
        var collection  = db.collection("names");
        collection.find().toArray(function(err, results) {
            res.send(results);
        });
    })
});
app.get('/authors',function (req,res){//массив авторов
    function sortAuthorMass(authMass) {
        function comparator(a, b) {
            return (b<a) - (a<b);
        }
        authMass.sort(comparator);
    }
    MongoClient.connect(url2,function(err,db){
        if(err) throw err;
        var ext_authorsMass = new Array();
        var collection = db.collection("news");
        collection.find().toArray(function(err,results) {
            for(var i =0;i<results.length;i++)
            {
                ext_authorsMass.push(results[i].author);
            }
            console.log("Массив до сортировки");
            console.log(ext_authorsMass);
            sortAuthorMass(ext_authorsMass);
            console.log("Массив после сортировки");
            console.log(ext_authorsMass);
            var authorsMass=new Array();
            authorsMass.push(ext_authorsMass[0]);
            for(var i =1;i<ext_authorsMass.length;i++)
            {
                if(ext_authorsMass[i-1]!=ext_authorsMass[i])
                {
                    authorsMass.push(ext_authorsMass[i]);
                }
            }
            res.send(authorsMass);
        });
    })

});

app.get('/authorArticles/:author',function (req,res) {//авторские творения
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        var ext_authorsMass = new Array();
        var collection = db.collection("news");
        collection.find().toArray(function (err, results) {
            var artMass = new Array();
            for (var i = 0; i < results.length; i++) {
                if (results[i].author == req.params.author) {
                    artMass.push(results[i]);
                }
            }
            res.send(artMass);
        });
    });
});
app.post('/login', function (req,res) {

    console.log("log in");
    console.log(req.body);
    var name = req.body.username;
    var password = req.body.password;
    console.log(name + "  "+password);
    var find=false;
    MongoClient.connect(url1, function(err, db) {
        var collection  = db.collection("names");
        collection.find().toArray(function(err, results) {
            for(var i = 0;i<results.length;i++)
            {
                console.log("Sravnivaem usernames")
                console.log(name+" "+results[i].username)
                if(name == results[i].username){
                    console.log("Sravnivaem password's");
                    console.log(password+" "+results[i].password);
                    if(password==results[i].password){
                        console.log("all is good");
                        find = true;
                        i=results.length;
                    }
                }
            }
            if(find){
                res.sendStatus(200);
            }
            else {
                res.sendStatus(300);
            }
        });
    })

})

app.post('/array', function (req,res){//добавить новость

    MongoClient.connect(url2,function(err,db){
        if(err)throw err;
        var collection=db.collection("news");
        var Nid=Date.now()-9999;
        console.log(Nid+" = id of added news");
        collection.insert({ id: Nid,title: req.body.title,summary: req.body.summary,
            createdAt: new Date(req.body.createdAt),author: req.body.author,
            content: req.body.content,tag: req.body.tag});
        //db.close();
        res.sendStatus(200);
    });
});

app.listen(3000, function () {

app.put('/array', function(req,res){//изменить новость по id

    MongoClient.connect(url2,function(err,db) {
        if(err)throw err;
        var collection=db.collection("news");
        var number=-1;
        console.log("Изменяем объект под id "+req.body.number);
        collection.find().toArray(function(err,results){
            for(var i=0;i<results.length;i++){
                console.log("Рассматриваю объект под id "+ results[i].id);
                if(results[i].id==req.body.number){
                    number = results[i].id;
                    i=results.length+1;
                }
            }
            console.log(number);
                collection.update({
                        id:results[number].id,
                        title:results[number].title,
                        summary:results[number].summary,
                        content:results[number].content,
                        createdAt:results[number].createdAt,
                        author:results[number].author,
                        tag:results[number].tag
                    },
                    {
                        id:results[number].id,
                        title: req.body.title,
                        summary: req.body.summary,
                        content: req.body.content,
                        createdAt:results[number].createdAt,
                        author:results[number].author,
                        tag:results[number].tag
                    });
        });
        res.sendStatus(200);
    });
})

app.delete('/delete/:id',function (req,res){//удалить новость по id

   MongoClient.connect(url2,function(err,db){
       if(err)throw err;
       var collection=db.collection("news");
       console.log("Удаление элемента");
       var object;var id1 = req.params.id;
       collection.find().toArray(function(err, results) {
            for(var i = 0;i<results.length;i++){
                console.log("Рассматриваю объект по номеру "+results[i].id);
                if(results[i].id==id1){
                    object=results[i];
                    console.log("Init object");
                    console.log(object);
                    i=results.length;
                }
            }
            console.log("Object=");
           console.log(object);
           console.log(id1+" =id of deleted news");
           if(object) {

               collection.removeMany(object);
           }
           res.sendStatus(200);
       });

   });
})
app.post('/user', function(req,res){//добавить пользователя
    MongoClient.connect(url1,function(err,db){
       if(err)throw err;
       var collection = db.collection("names");

       collection.insert({username:req.body.name,password:req.body.parol});
       res.sendStatus(200);
    });
})


console.log('Example app listening on port 3000!')

});