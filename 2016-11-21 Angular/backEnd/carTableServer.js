/**
 * Created by a on 21.11.2016.
 */
var http = require('http');
var express=require('express');
var app = express();
var headers = require("./headers");
var db =require("./connectDB");
http.createServer(app).listen(8081);
console.log("Server listening at http://127.0.0.1:8081");



app.use("/",function (req,res,next) {
    headers.setHeaders(res);
    next();
});


function Car (v,m,y,e){
    this.VIN = v;
    this.model = m;
    this.year = y;
    this.engine = e;
}

var garage =[];
garage.push(new Car("12345ab","Zhiguli",1983,1.3));
garage.push(new Car("45464ab","Tavria",1980,1.3));
garage.push(new Car("34644ab","Volga",1985,1.5));
garage.push(new Car("98745ab","AZLKA",1990,1.2));
garage.push(new Car("19995ab","RAF",1983,1.5));


app.get("/",function (req,res) {
    db.query("SELECT * FROM garage", function (err,results) {
        res.end(JSON.stringify(results));
    })

});

/*
app.post("/",function (req,res) {
    var result="";
    req.on("data", function (chunk) {result =result+chunk.toString();
        req.on("end",function () {
            res.end("POST request received: "+result);
        });


    })
});*/
