/**
 * Created by a on 31.03.2017.
 */
var request = require('request');
var select = require('cheerio-select');
var cheerio = require('cheerio');

var headers = require("./headers");
let express = require('express');
let server = express();
let port = 8889;
let iconv = require('iconv-lite');







server.use("/*", function (req, res, next) {

    headers.setHeaders(res);

    next();
});

server.listen(port, function () {
    console.log('Server is listening http://127.0.0.1: ' + port)
});

// http.createServer(app).listen(8088);
// console.log("Server listening at http://127.0.0.1:8088");

server.get('/', function (req, res) {
    /*headers.setHeaders(res);*/
    var result=[];
     getMaccabiYaffo().then(function (data) {
         result[0] = data;
            a().then(function (data) {
               result[1] = data;
                res.send(result);
            })

     }).catch(function (err) {
             console.log(err);
         }
     );

    function a() {

        return new Promise(function(resolve,reject){
             getKatamon().then(function (data) {
                 resolve(data)
             });

        });

    }

});

function getMaccabiYaffo() {
    return new Promise(function (resolve, reject) {
        request('http://football.org.il/Clubs/Pages/TeamDetails.aspx?TEAM_ID=5775', function (err, res, body) {
            var calendarMaccabiYaffo = {days: "", time: "", team1: "",team2: "",stadio:""};
            if (res.statusCode == 200) {

                var $ = cheerio.load(body);

                var days = [];
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(1)').each(function (index,obj) {
                    days.push($(this).text());
                });
                calendarMaccabiYaffo.days = days;


                var time=[];
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(11)').each(function(index,obj){
                    if($(this).text() == ''){
                        time.push('ש')
                    }else {
                        time.push($(this).text());
                    }
                });
                calendarMaccabiYaffo.time = time;

                var team1=[];
                team1.push("קבוצה 1")
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(7) a:nth-child(1)').each(function(index,obj){
                    team1.push($(this).text());
                });
                calendarMaccabiYaffo.team1 = team1;

                var team2=[];
                team2.push("קבוצה 2")
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(7) a:nth-child(2)').each(function(index,obj){
                    team2.push($(this).text());

                });
                calendarMaccabiYaffo.team2 = team2;

                var stadio=[];
                stadio.push("מגרש");
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(9) a:nth-child(1)').each(function (index,obj) {
                    if($(this).text() == ''){
                        stadio.push('ש')
                    }else {
                        stadio.push($(this).text());
                    }
                });
                calendarMaccabiYaffo.stadio = stadio;



                resolve(calendarMaccabiYaffo);
            }
            else {
                console.log(err);
                reject(err);
            }
        });
    });
}

function getKatamon() {
    return new Promise(function (resolve, reject) {
        request('http://football.org.il/Clubs/Pages/TeamDetails.aspx?TEAM_ID=5981&SEASON_ID=18', function (err, res, body) {
            var calendarKatamon =  {days: "", time: "", team1: "",team2: "",stadio:""};
            if (res.status == 200 || err == null) {
                var $ = cheerio.load(body);

                var days = [];
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(1)').each(function (index,obj) {
                    days.push($(this).text());
                });
                calendarKatamon.days = days;


                var time=[];
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(11)').each(function(index,obj){
                    if($(this).text() == ''){
                        time.push('ש')
                    }else {
                        time.push($(this).text());
                    }
                });
                calendarKatamon.time = time;

                var team1=[];
                team1.push("קבוצה 1")
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(7) a:nth-child(1)').each(function(index,obj){
                    team1.push($(this).text());
                });
                calendarKatamon.team1 = team1;

                var team2=[];
                team2.push("קבוצה 2")
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(7) a:nth-child(2)').each(function(index,obj){
                    team2.push($(this).text());

                });
                calendarKatamon.team2 = team2;

                var stadio=[];
                stadio.push("מגרש");
                $('body #MSOZoneCell_WebPartWPQ8 table table table tr td:nth-child(9) a:nth-child(1)').each(function (index,obj) {
                    if($(this).text() == ''){
                        stadio.push('ש')
                    }else {
                        stadio.push($(this).text());
                    }
                });
                calendarKatamon.stadio = stadio;



                resolve(calendarKatamon);
            }
            else {

                console.log(err);
                reject(err);
            }
    });
 });

}














