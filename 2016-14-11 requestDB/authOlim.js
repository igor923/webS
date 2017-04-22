/**
 * Created by a on 14.11.2016.
 */
var http =require("http");
var headers = require("./headers");/*загрузка модуля*/
var db =require("./connectDB");

http.createServer(function (req,res) {
    headers.setHeaders(res);
    if(req.method == "POST"){
        var reqBody = "";
        req.on("data",function (chunk) {reqBody=reqBody+chunk.toString();})
        req.on("end",function () {
            var pair = JSON.parse(reqBody);
            var sql ="SELECT * FROM pairs WHERE login = '"+pair.log+"'";
            db.query(sql,function (err,result) {
                if(result.length == 0)res.end("Wrong login");
                else if(result[0].password!=pair.psw)res.end("Wrong password");
                else {
                    sql="SELECT * FROM users where id ='"+result[0].id+"'";
                    db.query(sql,function (err,result) {

                        res.end(JSON.stringify((result[0])))
                    })
                }
               /* res.write(resp);
                res.end();*/
            })

        })
    }

}).listen(8081);
console.log("Server listening at http://127.0.0.1:8081");