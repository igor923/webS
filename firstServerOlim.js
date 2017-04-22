/**
 * Created by a on 13.11.2016.
 */
var http = require("http");
var headers = require("./headers");

http.createServer(function (req,res) {

    headers.setHeaders(res);
    if (req.method =="POST"){
        var postData="";
        req.on("data",function(chunk){console.log(postData=postData+chunk.toString());})
        req.on("end",function () {
            var obj =JSON.parse(postData);
            console.log(obj);
            obj.name="Sasha";
            res.write(JSON.stringify(obj));
            res.end();
        });

    }

    if (req.method =="GET") {


        res.setHeader("Access-Control-Allow-Origin", "*");
        var requestUrl = req.url;
        if (requestUrl == "/Vania")
            res.write("Hello,Vania");

        else if (requestUrl == "/Petya") {
            res.write("Go to hell, Petya");
        } else {
            res.write("Wrong request");
        }
        res.end();
    }

}).listen(8081);


console.log("Server listening at http://127.0.0.1:8081");