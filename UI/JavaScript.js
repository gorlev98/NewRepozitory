var arr = [
    {
        id:'1',
        title:'Объёмы производства в Афганистане снизились на 20%',
        summary:'Представители Промышленной ассоциации Афганистана заявили, что в 2016 году производство упадёт на 20%.',
        createdAt:new Date('27 February 2017 10:10'),
        author:'Афганистан.ру',
        content:'Как рассказал на пресс-конференции в Кабуле ' +
        'президент Ассоциации Сахи Ахмад Пайман, производства сталкиваются' +
        ' с такими проблемами, как малая поддержка со стороны правительства,' +
        ' отсутствие безопасности в многих районах страны и недостаток кредитования' +
        ' на адекватных условиях. Это также приводит к снижению инвестиций в экономику' +
        ' страны, из-за чего возникает порочный круг, передает афганский телеканал "Толо".',
        tag:'Мир'+' '+'Экономика'    
    },
    {
        id:'2',
        title:'США и Китай выйдут на новый виток торговой войны?',
        summary:'Теперь, когда в должность вступил президент Дональд Трамп, экономическое противостояние' +
        ' США и Китая может перерасти в настоящую торговую войну. ',
        createdAt:new Date('13 February 2017 12:14'),
        author:'тэкно:///блог',
        content:'По мнению эксперта момент для эскалации экономического противостояния двух' +
        ' держав выбран неподходящий. Ведь именно сейчас США и Китай достигли практически максимальной' +
        ' взаимозависимости, а ценность их торговых и инвестиционных отношений как никогда высока. Однако' +
        ' Трамп, севший в президентское кресло "на волне американского национализма и протекционизма", по-видимому, рассуждает иначе.',
        tag: 'Мир'+' '+ 'Экономика'+' '+ 'Аналитика'+' '+ 'Политика'       
    },
    {
        id:'3',
        title:'Нервозный Мюнхен',
        summary:'вице-председатель Европейской комиссии Франс Тиммерманс: "В Евросоюзе есть два типа стран-членов' +
        ' – маленькие страны-члены и те, кто еще не понял, что они маленькие страны-члены".',
        createdAt:new Date('23 February 2017 13:58'),
        author:'Российская газета',
        content:'Европейским государствам пора понять реальности современного мира и сплотиться,' +
        ' чтобы увеличить свой международный вес. Однако то, что обнаружила трехдневная дискуссия,' +
        ' свидетельствует о глубоком разброде и шатаниях в атлантическом сообществе.',
        tag:'Мир'+' '+ 'Политика'        
    },
    {
        id:'4',
        title:'Иран закупит у Казахстана 950 тонн уранового концентрата',
        summary:'Астана в течение трех лет поставит в Иран 950 тонн уранового концентрата. Об этом заявил' +
        ' глава Организации по атомной энергии Ирана Али Акбар Салехи, которого в субботу, 25 февраля, цитирует' +
        ' информационное агентство ISNA.',
        createdAt:new Date('26 February 2017 10:25'),
        author:' DW',
        content:'"Ожидается, что около 650 тонн будут доставлены в Тегеран двумя партиями в течение двух лет.' +
        ' Оставшиеся 300 тонн поступят в течение третьего года и после конвертации в газ UF6 (гексафторид урана. - Ред.)' +
        ' в обмен на финансовую компенсацию будут отправлены обратно в Казахстан", - отметил Али Акбар Салехи.',
        tag: 'Экономика'+' '+'Политика'       
    },
    {
        id:'5',
        title:'Лидер "Талибана" в Афганистане: сажайте больше деревьев',
        summary:'Лидер исламистского движения "Талибан" в Афганистане Хибатулла Ахундзада призвал жителей страны сажать больше деревьев.',
        createdAt:new Date('26 February 2017 20:31'),
        author:'BBC',
        content:'В своем заявлении он призывает всех бойцов и гражданское население посадить' +
        ' по меньшей мере одно фруктовое или нефруктовое дерево ради украшения Земли и "во благо всех' +
        ' созданий всеблагого Аллаха".Афганистан сталкивается с серьезной проблемой сведения и оскудения' +
        ' существующих лесов. В стране уничтожают деревья на топливо и в результате незаконных рубок.',
        tag: 'Мир'      
    },
    {
        id:'6',
        title:'Додон призвал послов США и Румынии не вмешиваться во внутренние дела Молдавии',
        summary:'Президент Молдавии Игорь Додон потребовал от послов США и Румынии Джеймса Петтита и' +
        ' Даниела Ионицэ не вмешиваться в его деятельность как главы государства.',
        createdAt:new Date('26 February 2017 22:27'),
        author:'ТАСС',
        content:'Об этом говорится в ответном послании на письмо дипломатов, в котором' +
        ' они выразили озабоченность тем, что Додон как верховный главнокомандующий запретил' +
        ' молдавским военным участвовать в учениях НАТО, которые начались 20 февраля и завершатся' +
        ' 1 марта в учебном центре Смырдан в Румынии. Оба письма опубликовало молдавское интернет-издание Independent.',
        tag: 'Мир'+' '+ 'Общество'+' '+'Политика'     
    },
    {
        id:'7',
        title:'Китай первым оплатил взносы в бюджет ООН в 2017 г.',
        summary:'Китай уже заплатил ежегодный взносы в бюджет ООН 2017 года, став не только первым' +
        ' из пяти постоянных членов ООН, заплативших взнос, но и первой страной среди "больших вкладчиков",' +
        ' выполнивших свои платежные обязательства.',
        createdAt:new Date('27 February 2017 10:30'),
        author:'Жэньминь Жибао',
        content:'С 2016 года, согласно решению Генеральной Ассамблеи ООН,' +
        ' распределившей между государствами расходы всемирной организации, доля взносов Китая' +
        ' в регулярный бюджет ООН с 5,148% увеличилась до 7,921%. В соответствии с этим планом, в 2016' +
        ' году Китай заплатил 196 млн долларов США в качестве взноса в регулярный бюджет ООН; по плану' +
        ' финансирования в 2017 году, Китай должен был выплатить 199 млн долларов США.',
        tag: 'Мир'+' '+'Политика'      
    },
    {
        id:'8',
        title:'Кому выгоден уход Флинна в отставку?',
        summary:'Генерал-лейтенант в отставке Майкл Флинн из-за оказанного на него давления' +
        ' ушел с поста советника по национальной безопасности, не проработав на нем и месяца.',
        createdAt:new Date('16 February 2017 16:51'),
        author:'Иносми',
        content:'Отставка Флинна отразится на всем Вашингтоне и на мировом сообществе,' +
        ' а ее последствия для внешней политики администрации Трампа начнут сказываться лишь' +
        ' через какое-то время. Но уже сейчас можно определить, кто от этого выиграл, а кто проиграл.',
        tag: 'Мир'+' '+ 'Аналитика'+' '+'Политика'       
    },
    {
        id:'9',
        title:'Варшава ожидает возвращения 400 тысяч поляков после Brexit',
        summary:'До 400 тысяч поляков, живущих в Великобритании, могут лишиться' +
        ' права постоянного проживания в стране после Brexit',
        createdAt:new Date('27 February 2017 14:04'),
        author:'РИА "Новости"',
        content:'"Трудно точно определить, сколько поляков после Brexit не подойдут для' +
        ' постоянного места жительства, следует считать, что эта проблема может коснуться' +
        ' 120-400 тысяч человек. Поэтому можно рассчитывать, что часть поляков (как ожидается,' +
        ' 100-200 тысяч), живущих в Великобритании, примут решение вернуться в страну", —' +
        ' говорится в сообщении ведомства, которое цитирует интернет-портал Onet.',
        tag: 'Мир'+' '+'Экономика'+' '+ 'Политика'      
    },
    {
        id:'10',
        title:'3 года после Майдана: что стало с экономикой Украины',
        summary:'На прошлой неделе Украина отмечала очередную годовщину Майдана,' +
        ' хотя с точки зрения экономики поводов для радости нет.',
        createdAt:new Date('27 February 2017 15:53'),
        author:'VestiFinance.ru',
        content:'Временное правительство было сформировано 27 февраля 2014 г., поэтому именно' +
        ' эту дату стоит взять за точку отсчета. Новые власти, несмотря на все обещания, заверения' +
        ' и амбиции, не только не смогли улучшить жизнь своих граждан, но и вообще как-то стабилизировать экономику.',
        tag:'Экономика'+' '+ 'Аналитика'+' '+'Политика'       
    }

];
var tagMass = ['Экономика','Аналитика','Политика','Мир','Общество'];
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function comparator(a,b)
{
    var firstDay = a.createdAt.getTime();
    var secondDay = b.createdAt.getTime();
    if(firstDay<secondDay)
    {
        return 1;
    }
    if(firstDay>secondDay) {
        return -1;
    }
    return 0;
}
function funcSortArticleMass()
{
    arr.sort(comparator);
}
function funcSortMass(mass)
{
    mass.sort(comparator);
}
function funcLookArticleMass ()
{
    for(var i=0;i<arr.length;i++)
    {
        document.write(arr[i].id.toString() + ' ' +addZero(arr[i].createdAt.getUTCHours()).toString()+':'+addZero(arr[i].createdAt.getUTCMinutes()).toString()+' '+
            arr[i].createdAt.getUTCDate().toString()+'-'+addZero(arr[i].createdAt.getUTCMonth()).toString()+'-'+arr[i].createdAt.getFullYear().toString()+'<br>');
        document.write(arr[i].title + '<br>' + arr[i].author+' '+ arr[i].tag+'<br>');
    }
}
function getArticle (look_id)
{
    for(var i =0; i<arr.length;i++)
    {
        if(arr[i].id == look_id)
        {
            return arr[i];
        }
    }
    return undefined;
}
function getArticleNum (look_id)
{
    for(var i =0; i<arr.length;i++)
    {
        if(arr[i].id == look_id)
        {
            return i;
        }
    }
    return undefined;
}
function validate_date(value)
{
    try {
        var regex = /[0-9][0-9]?/
        if (!(regex.test(value.getHours()))) {
            return false;
        }
        if (!(regex.test(value.getUTCMinutes()))) {
            return false;
        }
        if (!(regex.test(value.getUTCDate()))) {
            return false;
        }
        if (value.getUTCMonth() < 0) {
            return false;
        }
        if (value.getUTCMonth() >= 13) {
            return false;
        }
        var yearRegex = /[0-9][0-9][0-9][0-9]/
        if (!(regex.test(value.getFullYear()))) {
            return false;
        }
        
    }catch(e){
        return false;
    }

    return true;
}
function validateArticle(article)
{
    try {
        var regexpId = /^[0-9]+$/;
        if (!(regexpId.test(article.id.toString()))) {
       
            return false;
        }
        if (article.title.length <= 0) {
       
            return false;
        }
        if (article.title.length > 100) {
        
            return false;
        }
        if (!validate_date(article.createdAt)) {
        
            return false;
        }
        if(article.summary.length<=0)
       	{
            return false;
        }
        if(article.summary.length>200)
        {
            return false;
        }
        if(article.author.length<=0)
        {
            return false;
        }
        if(article.content.length<=0)
        {
            return false;
        }
    } catch (e)    {
    document.write(e.toString()+'<br>');
        return false;
    }
    return true;
}
function addArticle(article) {
    try {
        if (article != undefined) {
        }
        article.id = arr.length;
        if (validateArticle(article)) {
            arr[arr.length] = article;
            return true;
        }
        else {
            return false;
        }
        return false;
    }catch(e)
    {
        return false;
    }
}
function editArticle(arId,changes)
{
    if(changes!=undefined) {
        var lookArt = getArticleNum(arId);
        if(lookArt!=undefined) {
            if (changes.title != undefined) {
                arr[lookArt].title = changes.title;
            }
            if (changes.summary != undefined) {
                arr[lookArt].summary = changes.summary;
            }
            if (changes.content != undefined) {
                arr[lookArt].content = changes.content;
            }
            return true;
        }
    }
    return false;
}
function removeArticle (arId)
{
    var lookArt = getArticleNum(arId);
    if(lookArt!=undefined) {
        arr.splice(lookArt,1);
    }

}
function getArticles(skip,number)
{
    funcSortArticleMass();
    var regex=/^[0-9]+$/
    if((regex.test(skip))&&(regex.test(number))) {
        var newArtMass = arr.slice(skip, skip + number);
        return newArtMass;
    }
    else
    {
        return undefined;
    }
}

