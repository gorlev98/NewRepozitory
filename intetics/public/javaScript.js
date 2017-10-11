/**
 * Created by Лев on 05.10.2017.
 */
"use strict";
function lock(){
    var tag_array=["Best","Sky","Man","Disaster","Nature","War","Future","Feelings"];
    function validate_registration(username,email,password,password2){
        function validate_username(){
            if(username.length<=0){
                alert("username error");
                return false;
            }
            else{
                var regex = /^[a-zA-Z]+$/;
                /*for(var i = 0;o<username.length;i++){
                    if(!(regex.test(username[i]))){
                        return false;
                    }
                }*/
                if(!regex.test(username)){
                    alert("username error");
                    return false;
                }
                else {
                    alert("username good");
                    return true;
                }
            }
        }
        function validate_email(){
            if(email.length<=0)
            {
                alert("email error");
                return false;
            }
            else {
                var regex= /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if(!regex.test(email)){
                    alert("email error");
                    return false;
                }
                else{
                    return true;
                }
            }
        }
        function validate_password(){
            if(password.length<=5){
                alert("password error");
                return false;
            }
            else{
                if(password==password2){
                    var regex=/[a-zA-Z0-9]+/
                    if(regex.test(password)){
                        var good=0;
                        var regexD=/[0-9]/;
                        var regexL=/[a-z]/;
                        var regexU=/[A-Z]/;
                        var i=0;
                        for(;i<password.length;i++) {
                            if(regexD.test(password[i]))
                            {
                                i=password.length;
                                good++;
                            }
                        }
                        i=0;
                        for(;i<password.length;i++) {
                            if(regexL.test(password[i]))
                            {
                                i=password.length;
                                good++;
                            }
                        }
                        i=0;
                        for(;i<password.length;i++) {
                            if(regexU.test(password[i]))
                            {
                                i=password.length;
                                good++;
                            }
                        }
                        if(good==3){
                            alert("email good");
                            return true;
                        }
                        else {
                            alert("uncorrect construction of password");
                            return false;
                        }
                    }
                    else{
                        alert("password error - nousable elements");
                        return false;
                    }
                }
                else {
                    alert("password & password2 are not equal");
                    return false;
                }
            }
        }
        if(!validate_username()){
            return false;
        }
        if(!validate_email()){
            return false;
        }
        if(!validate_password()){
            return false;
        }
        return true;
    }
    function correct_tags(tag_line){
        var splitted_tags = tag_line.split(/ /);
        for (var i = 0; i < splitted_tags.length; i++) {
            for (var j = 0; j < tag_array.length; j++) {
                if (j == tag_array.length - 1) {
                    if (splitted_tags[i] != tag_array[j]) {
                        console.log("Error, tag elem=" + splitted_tags[i]);
                        return false;
                    }
                }
                if (splitted_tags[i] == tag_array[j]) {
                    j = tag_array.length;
                }

            }
        }
        console.log("good work");
        return true;
    }
    return {
        validate_registration: validate_registration,
        tag_array:tag_array,
        correct_tags:correct_tags
    }
}
function work_with_window(){
    var lock_var = lock();
    function construct_tag_line(){
        var temp_lock=lock();
        var tag_line = document.getElementById("tag_line");
        var date=new Date().getSeconds();
        var start = date%(temp_lock.tag_array.length);
        var tagline_len=5;
        if(tagline_len>temp_lock.tag_array.length){
            tagline_len=temp_lock.tag_array.length;
        }
        tag_line.innerText="e.g.";
        for(var i=0;i<tagline_len;i++){
            tag_line.innerHTML=tag_line.innerHTML+"<tag onclick='func_variable.search_clicked(this.innerText)'>"+temp_lock.tag_array[start]+"</tag><space>_</space>";
            start++;
            if(start==temp_lock.tag_array.length)
            {
                start=0;
            }
        }
    }
    var is_login=0;
    var new_picture_photo="http://computers-repair.ru/wp-content/uploads/2016/01/positive-affirmations-daily-affirmations-1024x1024.png";
    var no_picture_src = "No picture.png";
    var picture_mass=[{name:"0",tag:"Disaster",src:"https://im0-tub-by.yandex.net/i?id=16d36fc1e03a8d9249b9b87a3a324a84&n=13",info:"info0"},
        {name:"1asdf",tag:"Man",src:"https://im0-tub-by.yandex.net/i?id=a810c2d23c741c76264d009e20d230b2&n=13",info:"info1"},
        {name:"2asdf",tag:"Best Man",src:"http://i.huffpost.com/gen/1360140/images/o-THUMBS-UP-facebook.jpg",info:"info2"},
        {name:"2.1asdf",tag:"Man",src:"http://cf.ltkcdn.net/stress/images/std/189582-260x260-Angry-People-Clipart-4.jpg",info:"info2.1"},
        {name:"2.2asdf",tag:"Best Man",src:"http://i.huffpost.com/gen/1360140/images/o-THUMBS-UP-facebook.jpg",info:"info2.2"},
        {name:"3asdf",tag:"Best Sky",src:"http://333v.ru/uploads/64/64ca084bdb8b9933b4550a486f476d11.jpg",info:"info2"},
        {name:"4asdf",tag:"Sky",src:"https://w-dog.net/wallpapers/10/0/450133090777939/ocean-horizon-sky-clouds-the-distance-ships-flowers-beauty.jpg",info:"info2"},
        {name:"5asdf",tag:"War",src:"http://sf.co.ua/13/07/wallpaper-2893325.jpg"},
        {name:"6asdf",tag:"Nature",src:"http://imagine.pics/images/262/262326.jpg"},
        {name:"7asdf",tag:"Feelings",src:"https://im0-tub-by.yandex.net/i?id=beb172ab27b6e2bc59b32f6e17dafc32&n=13"},
        {name:"7asdf",tag:"Feelings",src:"http://s-media-cache-ak0.pinimg.com/236x/bf/f6/c6/bff6c6aa9f44dc9983a16856150c7343.jpg"}
        ];

    var login_mass =[{username:"userA",password:"IdontK9ou",email:"user1@mail.de"},
        {username:"userB",password:"MeT000",email:"hello@mail.by"},
        {username:"userC",password:"Just2do",email:"frombehind@mail.ru"}];

    function get_picture_list(picture_list){
        var div1 = document.querySelector(".picture_list");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }
        var new_picture = document.createElement('div');
        new_picture.className="createNewPictureButton";
        new_picture.innerHTML='<a class="createNewPictureButtonBackground" onclick="func_variable.add_picture()">' +
            '<img width=500px height=500px src='+new_picture_photo+'>'+-1+'</a>';
        new_picture.id=-1;
        div1.appendChild(new_picture);
        div1.innerHTML=div1.innerHTML+"<space>__</space>";

        if(picture_list==undefined){
            for(var i=0;i<picture_mass.length;){
                var picture = document.createElement('div');
                picture.className="lookPictureButton";
                picture.innerHTML= picture.innerHTML+'<a class="lookPictureButtonBackground">' +
                    '<img id='+picture_mass[i].name+' width=500px height=500px src='+picture_mass[i].src+'></a>';
                picture.id=i;
                div1.appendChild(picture);
                div1.innerHTML=div1.innerHTML+"<space>__</space>";
                i++;
                if((i+1)%3==0){
                    var enter = document.createElement('div');
                    enter.innerHTML = "<br>" + " ";
                    div1.appendChild(enter);
                }
            }
        }
        else{
            for(var i=0;i<picture_list.length;){
                var picture = document.createElement('div');
                picture.className="lookPictureButton";
                picture.innerHTML= picture.innerHTML+'<a class="lookPictureButtonBackground">' +
                    '<img id='+picture_list[i].name+' width=500px height=500px src='+picture_list[i].src+'></a>';
                picture.id=i;
                div1.appendChild(picture);
                div1.innerHTML=div1.innerHTML+"<space>__</space>";
                i++;
                if((i+1)%3==0){
                    var enter = document.createElement('div');
                    enter.innerHTML = "<br>" + " ";
                    div1.appendChild(enter);
                }
            }
        }
        construct_tag_line();
    }
    function login_clicked(){
        console.log("login_clicked function");
        function login_button_clicked(){
            var emailTextPole = document.getElementById('eid').value;
            var password = document.getElementById("pid").value;
            alert(emailTextPole);
            alert(password);
            var good=-1;
            for(var i=0;i<login_mass.length;i++){
                alert(login_mass[i].email+"&"+emailTextPole);
                if(login_mass[i].email==emailTextPole){
                    alert(login_mass[i].password+"&"+password);
                    if(login_mass[i].password==password)
                    {
                        good=i;
                        i=login_mass.length+1;
                    }
                }
            }
            if(good==-1){
                alert("Not found");
            }
            else{
                alert("You are log in");
                is_login=1;
                var username_box = document.getElementById("userNameBox");
                username_box.innerText="Hello, "+login_mass[good].username;
            }
            var main_window=document.querySelector(".allWindow");
            main_window.removeChild(main_window.lastElementChild);
            func_variable.get_picture_list();
        }
        function cancel(){
            var main_window=document.querySelector(".allWindow");
            main_window.removeChild(main_window.lastElementChild);
        }
        var main_window=document.querySelector(".allWindow");
        var logo_box = document.createElement('div');
        logo_box.className="logo-registerBox";
        logo_box.innerText="Sign in";
        var email_text=document.createElement('div');
        email_text.className="logText";
        email_text.innerText="Input your email";
        logo_box.appendChild(email_text);

        var email_string=document.createElement('input');
        email_string.className="logString";
        email_string.id="eid";
        logo_box.appendChild(email_string);

        var password_text=document.createElement('div');
        password_text.className="logText";
        password_text.innerText="Input your password";
        logo_box.appendChild(password_text);

        var password_string=document.createElement('input');
        password_string.className="logString";
        password_string.id="pid";
        logo_box.appendChild(password_string);

        logo_box.innerHTML=logo_box.innerHTML+"<br>";

        var loginButton = document.createElement('button');
        loginButton.innerText = " Log in ";
        loginButton.addEventListener('click', login_button_clicked);
        logo_box.appendChild(loginButton);

        var cancelButton = document.createElement('button');
        cancelButton.innerText = " Cancel ";
        cancelButton.addEventListener('click', cancel);
        logo_box.appendChild(cancelButton);

        main_window.appendChild(logo_box);
        console.log("login_clicked finished");
    }
    function registration_clicked(){
        console.log("registration_clicked function");
        function registration_button_clicked(){
            var username=document.getElementById('uid').value;
            var email = document.getElementById('eid').value;
            var password = document.getElementById("pid").value;
            var password2=document.getElementById("p2id").value;

            if(lock_var.validate_registration(username,email,password,password2))
            {
                login_mass.push({username:username,password:password,email:email});
                alert("You are registrated & log in");
                is_login=1;
                var username_box = document.getElementById("userNameBox");

                username_box.innerText="Hello, "+login_mass[login_mass.length-1].username;
            }
            document.removeChild(document.querySelector("logo-registerBox"));
            var main_window=document.querySelector(".allWindow");
            main_window.removeChild(main_window.lastElementChild);
            func_variable.get_picture_list();
        }
        function cancel(){
            var main_window=document.querySelector(".allWindow");
            main_window.removeChild(main_window.lastElementChild);
        }
        var main_window=document.querySelector(".allWindow");
        var logo_box = document.createElement('div');
        logo_box.className="logo-registerBox";
        logo_box.innerText="Sign up";
        var username_text=document.createElement('div');
        username_text.className="logText";
        username_text.innerText="Input your username";
        logo_box.appendChild(username_text);

        var username_string=document.createElement('input');
        username_string.className="logString";
        username_string.id="uid";
        logo_box.appendChild(username_string);

        var email_text=document.createElement('div');
        email_text.className="logText";
        email_text.innerText="Input your email";
        logo_box.appendChild(email_text);

        var email_string=document.createElement('input');
        email_string.className="logString";
        email_string.id="eid";
        logo_box.appendChild(email_string);

        var password_text=document.createElement('div');
        password_text.className="logText";
        password_text.innerText="Input your password";
        logo_box.appendChild(password_text);

        var password_string=document.createElement('input');
        password_string.className="logString";
        password_string.id="pid";
        logo_box.appendChild(password_string);

        var password2_text=document.createElement('div');
        password2_text.className="logText";
        password2_text.innerText="Input your password again";
        logo_box.appendChild(password2_text);

        var password2_string=document.createElement('input');
        password2_string.className="logString";
        password2_string.id="p2id";
        logo_box.appendChild(password2_string);

        logo_box.innerHTML=logo_box.innerHTML+"<br>";

        var registerButton = document.createElement('button');
        registerButton.innerText = " Log up ";
        registerButton.addEventListener('click', registration_button_clicked);
        logo_box.appendChild(registerButton);

        var cancelButton = document.createElement('button');
        cancelButton.innerText = " Cancel ";
        cancelButton.addEventListener('click', cancel);
        logo_box.appendChild(cancelButton);

        main_window.appendChild(logo_box);
        console.log("registraion_clicked finished");
    }
    function add_picture(){
        function pshow_clicked(){
            var pict = document.getElementById("picture_show_id");
            var Nsrc=document.getElementById("name_id").value;
            pict.src = Nsrc;
            pict.onload=function() {
                if (this.width + this.height == 0) {
                    this.onerror();
                    return;
                }
            }
            pict.onerror=function(){
                alert("Can't load your image");
                pict.src=no_picture_src;
            }
        }
        function padd_clicked(){
            var tag_line = document.getElementById("tag_id").value;
            var src = document.getElementById("name_id").value;
            var pict_name=document.getElementById("new_name_id").value;
            var addition=document.getElementById("addition_id").value;
            var pict = document.getElementById("picture_show_id");
            pict.src=src;
            var load_picture=1;
            pict.onload=function() {
                if (this.width + this.height == 0) {
                    this.onerror();
                    return;
                }
            }
            pict.onerror=function(){
                alert("Can't save your image - it's unloadable");
                pict.src=no_picture_src;
                load_picture=0;
                return;
            }

            if(lock_var.correct_tags(tag_line)){
                if(pict_name.length>0) {
                    if(load_picture==1) {
                        picture_mass.push({name: pict_name, tag: tag_line, src: src, info: addition});
                        func_variable.get_picture_list();
                    }
                }
                else{
                    alert("Can't save your image - input name of it");
                }
            }
            else{
                alert("Can't save your image - uncorrect tags");
            }
        }
        function cancel(){
            func_variable.get_picture_list();
        }
        var div1 = document.querySelector(".picture_list");
        while (div1.firstElementChild) {
            div1.removeChild(div1.firstChild);
        }

        var picture_parameters=document.createElement('div');
        picture_parameters.className="pictureParam";
        picture_parameters.innerText="Picture Information";

        var name_string_text=document.createElement('div');
        name_string_text.innerText="Input the link address of your picture";
        picture_parameters.appendChild(name_string_text);
       // picture_parameters.innerHTML=picture_parameters.innerHTML+"<br>";

        var name_string=document.createElement('input');
        name_string.className="setPictureName";
        name_string.id="name_id";
        picture_parameters.appendChild(name_string);
        picture_parameters.innerHTML=picture_parameters.innerHTML+"<br><br>";

        var tag_string_text=document.createElement('div');
        tag_string_text.innerText="Input the tags of your picture";
        picture_parameters.appendChild(tag_string_text);
       // picture_parameters.innerHTML=picture_parameters.innerHTML+"<br>";

        var tag_string=document.createElement('input');
        tag_string.className="setPictureName";
        tag_string.id="tag_id";
        picture_parameters.appendChild(tag_string);
        picture_parameters.innerHTML=picture_parameters.innerHTML+"<br><br>";

        var new_name_text=document.createElement('div');
        new_name_text.innerText="Input the name of your picture";
        picture_parameters.appendChild(new_name_text);
        //picture_parameters.innerHTML=picture_parameters.innerHTML+"<br>";

        var new_name_string=document.createElement('input');
        new_name_string.className="setPictureName";
        new_name_string.id="new_name_id";
        picture_parameters.appendChild(new_name_string);
        picture_parameters.innerHTML=picture_parameters.innerHTML+"<br><br>";

        var addition_text=document.createElement('div');
        addition_text.innerText="Input the addition info of your picture";
        picture_parameters.appendChild(addition_text);
       // picture_parameters.innerHTML=picture_parameters.innerHTML+"<br>";

        var addition_string=document.createElement('input');
        addition_string.className="setPictureInfo";
        addition_string.id="addition_id";
        picture_parameters.appendChild(addition_string);
        picture_parameters.innerHTML=picture_parameters.innerHTML+"<br><br>";
       /**/
        var button_picture_add = document.createElement('button');
        button_picture_add.innerText = "Add the picture";
        button_picture_add.addEventListener('click', padd_clicked);
        picture_parameters.appendChild(button_picture_add);

        var cancel_button = document.createElement('button');
        cancel_button.innerText = "Cancel";
        cancel_button.addEventListener('click', cancel);
        picture_parameters.appendChild(cancel_button);

        div1.appendChild(picture_parameters);

        var picture = document.createElement('div');
        picture.className="picturePreView";
        picture.innerText="Picture PreView";
        var picture_show = new Image(500,500);
        picture_show.className="addPictureView";
        picture_show.src=no_picture_src;
        picture_show.id="picture_show_id";
        picture.appendChild(picture_show);
        var button_picture_show = document.createElement('button');
        button_picture_show.innerText = " Show the picture";
        button_picture_show.addEventListener('click', pshow_clicked);
        picture.appendChild(button_picture_show);

        var tags = document.createElement('div');
        tags.className="pictureAllTags";
        tags.innerText="The array of usable tags for help";
        tags.id="tag_id";
        tags.innerHTML=tags.innerHTML+"<br>";
        for(var i =0;i<lock_var.tag_array.length;i++){
            console.log(lock_var.tag_array[i]);
            tags.innerHTML=tags.innerHTML+"<tag>"+lock_var.tag_array[i]+"</tag><br>";
        }
        div1.appendChild(tags);

        div1.appendChild(picture);


    }
    function search_clicked(tag){
        var search_line;
        if(tag){
            search_line=tag;
        }
        else{
            search_line= document.getElementById('tag_input').value;
        }
        var splitted_search_tags = search_line.split(/ /);
        if(lock_var.correct_tags(search_line)){
            var filtered_picture_mass=[];
            for(var i=0;i<picture_mass.length;i++){
                var splitted_picture_tags=picture_mass[i].tag.split(/ /);
                for(var j=0;j<splitted_picture_tags.length;j++){
                    if(splitted_search_tags.indexOf(splitted_picture_tags[j])!=-1)
                    {
                        filtered_picture_mass.push(picture_mass[i]);
                        console.log(picture_mass[i].name);
                        j=splitted_picture_tags.length
                    }
                }
            }
            if(filtered_picture_mass.length!=0) {
                func_variable.get_picture_list(filtered_picture_mass);
            }
            else{
                alert("Not found");
                func_variable.get_picture_list();
            }
        }
        else{
            alert("That is not correct tag");
        }
    }
    return {
        get_picture_list: get_picture_list,
        login_clicked: login_clicked,
        registration_clicked: registration_clicked,
        add_picture: add_picture,
        tag_line:construct_tag_line,
        search_clicked:search_clicked
    }
}
