/**
 * Created by a on 14.11.2016.
 */
var mysql=require('mysql');

module.exports = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "",
    database : "workplace"

});