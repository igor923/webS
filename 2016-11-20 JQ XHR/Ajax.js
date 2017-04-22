/**
 * Created by a on 20.11.2016.
 */
var http=require('http');
var express=require('express');
var app = express();
var headers = require("./headers");

http.createServer(app).listen(8081);

console.log("Server listening at http://127.0.0.1:8081");

app.use("/",function (req,res,next) {
    headers.setHeaders(res);
    next();
});

app.get("/",function (req,res) {
    res.end("GET req received"+req.url)
});

app.post("/",function (req,res) {
    var result="";
    req.on("data", function (chunk) {result =result+chunk.toString();
    req.on("end",function () {
        res.end("POST request received: "+result);
    });


    })
});