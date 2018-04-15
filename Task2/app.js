/**
 * Created by Лев on 15.04.2018.
 */
var express = require('express'),
    bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());//to parse json
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

var rulesArray=[1,3,0,2,4];
var names=["Stone","Scissors","Paper","Lizard","Spock"];
var resultMass=["Gamer Win","Draw","Robot Win"];

var compRes;//result of comp
var prehashString;//pre-hashed string


app.get('/hash',function(req,res){//return us the result of comp in hash
    function robotAnswer(){
        function robotChoose(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function randomString(robotAnswer){
            var text = robotAnswer.toString();
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            randomString=text;
            console.log("RS="+randomString);
            return text;
        }
        var max=rulesArray.length;
        compRes=robotChoose(0,max);
        console.log("compRes="+compRes);
        var toHash=randomString(compRes);
        prehashString=toHash;
        console.log("pH="+prehashString);
        var hash=SHA1(toHash);
        console.log("H="+hash);
        return hash;
    }
    var result=robotAnswer();
    res.send(result);
});

app.get('/battle',function(req,res){//battle & return us result of it and pre-hashed string
    function battle(roboAnswer,gamerAnswer)//2 id in rulesArray;
    {
        console.log("R="+roboAnswer+",G="+gamerAnswer);
        var go=0;//nobody win
        var step=rulesArray.length/2;
        if(roboAnswer>gamerAnswer){
            if(roboAnswer-gamerAnswer<step){
                go=-1;//robot win
            }
            else{
                go=1;//gamer win
            }
        }
        if(roboAnswer<gamerAnswer){
            if(gamerAnswer-roboAnswer<step){
                go=1;//gamer win
            }
            else
            {
                go=-1;//robot win
            }
        }
        return go;
    }
    var gamerAnswer=req.query.answer;
    var bResult=battle(compRes,gamerAnswer);
    var winner=resultMass[bResult+1];
    var result={winner:winner,phString:hashString};
    res.send(result);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});