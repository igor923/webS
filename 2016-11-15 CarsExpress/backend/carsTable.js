/**
 * Created by a on 15.11.2016.
 */
var http = require('http');
var express =require('express');
var app =express();
var headers= require('./headers');
var db=require('./connectDB');

http.createServer(app).listen(8081);
console.log("Server listening at http://127.0.0.1:8081");

app.use("/*",function (req,res,next) {
    headers.setHeaders(res);
    next();
});

app.post("/add",function (req,res) {
    var result="";
    req.on("data",function (chunk) {result=result+chunk.toString();})
    req.on("end",function () {
        var car =JSON.parse(result);
        var sql = "INSERT INTO cars VALUES('"+
                car.VIN + "','"+
                car.model+ "',"+
                car.year + ","+
                car.engine+ ")";
        console.log(sql);
        db.query(sql,function (err,resCar) {
            db.query("SELECT * FROM cars",function (err,allCars) {
                res.send(JSON.stringify(allCars));
                res.end();
            });
        })
    })
});


app.post("/remove",function (req,res) {
    var result="";
    req.on("data",function (chunk) {result=result+chunk.toString();});
    req.on("end",function () {
        var car = JSON.parse(result);
        var sql = "DELETE from cars WHERE vin ='"+
                car.VIN+"'";
        db.query(sql,function (err,resCar) {
                res.send("OK");
                res.end();
        })
    });
});


