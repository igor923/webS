/**
 * Created by a on 18.11.2016.
 */
var http=require('http');
var express=require('express');
var app =express();
var headers= require('./headers');


http.createServer(app).listen(8081);
console.log("Server listening at http://127.0.0.1:8081");

app.use("/*",function (req,res,next) {
    headers.setHeaders(res);
    next();
});


app.post("/schedule",function (req,res) {
    var result="";
    req.on("data",function (chunk) {result=result+chunk.toString();})

    req.on("end",function () {
        var forPrint=JSON.parse(result);
            console.log(forPrint);
        var days ={ days:[

            {
                "date":"11-05-2016",
                "lessons":[
                    {
                        "time":"8-00",
                        "classRoom":"AUDITORIA-01",
                        "teacher":"teacher",
                        "subject":"subject"
                    },
                    {
                        "time":"12-00",
                        "classRoom":"AUDITORIA-02",
                        "teacher":"teacher",
                        "subject":"subject"
                    }
                ]
            },

            {
                "date":"12-05-2016",
                "lessons":[
                    {
                        "time":"8-00",
                        "classRoom":"AUDITORIA-03",
                        "teacher":"teacher",
                        "subject":"subject"
                    },
                    {
                        "time":"12-00",
                        "classRoom":"AUDITORIA-02",
                        "teacher":"teacher",
                        "subject":"subject"
                    }
                ]
            }

        ]};

        res.send(JSON.stringify(days))
    })
});


app.post("/attendance",function (req,res) {
    var result="";
    req.on("data",function (chunk) {result=result+chunk.toString();})

    req.on("end",function () {
        var forPrint=JSON.parse(result);
        console.log(forPrint);
        var attendance ={ attend:[
            {"attend":"YA BYL"}
        ]
        };

        res.send(JSON.stringify(attendance))
    })
});

app.post("/payments",function (req,res) {
    var result="";
    req.on("data",function (chunk) {result=result+chunk.toString();})

    req.on("end",function () {
        var forPrint=JSON.parse(result);
        console.log(forPrint);
        var payments ={ payments:[
            {"payments":"YA PLATIL"}
        ]
        };

        res.send(JSON.stringify(payments))
    })
});