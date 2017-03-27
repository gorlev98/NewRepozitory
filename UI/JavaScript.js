"use strict";
var userName = {name:"?",type:"guest"};
function lock(){
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
    var global_id = 11;
    var numberOfNews = 10;
    var tagMass = ['Экономика', 'Аналитика', 'Политика', 'Мир', 'Общество'];
    function returnUserMass()    {
        return userMass;
    }
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function funcSortArticleMass() {
        function comparator(a, b) {
            var firstDay = a.createdAt.getTime();
            var secondDay = b.createdAt.getTime();
            return secondDay - firstDay;
        }

        console.log('Articles sorting ...');
        arr.sort(comparator);
        console.log('Sorted' + '<br>');
    }

    function funcSortMass(mass) {
        function comparator(a, b) {
            var firstDay = a.createdAt.getTime();
            var secondDay = b.createdAt.getTime();
            return secondDay - firstDay;
        }

        console.log('Massive sorting ...');
        mass.sort(comparator);
        console.log('Sorted' + '<br>');
    }

    function funcLookArticleMass() {
        console.log('List of articles' + '<br>');
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].id.toString() + ' ' + addZero(arr[i].createdAt.getUTCHours()).toString() + ':' + addZero(arr[i].createdAt.getUTCMinutes()).toString() + ' ' +
                arr[i].createdAt.getUTCDate().toString() + '-' + addZero(arr[i].createdAt.getUTCMonth()).toString() + '-' + arr[i].createdAt.getFullYear().toString() + '<br>');
            console.log(arr[i].title + '<br>' + arr[i].author + ' ' + arr[i].tag + '<br>');
        }
    }

    function getIdByArticle(article) {
        for (var i = 0; i < numberOfNews; i++) {
            if (article == arr[i]) {
                return arr[i].id;
            }
        }
        return undefined;
    }

    function getArticle(look_id) {
        console.log('getArticle function called, id of object:' + look_id + '<br>');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == look_id) {
                console.log('Founded' + '<br>');
                return arr[i];
            }
        }
        console.log('Not Founded' + '<br>');
        return undefined;
    }
    function getArticleByTitle(title)
    {
        console.log('getArticleByTitle called, title = '+ title+'<br>');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].title == title) {
                console.log('Founded' + '<br>');
                return arr[i];
            }
        }
        console.log('Not Founded' + '<br>');
        return undefined;
    }
    function addArticle(article) {
        function validateArticle(article) {
            function validate_date(value) {
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

                } catch (e) {
                    console.log(e.toString() + '<br>');
                    return false;
                }
                return true;
            }

            console.log('validateArticle function called, id of article is:' + article.id + '<br>');
            try {
                var regexpId = /^[0-9]+$/;
                if (!(regexpId.test(article.id.toString()))) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (article.title.length <= 0) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (article.title.length > 100) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (!validate_date(article.createdAt)) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (article.summary.length <= 0) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (article.summary.length > 200) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (article.author.length <= 0) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if (article.content.length <= 0) {
                    console.log('Not validate article' + '<br>');
                    return false;
                }
                if(!validateTags(article.tag))
                {
                    console.log('Not validate tags' + '<br>');
                    return false;
                }
            } catch (e) {
                console.log(e.toString() + '<br>');
                return false;
            }
            console.log('Validate article' + '<br>');
            return true;
        }
        function validateTags(tags)
        {
            var splitted_tags = (tags.toString()).split(/ /);
            for(var i =0;i<splitted_tags.length;i++)
            {
                for(var j =0;j<tagMass.length;j++)
                {
                    if(j==tagMass.length-1)
                    {
                        if(splitted_tags[i]!=tagMass[j])
                        {
                            console.log("Error, tag elem="+splitted_tags[i]);
                            return false;
                        }
                    }
                    if(splitted_tags[i]==tagMass[j])
                    {
                        j=tagMass.length;
                    }

                }
            }
            console.log("good work");
            return true;
        }
        console.log('addArticle function' + '<br>');
        console.log(article.title + " " + article.tag + "<br>");
        try {
            if (article) {
            }
            article.id = global_id;
            global_id++;
            if (validateArticle(article)) {
                arr[arr.length] = article;
                numberOfNews = numberOfNews + 1;
                return true;
            }
            else {
                return false;
            }
            return false;
        } catch (e) {
            console.log(e.toString() + '<br>');
            return false;
        }
    }

    function editArticle(arId, changes) {
        function getArticleNum(look_id) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == look_id) {
                    return i;
                }
            }
            return undefined;
        }
        console.log('edit article function called' + '<br>');
        if (changes) {
            var lookArt = getArticleNum(arId);
            if (lookArt) {
                if (changes.title) {
                    arr[lookArt].title = changes.title;
                }
                if (changes.summary) {
                    arr[lookArt].summary = changes.summary;
                }
                if (changes.content) {
                    arr[lookArt].content = changes.content;
                }
                return true;
            }
        }
        return false;
    }

    function removeArticle(arId) {
        function getArticleNum(look_id) {
            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i].id + " " + look_id);
                if (arr[i].id == look_id) {
                    console.log("Eto nomer ob'ekta" + i);
                    return i;
                }
            }
            return undefined;
        }

        console.log('remove article function called, id is:' + arId + '<br>');
        var lookArt = getArticleNum(arId);
        console.log(lookArt + " kekeks");
        if (lookArt >= 0) {
            arr.splice(lookArt, 1);
            numberOfNews = numberOfNews - 1;
        }

    }

    function getArticles(skip, number) {
        console.log('getArticle function' + '<br>');
        funcSortArticleMass();
        var regex = /^[0-9]+$/
        if ((regex.test(skip)) && (regex.test(number))) {
            var newArtMass = arr.slice(skip, skip + number);
            return newArtMass;
        }
        else {
            return undefined;
        }
    }

    function getElemNumber() {
        var res = numberOfNews;
        return res;
    }

    function getFilteredArticles(skip, number, filter) {
        console.log('getFilteredArticle function' + '<br>');
        funcSortArticleMass();
        var regex = /^[0-9]+$/
        if ((regex.test(skip)) && (regex.test(number))) {
            if (filter) {
                var newArrMass;
                var tempMass;
                if (filter.author) {
                    var Tskip = skip;
                    var Tnumber = number;
                    var tempMass = [];
                    for (var i = 0; i < arr.length; i++) {
                        console.log("Сравниваю :"+arr[i].author+" & "+filter.author);
                        if (arr[i].author == filter.author) {
                            if (Tskip > 0) {
                                Tskip = Tskip - 1;
                            }
                            else {
                                if (Tnumber > 0) {
                                    tempMass.push(arr[i]);
                                    Tnumber--;
                                }
                                else {
                                    i = arr.length + 10;
                                }
                            }
                        }
                    }
                    var newArrMass;
                    newArrMass = tempMass.slice(skip, skip + number);
                    return newArrMass;
                }
                if (filter.tag) {
                    console.log("kekes");
                    var Tskip = skip;
                    var Tnumber = number;
                    var tempMass = [];
                    for (var i = 0; i < arr.length; i++) {
                        console.log(arr[i].tag + " " + filter.tag);
                        if (arr[i].tag.indexOf(filter.tag) >= 0) {

                            if (Tskip > 0) {
                                Tskip = Tskip - 1;
                            }
                            else {
                                console.log("2keks" + Tnumber);
                                if (Tnumber > 0) {
                                    tempMass.push(arr[i]);
                                    console.log(arr[i].title + "element dobavlen");
                                    Tnumber--;
                                }
                                else {
                                    i = arr.length + 1;
                                }
                            }
                        }
                    }
					/* var newArrMass;
					 newArrMass = tempMass.slice(skip, skip + number);*/
                    console.log(tempMass[0]);
                    return tempMass;
                }
            }
        }
        return undefined;
    }

    function getMass(){
        return arr;
    }

    function getAuthorMass()
    {
        function lookInAuthors(newAuthor) {
            for (var i = 0; i < authorsMass.length; i++) {
                if (authorsMass[i] == newAuthor) {
                    return false;
                }
            }
            return true;
        }

        function sortAuthorMass(authMass) {
            function comparator(a, b) {

                return b < a;
            }

            authMass.sort(comparator);
        }
        var authorsMass = new Array();
        for (var j = 0; j < numberOfNews; j++) {
            var g = lookInAuthors(arr[j].author);
            if (g) {
                console.log("author added");
                authorsMass.push(arr[j].author);
            }
        }
        sortAuthorMass(authorsMass);
        return authorsMass;
    }
    return {
        addFunc:addArticle,
        removeFunc:removeArticle,
        editFunc:editArticle,
        getMassFunc:getMass,
        getFilteredMassFunc:getFilteredArticles,
        sortMass:funcSortMass,
        getAuthors:getAuthorMass,
        userMass:returnUserMass,
        getArticleByTitle:getArticleByTitle,
        getArticle:getArticle
    };


}
function workWithWindow() {

    var workingFunc = lock();
    function deleteNews(id) {/*эта функция уже подключена к кнопке, через консоль её запустить можно, но трудно*/
        var splitter = id.split(/[<>]/);
        console.log(splitter[2] + "|<br>");
        workingFunc.removeFunc(splitter[2]);
        getNewsList(workingFunc.getMassFunc());
        getCommonNewsList();
    }
    function getNewsList(G_array) {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }


        var array = G_array;
        var visible = workVar.visibility();

        if(!array)
        {
            console.log("peredan pustoy parameter");
            array=workingFunc.getMassFunc();
        }
        var div1 = document.querySelector(".scrollMain");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        for (var i = 0; i < array.length; i++) {
            var obj1 = document.createElement('div');
            obj1.className = "newsBlock";
            var time = addZero(array[i].createdAt.getUTCDate()).toString() + " "
                + addZero(array[i].createdAt.getUTCMonth() + 1).toString()
                + "    " + array[i].createdAt.getHours() + ":" +
                addZero(array[i].createdAt.getMinutes());
            var newsName = array[i].title;
            var author = array[i].author;
            var tags = array[i].tag;
            var splitted_tags = (tags.toString()).split(/ /);
            obj1.innerHTML = time + ' ' + "<news onclick='workVar.getFullNews(this.innerText)'>" + newsName + "</news>" + "<br>" +
                "Источник:" + "<a>___</a>" + '<author onclick="workVar.authorsArticle()">' + author +  "</author> " + "<a>___</a>" +
                "Теги:" + "<a>__</a>";


            for (var j = 0; j < splitted_tags.length; j++) {
                obj1.innerHTML = obj1.innerHTML + '<tag  onclick="workVar.tagNews({tag:this.innerText})">' + splitted_tags[j] + "<a>__</a>" + "</tag>";
            }
            console.log("title=" + array[i].title + ", id=" + array[i].id + '<br>');
            obj1.innerHTML = obj1.innerHTML + "<br>" + '<delete onclick="workVar.deleteNews(this.innerHTML)">' +
                "Удалить новость" + "<a>" + array[i].id + "</a>" + "</delete> <change onclick='workVar.change(this.innerHTML)'>Изменить <a>"+array[i].id+"</a></change>" + "<br>";
            div1.appendChild(obj1);
            var probel = document.createElement('div');
            probel.innerHTML = "<br>" + " ";
            div1.appendChild(probel);

        }
        var deleteElem = document.querySelectorAll('delete');
        var changeElem = document.querySelectorAll('change')
        var addNewNewsButton = document.querySelector('.createNewNewsButton');
        var n = deleteElem.length;
        var nC = changeElem.length;
        if(visible=="none")
        {
            console.log("none");
            for(var i =0;i<n;i++)
            {
                deleteElem[i].style.display="none";
            }
            for(var j=0;j<nC;j++)
            {
                changeElem[j].style.display="none";
            }
            addNewNewsButton.style.display="none";
        }
        if(visible=="block")
        {
            console.log("block");
            for(var i =0;i<n;i++)
            {
                deleteElem[i].style.display="block";
            }
            for(var j=0;j<nC;j++)
            {
                changeElem[j].style.display="block";
            }
            addNewNewsButton.style.display="inline-block";
        }
        addNewNewsButton.addEventListener('click',workVar.createNews);
        var authorElements = document.querySelectorAll('author');
        var authN = authorElements.length;
        console.log(authN+" eto kolichestvo elementov");
        for(var i =0;i<authN;i++)
        {
            authorElements[i].addEventListener('click',workVar.authorsArticle);
        }
        var authorComm = document.querySelector('authorCommon');
        authorComm.addEventListener('click',workVar.authors);


    }
    function showFullNews(title)
    {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        var article = workingFunc.getArticleByTitle(title);
        var div1 = document.querySelector(".scrollMain");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var obj =document.createElement('div');
        obj.className ="fullNewsBlock";
        var time = addZero(article.createdAt.getUTCDate()).toString() + " "
            + addZero(article.createdAt.getMonth() + 1).toString()+" "+article.createdAt.getYear()+
            + " " + article.createdAt.getHours() + ":" +
            addZero(article.createdAt.getMinutes());
        var newsName = article.title;
        var author = article.author;
        var tags = article.tag;
        var splitted_tags = (tags.toString()).split(/ /);
        obj.innerHTML = time + ' ' + "<news>" + newsName + "</news>" + "<br>" +"<justText>"+article.summary+"</justText>"+
            "<br><br>"+"<justText>"+article.content+"</justText>"+"<br><br>"+
            "Источник:" + "<a>___</a>" + '<author onclick="workVar.getAuthorsArticlesParam(this.innerText)">' + author +  "</author> " + "<a>___</a>" +
            "Теги:" + "<a>__</a>";
        for (var j = 0; j < splitted_tags.length; j++) {
            obj.innerHTML = obj.innerHTML + '<tag  onclick="workVar.tagNews({tag:this.innerText})">' + splitted_tags[j] + "<a>__</a>" + "</tag>";
        }
        div1.appendChild(obj);
    }
    function getCommonNewsList() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        var articleMass = workingFunc.getMassFunc();
        var div2 = document.querySelector(".scrollAll");
        while (div2.firstElementChild) {
            div2.removeChild(div2.firstChild);
        }
        var obj = document.createElement('div');
        obj.className = "all_newsBlock";
        for (var i = 0; i < articleMass.length; i++) {
            var time = articleMass[i].createdAt.getHours() + ":" + addZero(articleMass[i].createdAt.getMinutes());
            var newsName = articleMass[i].title;
            var newsObj = time + " " + "<news onclick='workVar.getFullNews(this.innerText)'>" + newsName + "</news>" + "<br>";
            obj.innerHTML = obj.innerHTML + newsObj;
        }
        div2.appendChild(obj);
    }
    function changeNews(id)
    {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        function changeButtonClicked()
        {
            var titleTextPole = document.getElementById('titleInId');
            var summaryTextPole = document.getElementById('summaryInId');
            var contentTextPole = document.getElementById("contentInId");
            var title = titleTextPole.value;
            var summary = summaryTextPole.value;
            var content = contentTextPole.value;
            console.log("aaaa  "+title+" "+summary+" "+content);
            workVar.editNews(splitter[2],{title:title,summary:summary,content:content});
        }
        var splitter = id.split(/[<>]/);
        console.log(splitter[2] + "|<br>");
        var article = workingFunc.getArticle(splitter[2]);

        var div1 = document.querySelector(".scrollMain");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var textTitle = document.createElement('div');
        textTitle.innerText="Vvedite title";
        var titleIn = document.createElement('my_input');
        titleIn.innerHTML = "<textarea type='text' class='my_input' id='titleInId'>"+article.title+"</textarea>";

        div1.appendChild(textTitle);
        div1.appendChild(titleIn);

        var textSummary = document.createElement('div');
        textSummary.innerText="Vvedite summary";
        var summaryIn = document.createElement('my_input');
        summaryIn.innerHTML = "<textarea type='text' class='my_input' id='summaryInId'>"+article.summary+"</textarea>";
        div1.appendChild(textSummary);
        div1.appendChild(summaryIn);

        var textC = document.createElement('div');
        textC.innerText="Vvedite content";
        var CIn = document.createElement('my_input');
        CIn.innerHTML = "<textarea type='text' class='my_input' id='contentInId' >"+article.content+"</textarea>";
        div1.appendChild(textC);
        div1.appendChild(CIn);

        var probel = document.createElement('div');
        probel.innerHTML="<br><br>";
        div1.appendChild(probel);

        var ChangeNewsButton = document.createElement('button');
        ChangeNewsButton.innerHTML = "<a>___</a><text> Change </text><a>___</a>";
        ChangeNewsButton.addEventListener('click',changeButtonClicked);
        div1.appendChild(ChangeNewsButton);

        var probel2 = document.createElement('div');
        probel2.innerHTML="<br><br>";
        div1.appendChild(probel2);
    }
    function createNewNews()
    {
        function addButtonClicked()
        {
            var titleTextPole = document.getElementById('titleInId');
            var summaryTextPole = document.getElementById('summaryInId');
            var authorTextPole = document.getElementById("authorInId");
            var dateTextPole = document.getElementById("DateInId");
            var contentTextPole = document.getElementById("contentInId");
            var tagTextPole = document.getElementById("TagInId");
            var title = titleTextPole.value;
            var summary = summaryTextPole.value;
            var date = dateTextPole.value;
            var author = authorTextPole.value;
            var content = contentTextPole.value;
            var tags = tagTextPole.value
            console.log("aaaa  "+title+" "+summary+" "+date+" "+author+" "+content+" "+tags);
            workVar.add(title,summary,date,author,content,tags);
        }
        var div1 = document.querySelector(".scrollMain");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var textTitle = document.createElement('div');
        textTitle.innerText="Vvedite title";
        var titleIn = document.createElement('my_input');
        titleIn.innerHTML = "<textarea type='text' class='my_input' id='titleInId'>";
        div1.appendChild(textTitle);
        div1.appendChild(titleIn);

        var textSummary = document.createElement('div');
        textSummary.innerText="Vvedite summary";
        var summaryIn = document.createElement('my_input');
        summaryIn.innerHTML = "<textarea type='text' class='my_input' id='summaryInId'>";
        div1.appendChild(textSummary);
        div1.appendChild(summaryIn);

        var textA = document.createElement('div');
        textA.innerText="Vvedite authora";
        var AIn = document.createElement('my_input');
        AIn.innerHTML = "<input type='text' id='authorInId' >";
        div1.appendChild(textA);
        div1.appendChild(AIn);

        var textDate = document.createElement('div');
        textDate.innerText="Vvedite datu";
        var DateIn = document.createElement('my_input');
        DateIn.innerHTML = "<input type='text' id='DateInId' placeholder='Пример:1 January 1111 10:10'>";
        div1.appendChild(textDate);
        div1.appendChild(DateIn);

        var textC = document.createElement('div');
        textC.innerText="Vvedite content";
        var CIn = document.createElement('my_input');
        CIn.innerHTML = "<textarea type='text' class='my_input' id='contentInId' >";
        div1.appendChild(textC);
        div1.appendChild(CIn);

        var textTag = document.createElement('div');
        textTag.innerText="Vvedite tagi";
        var TagIn = document.createElement('my_input');
        TagIn.innerHTML = "<input type='text' id='TagInId'>";
        div1.appendChild(textTag);
        div1.appendChild(TagIn);

        var probel = document.createElement('div');
        probel.innerHTML="<br><br>";
        div1.appendChild(probel);
        var AddNewsButton = document.createElement('button');
        AddNewsButton.innerHTML = "<a>___</a><text> Add </text><a>___</a>";

        AddNewsButton.addEventListener('click',addButtonClicked);
        div1.appendChild(AddNewsButton);
        var probel2 = document.createElement('div');
        probel2.innerHTML="<br><br>";
        div1.appendChild(probel2);
    }

    function addNewNews(title1, summary1, createdAt1, author1, content1, tag1) {
        console.log("AddNewNews func called: title = "+ title1+" , summary="+summary1+
            " , createdAt="+createdAt1+" ,author="+author1+" ,content="+content1+" ,tag="+tag1);
        var time = new Date(createdAt1);
        var newArt = {
            title: title1,
            summary: summary1,
            createdAt: time,
            author: author1,
            content: content1,
            tag: tag1
        };
        var result = workingFunc.addFunc(newArt);
        if(!result)
        {
            alert("Error in adding new news");
        }
        else
        {
            alert("good");
        }
        getNewsList(workingFunc.getMassFunc());
        getCommonNewsList();
    }


    function rebildNews(id, Nchanges) {
        workingFunc.editFunc(id, Nchanges);
        getNewsList(workingFunc.getMassFunc());
        getCommonNewsList();
    }

    function changeUserName(user) {

        console.log("Prinyato imya=" + user);
        userName=user;
        var div1 = document.querySelector(".userName");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var obj1 = document.createElement('base');
        obj1.innerHTML = user.name;
        div1.appendChild(obj1);
        getNewsList(workingFunc.getMassFunc());
        getCommonNewsList();
    }

    function showAuthors() {

        function showOnWindow(authMass) {
            var div1 = document.querySelector(".scrollMain");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            for (var i = 0; i < authMass.length; i++) {
                var obj1 = document.createElement('div');
                obj1.className = "newsBlock";
                var author = authMass[i];
                obj1.innerHTML = '<author onclick="workVar.getAuthorsArticlesParam(this.innerText)">'+ author + "</author> ";
                console.log(author+" dobavlyau avtora");
                obj1.innerHTML = obj1.innerHTML + "<br>";
                console.log(obj1.innerText);
                div1.appendChild(obj1);
                var probel = document.createElement('div');
                probel.innerHTML = "<br>" + " ";
                div1.appendChild(probel);
            }
        }

        var authorMass = workingFunc.getAuthors();
        console.log(authorMass.length+" eto kolichestvo avtorov");
        showOnWindow(authorMass);
    }

    function getNewsListWithTag(Ntag) {
        console.log("getNewsListWithTag called");
        var Nfilter = {tag: Ntag};
        var tempLen = workingFunc.getMassFunc().length;
        console.log(tempLen + " =tempLen");
        var filteredArr = workingFunc.getFilteredMassFunc(0, tempLen, Ntag);
        //console.log(filteredArr[0].title+"element massiva");
        getNewsList(filteredArr);
        getCommonNewsList();
    }
    function visibilityFunc()
    {
        console.log("getVisibilityFunc"+"<br>");
        var obj = this;
        if(userName.type=="guest")
        {
            // this.style.display="none";
            return "none" ;
        }
        if(userName.type=="redactor")
        {
            //this.style.display="block";
            return "block";
        }
        return undefined;
    }
    function getAuthorsArticles()
    {
        console.log("getAuthorsArticles called");
        var tempLen = workingFunc.getMassFunc().length;
        console.log(this.innerText);
        var filteredArr = workingFunc.getFilteredMassFunc(0, tempLen, {author:this.innerText});
        getNewsList(filteredArr);
        getCommonNewsList();
    }
    function getAuthorsArticlesParam(author)
    {
        console.log("getAuthorsArticlesParam called");
        var tempLen = workingFunc.getMassFunc().length;
        console.log(author);
        var filteredArr = workingFunc.getFilteredMassFunc(0, tempLen, {author:author});
        getNewsList(filteredArr);
        getCommonNewsList();
    }
    function loginClicked()
    {
        function loginButtonClicked()
        {
            var users = workingFunc.userMass();
            var length = users.length;
            var loginTextPole = document.getElementById('l_b_id');
            var pTextPole = document.getElementById("p_b_id");
            var tempUserName = loginTextPole.value;
            var tempUserParol = pTextPole.value;
            console.log(tempUserName+" "+tempUserParol);
            for(var i = 0 ;i< length ; i++)
            {
                console.log(tempUserName + " & " + users[i].name);
                if(tempUserName==users[i].name)
                {
                    console.log(tempUserParol+" & "+users[i].parol)
                    if(tempUserParol==users[i].parol)
                    {
                        console.log("good");
                        workVar.userChange({name:tempUserName,type:"redactor"});
                        workVar.newsList();
                        alert("good");
                        return true;
                    }
                }
            }
            workVar.newsList();
            alert("bad");
            return false;
        }
        alert(" name:Lev,parol:lkoelk");
        var getMainNewsScroll = document.querySelector(".scrollMain");
        while (getMainNewsScroll.firstElementChild) {
            getMainNewsScroll.removeChild(getMainNewsScroll.firstChild);
        }
        var commentText = document.createElement('div');
        commentText.innerHTML = "<text> Vvedite imya i parol dlya vhoda ili registracii</text>";
        getMainNewsScroll.appendChild(commentText);

        var loginText = document.createElement('div');
        loginText.innerHTML = "<text> Login </text>";
        getMainNewsScroll.appendChild(loginText);
        var loginBox = document.createElement('input');
        loginBox.className = "loginBox";
        loginBox.id = "l_b_id";

        getMainNewsScroll.appendChild(loginBox);
        var parolText = document.createElement('div');
        parolText.innerHTML = "<text> Parol </text>";

        getMainNewsScroll.appendChild(parolText);
        var parolBox = document.createElement('input');
        parolBox.className = "parolBox";
        parolBox.id = "p_b_id";
        getMainNewsScroll.appendChild(parolBox);

        var getNextLine = document.createElement('div');
        getNextLine.innerHTML = "<a>___</a>";
        getMainNewsScroll.appendChild(getNextLine);
        var loginButton = document.createElement('button');
        loginButton.innerHTML = "<text> Get in </text>";
        loginButton.addEventListener('click',loginButtonClicked);
        getMainNewsScroll.appendChild(loginButton);


        var registerButton=document.createElement('button');
        registerButton.innerHTML = "<text> Registration </text>";
        getMainNewsScroll.appendChild(registerButton);
    }

	/*это также работает по кнопкам над главной лентой новостей*/
    return {
        newsList:getNewsList,
        commonNewsList:getCommonNewsList,
        createNews:createNewNews,
        add:addNewNews,
        deleteNews:deleteNews,
        change:changeNews,
        editNews:rebildNews,
        userChange:changeUserName,
        authors:showAuthors,
        tagNews:getNewsListWithTag,
        visibility:visibilityFunc,
        authorsArticle:getAuthorsArticles,
        getAuthorsArticlesParam:getAuthorsArticlesParam,
        loginClickFunc:loginClicked,
        getFullNews:showFullNews
    };
}
