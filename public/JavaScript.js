"use strict";

var userName = {name: "?", type: "guest"};
function lock() {
    var tagMass = ['Экономика', 'Аналитика', 'Политика', 'Мир', 'Общество'];

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    function getTagMass()
    {
        var temp = tagMass;
        return temp;
    }
    function funcSortMass(mass) {
        function comparator(a, b) {
            var firstDay = new Date(a.createdAt).getTime();
            var secondDay = new Date(b.createdAt).getTime();
            return secondDay - firstDay;
        }
        console.log('Massive sorting ...');
        mass.sort(comparator);
        console.log('Sorted' + '<br>');
    }

   function getArticle(look_id) {
        console.log('getArticle function called, id of object:' + look_id + '<br>');
        var oReq = new XMLHttpRequest();
        var get = oReq.addEventListener('load', function () {
            var info = JSON.parse(this.responseText);
            return info;
        });
        var text = '/user/' + look_id;
        console.log(text);
        oReq.open('get', text);
        oReq.send();
        console.log(get);
    }

    function removeArticle(arId) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function () {
            workVar.newsList();
            console.log("Delete news finished");
        });
        var text = '/delete/' + arId;
        console.log(text);
        oReq.open('DELETE', text);
        oReq.send();
    }

    function getFilteredArticles(mass, skip, number, filter) {
        console.log('getFilteredArticle function' + '<br>');
        funcSortMass(mass);
        var regex = /^[0-9]+$/
        if ((regex.test(skip)) && (regex.test(number))) {
            if (filter) {
                var newArrMass;
                var tempMass;
                if (filter.author) {
                    var Tskip = skip;
                    var Tnumber = number;
                    var tempMass = [];
                    for (var i = 0; i < mass.length; i++) {
                        console.log("Сравниваю :" + mass[i].author + " & " + filter.author);
                        if (mass[i].author == filter.author) {
                            if (Tskip > 0) {
                                Tskip = Tskip - 1;
                            }
                            else {
                                if (Tnumber > 0) {
                                    tempMass.push(mass[i]);
                                    Tnumber--;
                                }
                                else {
                                    i = mass.length + 10;
                                }
                            }
                        }
                    }
                    var newArrMass;
                    newArrMass = tempMass.slice(skip, skip + number);
                    return newArrMass;
                }
                if (filter.tag) {
                    var Tskip = skip;
                    var Tnumber = number;
                    var tempMass = [];
                    for (var i = 0; i < mass.length; i++) {
                        console.log(mass[i].tag + " " + filter.tag);
                        if (mass[i].tag.indexOf(filter.tag) >= 0) {

                            if (Tskip > 0) {
                                Tskip = Tskip - 1;
                            }
                            else {
                                if (Tnumber > 0) {
                                    tempMass.push(mass[i]);
                                    console.log(mass[i].title + "element dobavlen");
                                    Tnumber--;
                                }
                                else {
                                    i = mass.length + 1;
                                }
                            }
                        }
                    }
                    console.log(tempMass[0]);
                    return tempMass;
                }
            }
        }
        return undefined;
    }

    function getAuthorMass() {
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
        var oReq = new XMLHttpRequest();
        var get = oReq.addEventListener('load', function () {
            var info = JSON.parse(this.responseText);
            return info;
        });
        var text = '/user/' + look_id;
        console.log(text);
        oReq.open('get', text);
        oReq.send();
        console.log(get);
        return authorsMass;
    }
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
        function validateTags(tags) {
            var splitted_tags = tags.split(/ /);
            for (var i = 0; i < splitted_tags.length; i++) {
                for (var j = 0; j < tagMass.length; j++) {
                    if (j == tagMass.length - 1) {
                        if (splitted_tags[i] != tagMass[j]) {
                            console.log("Error, tag elem=" + splitted_tags[i]);
                            return false;
                        }
                    }
                    if (splitted_tags[i] == tagMass[j]) {
                        j = tagMass.length;
                    }

                }
            }
            console.log("good work");
            return true;
        }
        console.log('validateArticle function called, article is:');
        console.log(article);
        try {
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
            console.log("Вызываю функцию validateTags, аргумент - ");
            console.log(article.tag);
            if (!validateTags(article.tag)) {
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
    return {
        removeFunc: removeArticle,
        getFilteredMassFunc: getFilteredArticles,
        sortMass: funcSortMass,
        getAuthors: getAuthorMass,
        getArticle: getArticle,
        tagMass: getTagMass,
        validateArticle: validateArticle
    };
}
function workWithWindow() {

    var workingFunc = lock();
    function deleteNews(id) {/*эта функция уже подключена к кнопке, через консоль её запустить можно, но трудно*/
        console.log("Delete news called");
        var splitter = id.split(/[<>]/);
        console.log(splitter[2] + "|<br>");
        workingFunc.removeFunc(splitter[2]);
    }

    function getNewsList(G_array) {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        console.log("getNewsList called, parameter =");
        console.log(G_array);
        var array = G_array;
        var visible = workVar.visibility();
        if (array == undefined) {
            console.log("array==undefined");
            var oReq = new XMLHttpRequest();
            console.log("oReq created");
            function cleanUp() {
                oReq.removeEventListener('load', handler);
            }
            function handler() {
                function addZero(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                }
                var div1 = document.getElementById("main");
                console.log("Hello, I'm here");
                while (div1.firstElementChild) {
                    div1.removeChild(div1.firstChild);
                }
                var text = JSON.parse(this.responseText);
                cleanUp();
                console.log(text);
                workVar.newsList(text);
                getCommonNewsListInsideFunc(text);
                console.log("getNewsList finished");
            }
            oReq.addEventListener('load', handler);
            console.log("Event listener added");
            oReq.open('GET', '/array');
            console.log("Try to GET /array");
            oReq.send();
        }
        else {
            console.log("Передан ненулевой параметр");
            var div1 = document.querySelector(".scrollMain");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            for (var i = 0; i < array.length; i++) {
                var obj1 = document.createElement('div');
                obj1.className = "newsBlock";
                var newsName = array[i].title;
                var author = array[i].author;
                var tags = array[i].tag;
                var Ctime = new Date(array[i].createdAt);
                var time = addZero(Ctime.getUTCDate()).toString() + " "
                    + addZero(Ctime.getUTCMonth() + 1).toString()
                    + "    " + Ctime.getHours() + ":" +
                    addZero(Ctime.getMinutes());
                var splitted_tags = (tags.toString()).split(/ /);
                obj1.innerHTML = time + ' ' + "<news onclick='workVar.getFullNews(this.innerText)'>" + newsName + "</news>" + "<br>" +
                    "Источник:" + "<a>___</a>" + '<author onclick="workVar.authorsArticle()">' + author + "</author> " + "<a>___</a>" +
                    "Теги:" + "<a>__</a>";
                for (var j = 0; j < splitted_tags.length; j++) {
                    obj1.innerHTML = obj1.innerHTML + '<tag  onclick="workVar.tagNews({tag:this.innerText})">' + splitted_tags[j] + "<a>__</a>" + "</tag>";
                }
                console.log("title=" + array[i].title + ", id=" + array[i].id + '<br>');
                obj1.innerHTML = obj1.innerHTML + "<br>" + '<delete onclick="workVar.deleteNews(this.innerHTML)">' +
                    "Удалить новость" + "<a>" + array[i].id + "</a>" + "</delete> <change onclick='workVar.change(this.innerHTML)'>Изменить <a>" + array[i].id + "</a></change>" + "<br>";
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
            if (visible == "none") {
                console.log("none");
                for (var i = 0; i < n; i++) {
                    deleteElem[i].style.display = "none";
                }
                for (var j = 0; j < nC; j++) {
                    changeElem[j].style.display = "none";
                }
                addNewNewsButton.style.display = "none";
            }
            if (visible == "block") {
                console.log("block");
                for (var i = 0; i < n; i++) {
                    deleteElem[i].style.display = "block";
                }
                for (var j = 0; j < nC; j++) {
                    changeElem[j].style.display = "block";
                }
                addNewNewsButton.style.display = "inline-block";
            }
            addNewNewsButton.addEventListener('click', workVar.createNews);
            var authorElements = document.querySelectorAll('author');
            var authN = authorElements.length;
            console.log(authN + " eto kolichestvo elementov");
            for (var i = 0; i < authN; i++) {
                authorElements[i].addEventListener('click', workVar.authorsArticle);
            }
            var authorComm = document.querySelector('authorCommon');
            authorComm.addEventListener('click', workVar.authors);
            console.log("getNewsList finished");
        }
    }

    function showFullNews(title) {
        console.log("showFullNews called");
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var oReq = new XMLHttpRequest();
        console.log("oReq created");
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }

        function handler() {
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
            var div1 = document.getElementById("main");
            console.log("Hello, I'm here");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            var text = JSON.parse(this.responseText);
            console.log(text);
            var div1 = document.querySelector(".scrollMain");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            var id = -1;
            for (var i = 0; i < text.length; i++) {
                if (text[i].title == title) {
                    id = i;
                }
            }
            var obj = document.createElement('div');
            obj.className = "fullNewsBlock";
            console.log("id=" + id);

            if (id != -1) {
                var Ctime = new Date(text[id].createdAt);
                var time = addZero(Ctime.getUTCDate()).toString() + " "
                    + addZero(Ctime.getUTCMonth() + 1).toString()
                    + "    " + Ctime.getHours() + ":" +
                    addZero(Ctime.getMinutes());
                var splitted_tags = (text[id].tag.toString()).split(/ /);
                var newsName = text[id].title;
                var author = text[id].author;
                obj.innerHTML = time + ' ' + "<news>" + newsName + "</news>" + "<br>" + "<justText>" + text[id].summary + "</justText>" +
                    "<br><br>" + "<justText>" + text[id].content + "</justText>" + "<br><br>" +
                    "Источник:" + "<a>___</a>" + '<author onclick="workVar.getAuthorsArticlesParam(this.innerText)">' + author + "</author> " + "<a>___</a>" +
                    "Теги:" + "<a>__</a>";
                for (var j = 0; j < splitted_tags.length; j++) {
                    obj.innerHTML = obj.innerHTML + '<tag  onclick="workVar.tagNews({tag:this.innerText})">' + splitted_tags[j] + "<a>__</a>" + "</tag>";
                }
                div1.appendChild(obj);
            }
            cleanUp();
        }
        oReq.addEventListener('load', handler);
        console.log("Event listener added");
        oReq.open('GET', '/array');
        console.log("Try to GET /array");
        oReq.send();
        console.log("showFullNews finished");
    }

    function getCommonNewsList() {
        console.log("getCommonNewsList called");
        var text;
        var oReq = new XMLHttpRequest();
        console.log("oReq created");
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        function handler() {
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
            var div1 = document.getElementById("main");
            console.log("Hello, I'm here");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            text = JSON.parse(this.responseText);
            console.log(text);
            getCommonNewsListInsideFunc(text);
            cleanUp();
        }
        oReq.addEventListener('load', handler);
        console.log("Event listener added");
        oReq.open('GET', '/array');
        console.log("Try to GET /array");
        oReq.send();
        console.log("getCommonNewsList finished");
    }

    function getCommonNewsListInsideFunc(array) {
        console.log("getCommonNewsListInsideFunc called");
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var articleMass = array;
        var div2 = document.querySelector(".scrollAll");
        while (div2.firstElementChild) {
            div2.removeChild(div2.firstChild);
        }
        var obj = document.createElement('div');
        obj.className = "all_newsBlock";
        for (var i = 0; i < articleMass.length; i++) {
            var Ctime = new Date(articleMass[i].createdAt);
            var time = Ctime.getHours() + ":" +
                addZero(Ctime.getMinutes());
            var newsName = articleMass[i].title;
            var newsObj = time + " " + "<news onclick='workVar.getFullNews(this.innerText)'>" + newsName + "</news>" + "<br>";
            obj.innerHTML = obj.innerHTML + newsObj;
        }
        div2.appendChild(obj);
        console.log("getCommonNewsListInsideFunc finished");
    }
    function changeNews(id) {
        console.log("change news called");
        var splitter = id.split(/[<>]/);
        console.log(splitter[2] + "|<br>");
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function () {
            var info = JSON.parse(this.responseText);//массив новостей
            console.log(info);
            for (var i = 0; i < info.length; i++) {
                console.log(info[i].id + " , i=" + i);
                if (info[i].id == splitter[2]) {
                    changeNewsInsideFunc(info[i], i);
                    i = info.length + 1;
                }
            }
        });
        oReq.open('get', '/array');
        oReq.send();
    }

    function changeNewsInsideFunc(article, number) {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        function changeButtonClicked() {
            var titleTextPole = document.getElementById('titleInId');
            var summaryTextPole = document.getElementById('summaryInId');
            var contentTextPole = document.getElementById("contentInId");
            var title = titleTextPole.value;
            var summary = summaryTextPole.value;
            var content = contentTextPole.value;
            console.log("aaaa  " + title + " " + summary + " " + content);
            var oReq = new XMLHttpRequest();
            oReq.addEventListener('load', function () {
                console.log("I'm in");
                getNewsList();
            });
            oReq.open('put', '/array');
            oReq.setRequestHeader('content-type', 'application/json');
            const body = JSON.stringify({
                number: number,
                title: title,
                summary: summary,
                content: content
            });
            console.log(body);
            oReq.send(body);
        }
        var div1 = document.querySelector(".scrollMain");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var textTitle = document.createElement('div');
        textTitle.innerText = "Vvedite title";
        var titleIn = document.createElement('my_input');
        titleIn.innerHTML = "<textarea type='text' class='my_input' id='titleInId'>" + article.title + "</textarea>";

        div1.appendChild(textTitle);
        div1.appendChild(titleIn);

        var textSummary = document.createElement('div');
        textSummary.innerText = "Vvedite summary";
        var summaryIn = document.createElement('my_input');
        summaryIn.innerHTML = "<textarea type='text' class='my_input' id='summaryInId'>" + article.summary + "</textarea>";
        div1.appendChild(textSummary);
        div1.appendChild(summaryIn);

        var textC = document.createElement('div');
        textC.innerText = "Vvedite content";
        var CIn = document.createElement('my_input');
        CIn.innerHTML = "<textarea type='text' class='my_input' id='contentInId' >" + article.content + "</textarea>";
        div1.appendChild(textC);
        div1.appendChild(CIn);

        var probel = document.createElement('div');
        probel.innerHTML = "<br><br>";
        div1.appendChild(probel);

        var ChangeNewsButton = document.createElement('button');
        ChangeNewsButton.innerHTML = "<a>___</a><text> Change </text><a>___</a>";
        ChangeNewsButton.addEventListener('click', changeButtonClicked);
        div1.appendChild(ChangeNewsButton);

        var probel2 = document.createElement('div');
        probel2.innerHTML = "<br><br>";
        div1.appendChild(probel2);
        console.log("change news finished");
    }

    function createNewNews() {
        console.log("createNewNews called");
        function addButtonClicked() {
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
            console.log("aaaa  " + title + " " + summary + " " + date + " " + author + " " + content + " " + tags);
            workVar.add(title, summary, date, author, content, tags);
        }
        var div1 = document.querySelector(".scrollMain");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var textTitle = document.createElement('div');
        textTitle.innerText = "Vvedite title";
        var titleIn = document.createElement('my_input');
        titleIn.innerHTML = "<textarea type='text' class='my_input' id='titleInId'>";
        div1.appendChild(textTitle);
        div1.appendChild(titleIn);

        var textSummary = document.createElement('div');
        textSummary.innerText = "Vvedite summary";
        var summaryIn = document.createElement('my_input');
        summaryIn.innerHTML = "<textarea type='text' class='my_input' id='summaryInId'>";
        div1.appendChild(textSummary);
        div1.appendChild(summaryIn);

        var textA = document.createElement('div');
        textA.innerText = "Vvedite authora";
        var AIn = document.createElement('my_input');
        AIn.innerHTML = "<input type='text' id='authorInId' >";
        div1.appendChild(textA);
        div1.appendChild(AIn);

        var textDate = document.createElement('div');
        textDate.innerText = "Vvedite datu";
        var DateIn = document.createElement('my_input');
        DateIn.innerHTML = "<input type='text' id='DateInId' placeholder='Пример:1 January 1111 10:10'>";
        div1.appendChild(textDate);
        div1.appendChild(DateIn);

        var textC = document.createElement('div');
        textC.innerText = "Vvedite content";
        var CIn = document.createElement('my_input');
        CIn.innerHTML = "<textarea type='text' class='my_input' id='contentInId' >";
        div1.appendChild(textC);
        div1.appendChild(CIn);

        var textTag = document.createElement('div');
        textTag.innerText = "Vvedite tagi";
        var TagIn = document.createElement('my_input');
        TagIn.innerHTML = "<input type='text' id='TagInId'>";
        div1.appendChild(textTag);
        div1.appendChild(TagIn);

        var probel = document.createElement('div');
        probel.innerHTML = "<br><br>";
        div1.appendChild(probel);
        var AddNewsButton = document.createElement('button');
        AddNewsButton.innerHTML = "<a>___</a><text> Add </text><a>___</a>";

        AddNewsButton.addEventListener('click', addButtonClicked);
        div1.appendChild(AddNewsButton);
        var probel2 = document.createElement('div');
        probel2.innerHTML = "<br><br>";
        div1.appendChild(probel2);
        console.log("createNewNews finished");
    }

    function addNewNews(title1, summary1, createdAt1, author1, content1, tag1) {
        console.log("AddNewNews func called: title = " + title1 + " , summary=" + summary1 +
            " , createdAt=" + createdAt1 + " ,author=" + author1 + " ,content=" + content1 + " ,tag=" + tag1);
        var time = new Date(createdAt1);
        var article = {
            title: title1,
            summary: summary1,
            createdAt: time,
            author: author1,
            content: content1,
            tag: tag1
        };
        if (workingFunc.validateArticle(article)) {
           const body = JSON.stringify(article);
            var oReq = new XMLHttpRequest();
            oReq.addEventListener('load', function () {
                getNewsList();
                console.log("AddNewNews func finished");
            });
            oReq.open('post', '/array');
            oReq.setRequestHeader('content-type', 'application/json');
            oReq.send(body);
        }
        else{
            getNewsList();
            alert("Error in adding new news");
        }
    }

    function rebildNews(id, Nchanges) {
        console.log("rebildNewsFunc called");
        workingFunc.editFunc(id, Nchanges);
        getNewsList(workingFunc.getMassFunc());
        getCommonNewsList();
        console.log("rebildNewsFunc finished");
    }

    function changeUserName(user) {
        console.log("changeUserName called");
        console.log("Prinyato imya=" + user);
        userName = user;
        var div1 = document.querySelector(".userName");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var obj1 = document.createElement('base');
        obj1.innerHTML = user.name;
        div1.appendChild(obj1);
        console.log("changeUserName finished");
    }

    function showAuthors() {
        console.log("showAuthors called");
        function showOnWindow(authMass) {
            var div1 = document.querySelector(".scrollMain");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            for (var i = 0; i < authMass.length; i++) {
                var obj1 = document.createElement('div');
                obj1.className = "newsBlock";
                var author = authMass[i];
                obj1.innerHTML = '<author onclick="workVar.getAuthorsArticlesParam(this.innerText)">' + author + "</author> ";
                console.log(author + " dobavlyau avtora");
                obj1.innerHTML = obj1.innerHTML + "<br>";
                console.log(obj1.innerText);
                div1.appendChild(obj1);
                var probel = document.createElement('div');
                probel.innerHTML = "<br>" + " ";
                div1.appendChild(probel);
            }

        }
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function () {
            var info = JSON.parse(this.responseText);
            showOnWindow(info);
            console.log("showAuthors finished");
        });
        oReq.open('get', '/authors');
        oReq.send();
    }

    function getNewsListWithTag(Ntag) {
        console.log("getNewsListWithTag called");
        var oReq = new XMLHttpRequest();
        console.log("oReq created");
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        function handler() {
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
            var div1 = document.getElementById("main");
            console.log("getNewsListWithTag in progress");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            var text = JSON.parse(this.responseText);
            console.log(text);
            var tempLen = text.length;
            var filteredArr = workingFunc.getFilteredMassFunc(text, 0, tempLen, Ntag);
            getNewsList(filteredArr);
            cleanUp();
        }
        oReq.addEventListener('load', handler);
        console.log("Event listener added");
        oReq.open('GET', '/array');
        console.log("Try to GET /array");
        oReq.send();
        var Nfilter = {tag: Ntag};
        console.log("getNewsListWithTag finished");
    }

    function visibilityFunc() {
        console.log("getVisibilityFunc" + "<br>");
        var obj = this;

        if (userName.type == "guest") {
            console.log("getVisibilityFunc finished");
            return "none";
        }
        if (userName.type == "redactor") {
            console.log("getVisibilityFunc finished");
            return "block";
        }
        console.log("getVisibilityFunc finished");
        return undefined;
    }

    function getAuthorsArticles() {
        console.log("getAuthorsArticles called!!!!!!!!!!!!!!!!!!!!!");
        var oReq = new XMLHttpRequest();
        console.log("oReq created");
        function cleanUp() {
            oReq.removeEventListener('load', handler);
        }
        function handler() {
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
            var div1 = document.getElementById("main");
            console.log("handler in getAuthorsArticles");
            while (div1.firstElementChild) {
                div1.removeChild(div1.firstChild);
            }
            var text = JSON.parse(this.responseText);
            cleanUp();
            console.log("text:");
            console.log(text);
            var tempLen = text.length;
            var filteredArr = workingFunc.getFilteredMassFunc(text, 0, tempLen, authorVar);
            console.log("filtered:");
            console.log(filteredArr);
            getNewsList(filteredArr);
            console.log("getAuthorsArticles: work in getNewsList finished");
        }
        var authorVar = {author: this.innerText};
        console.log("authorVar =");
        console.log(authorVar);
        if (authorVar.author) {
            oReq.addEventListener('load', handler);
            console.log("Event listener added");
            oReq.open('GET', '/array');
            console.log("Try to GET /array");
            oReq.send();
        }
        console.log("getAuthorsArticles finished");
    }

    function getAuthorsArticlesParam(author) {
        console.log("getAuthorsArticlesParam called");
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function () {
            var info = JSON.parse(this.responseText);
            var tempLen = info.length;
            console.log(author);
            console.log(info);
            console.log("Вызываю создание массива новостей " +
                "этого автора");
            var filteredArr = workingFunc.getFilteredMassFunc(info, 0, tempLen, {author: author});
            console.log("Массив получен:");
            console.log(filteredArr);
            console.log("Вывожу");
            getNewsList(filteredArr);
            console.log("getAuthorsArticlesParam finished");
        });
        var text = '/array';
        console.log(text);
        oReq.open('get', text);
        oReq.send();
    }

    function loginClicked() {
        console.log("loginClicked called");
        function loginButtonClicked() {
            var loginTextPole = document.getElementById('l_b_id');
            var pTextPole = document.getElementById("p_b_id");
            var tempUserName = loginTextPole.value;
            var tempUserParol = pTextPole.value;
            var user = {'name': tempUserName, 'parol': tempUserParol};
            var text;
            var oReq = new XMLHttpRequest();
            console.log("oReq created");
            function cleanUp() {
                oReq.removeEventListener('load', handler);
            }
            function handler() {
                text = JSON.parse(this.responseText);
                console.log(text);
                for (var i = 0; i < text.length; i++) {
                    if (user.name == text[i].name) {
                        if (user.parol == text[i].parol) {
                            workVar.userChange({name: tempUserName, type: "redactor"});
                            alert("good");
                            workVar.newsList();
                            cleanUp();
                            return;
                        }
                    }
                    else {
                        alert("bad");
                    }
                    workVar.newsList();
                    cleanUp();
                }
            }
            oReq.addEventListener('load', handler);
            console.log("Event listener added");
            oReq.open('GET', '/user');
            console.log("Try to GET user");
            oReq.send();
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
        loginButton.addEventListener('click', loginButtonClicked);
        getMainNewsScroll.appendChild(loginButton);

        var registerButton = document.createElement('button');
        registerButton.innerHTML = "<text> Registration </text>";
        getMainNewsScroll.appendChild(registerButton);
        console.log("loginClicked finished");
    }

    /*это также работает по кнопкам над главной лентой новостей*/
    return {
        newsList: getNewsList,
        commonNewsList: getCommonNewsList,
        createNews: createNewNews,
        add: addNewNews,
        deleteNews: deleteNews,
        change: changeNews,
        editNews: rebildNews,
        userChange: changeUserName,
        authors: showAuthors,
        tagNews: getNewsListWithTag,
        visibility: visibilityFunc,
        authorsArticle: getAuthorsArticles,
        getAuthorsArticlesParam: getAuthorsArticlesParam,
        loginClickFunc: loginClicked,
        getFullNews: showFullNews,
    };
}