function getFilteredArticles(skip,number,filter)
{
    funcSortArticleMass();
    var regex=/^[0-9]+$/
    if((regex.test(skip))&&(regex.test(number))){
        if(filter!=undefined)
        {
            var newArrMass;var tempMass;
            if(filter.author!=undefined)
            {
                var Tskip=skip;
                var Tnumber = number;
                var tempMass = [];
                for(var i=0;i<arr.length;i++)
                {
                    if(arr[i].author==filter.author)
                    {
                        if(Tskip>0)
                        {
                            Tskip=Tskip-1;
                        }
                        else
                        {
                            if(Tnumber>0)
                            {                             
                                tempMass.push(arr[i]);
                                Tnumber--;
                            }
                            else
                            {
                                i=arr.length+10;
                            }
                        }
                    }
                }
                var newArrMass;
                newArrMass = tempMass.slice(skip,skip+number);
                return newArrMass;
            }
            if(filter.tag!=undefined)
            {
                var Tskip=skip;
                var Tnumber = number;
                var tempMass = [];
                for(var i=0;i<arr.length;i++)
                {
                    if(arr[i].tag.indexOf(filter.tag)>0)
                    {
                        if(Tskip>0)
                        {
                            Tskip=Tskip-1;
                        }
                        else
                        {
                            if(Tnumber>0)
                            {
                                tempMass.push(arr[i]);
                                Tnumber--;
                            }
                            else
                            {
                                i=arr.length+1;
                            }
                        }
                    }
                }
                var newArrMass;
                newArrMass = tempMass.slice(skip,skip+number);
                return newArrMass;
            }
        }
    }
    return undefined;
}
document.write('<br>'+'My Mass'+'<br>'+'<br>');
funcLookArticleMass();
document.write('<br>'+'Sorted Mass (by time)'+'<br>'+'<br>');
funcSortArticleMass();
funcLookArticleMass();
document.write('<br>');
document.write('Get Article by id'+'<br>'+'<br>');
var tempArt = getArticle(1);
document.write(tempArt.title.toString()+'<br>');
document.write(arr[0].id + ' ' + arr[0].createdAt.toTimeString()+'<br>'+'<br>');
document.write('Is valid article'+'<br>'+'<br>');
var tempBool = validateArticle(arr[1]);
document.write(tempBool.toString()+'<br>');
document.write('<br>'+'Add new item in mass'+'<br>');
var newA = {id:0,title: 'fff',summary:'ddd',createdAt:new Date('01 January 1954 12:02'),author: 'Kek',content:'pppp',tag:"Мир"};
addBool = addArticle(newA);
document.write(addBool + '<br>');
document.write('<br>'+'Change element'+'<br>');
var changeBool = editArticle(3,{title:'kekes'});
var temp = getArticle(3);
document.write(changeBool+ '<br>');
document.write('<br>'+'remove work'+'<br>');
removeArticle(1);
removeArticle(4);
funcLookArticleMass();
document.write('<br>'+'take part work'+'<br>');
var arrPart = getArticles(2,3);
for(var i = 0;i<arrPart.length;i++)
{
    document.write(arrPart[i].title+'<br>');
}
document.write('<br>'+'take part work with filter'+'<br>');
var arrPart2 = getFilteredArticles(0,1,{author: 'РИА "Новости"'});
document.write('<br>');
for(var m = 0;m<arrPart2.length;m++)
{
    document.write(arrPart2[m].title+'<br>');
}
