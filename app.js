﻿/*var express = require('express');
var bodyParser = require('body-parser');
*/
var express = require('express'),
    bodyParser = require('body-parser'),
    // ...
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use( new LocalStrategy(
    function (username,parol,done) {
        console.log("LocalStrategy starts");
        var result={info: false};
        for(var i=0;i<userMass.length;i++)
        {
            if((userMass.name==username)&&(userMass.parol==parol))
            {
                result.info=true;
                return done(null,result);
            }
        }
        return done(null,false,{ message: "DENIED"});
    }
))

var app = express();

app.use(bodyParser.json());//парсить json

app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: true}));//парсить формы

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// we need it to parse content-type application/json
app.use(bodyParser.json());

// we need it to parse content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var arr = [
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
var userMass =[
    {
        name:"Lev",
        parol:"lkoelk",
    }
]
app.get('/array',function (req,res){//массив новостей
    res.send(arr);
})

app.get('/array/:id',function (req,res){//новость по id

    for(var i =0;i<arr.length;i++)
    {
        if(arr[i].id==req.params.id)
        {
            res.send(arr[i]);
            i=arr.length+1;
        }
    }
})

app.get('/user',function (req,res){//массив пользователей
    res.send(userMass);
})
app.get('/authors',function (req,res){//массив авторов
    function sortAuthorMass(authMass) {
        function comparator(a, b) {

            return b < a;
        }
        authMass.sort(comparator);
    }
    var ext_authorsMass = new Array();
    for(var i =0;i<arr.length;i++)
    {
        ext_authorsMass.push(arr[i].author);
    }
    sortAuthorMass(ext_authorsMass);
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
})

app.get('/authorArticles/:author',function (req,res){//авторские творения
    var artMass = new Array();
    for(var i =0;i<arr.length;i++)
    {
        if(arr[i].author==req.params.author)
        {
            artMass.push(arr[i]);
            i = arr.length+1;
        }
    }
    res.send(artMass);
})
app.post('/login', function (req,res) {
    var name = req.body.name;
    var parol = req.body.parol;
    console.log(name + "  "+parol);

    for(var i =0;i<userMass.length;i++)
    {
        if((userMass[i].name==name)&&(userMass[i].parol==parol))
        {
            res.json('good');
            i=userMass.length+5;
        }
    }
    if(i<userMass.length+5)
    {
        res.json('bad');
    }
})

app.post('/array', function (req,res){//добавить новость
    var article = {
        id: Date.now(),
        title: req.body.title,
        summary: req.body.summary,
        createdAt: new Date(req.body.createdAt),
        author: req.body.author,
        content: req.body.content,
        tag: req.body.tag
    };
    arr.push(article);
    console.log(req.body);
    res.send(article);
})

app.listen(3000, function () {

app.put('/array', function(req,res){//изменить новость по id
    arr[req.body.number].title = req.body.title;
    arr[req.body.number].summary = req.body.summary;
    arr[req.body.number].content = req.body.content;
    res.sendStatus(200);
})

app.delete('/delete/:id',function (req,res){//удалить новость по id

    arr = arr.filter(function (article){
        return article.id != Number(req.params.id);
    })//вернёт массив элем., без удаляемого id-шника
    res.sendStatus(200);
})
app.post('/user', function(req,res){//добавить пользователя
    var user = {
        name: req.body.name,
        parol: req.body.parol
    };
    userMass.push(user);
    console.log(req.body);
    res.send(user);
})

console.log('Example app listening on port 3000!')

});