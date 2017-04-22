

var http = require('http');
var db = require('./connectDB');
var headers = require('./headers');

http.createServer(function (req,res) {
    db.query("SELECT * FROM countrycode", function (err, result) {

        //db.end();
        headers.setHeaders(res);
        res.write(JSON.stringify(result));
        res.end();
    });
}).listen(8081);
console.log("Server listening at http://127.0.0.1:8081");

// db.query("SELECT * FROM country", function (err, result) {
//     console.log(result);
//     db.end();
// });