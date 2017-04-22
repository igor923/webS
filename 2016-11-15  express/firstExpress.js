/**
 * Created by a on 15.11.2016.
 */
var http = require('http');
var express = require('express');
var app = express();
var headers = require("./headers");


http.createServer(app).listen(8081);
console.log("Server listening at http://127.0.0.1:8081");

app.use("/*",function (req,res,next) {  /*/middle ware*/
    headers.setHeaders(res);
    next();
})

app.get('/', function (req, res) {
    /*headers.setHeaders(res);*/
    res.send("Who are you?");
});
app.get('/S', function (req, res) {
    /*headers.setHeaders(res);*/
    res.send("Sasha?");
});
app.get('/M', function (req, res) {
   /* headers.setHeaders(res);*/
    res.send("Masha?");
});
app.get('/*', function (req, res) {
    /*headers.setHeaders(res);*/
    res.send("Wrong");
});



app.post("/*",function (req,res) {
   /* headers.setHeaders(res);*/

    var result="";
    req.on("data",function (chunk){result=result+chunk.toString();})
    req.on("end",function (){
        res.send(result);})
})