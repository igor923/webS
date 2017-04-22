var express = require("express");
// var bodyParser = require("body-parser");
var path = require('path');
// var path = require('angular2');
var http = require("http");
var url = require('url');
var mysql = require('mysql');
var app = express();
var port = 3000;
var headers = require('./appSchedule/LearningShedule/headers');
var dataBaseName = 'learningscheduler';
var randtoken = require('rand-token');
var uid = require('rand-token').uid;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: dataBaseName,
    multipleStatements: true
});
var fs = require("fs");

app.listen(port, function () {
    console.log("Started on PORT " + port);
});
app.get('/*', function (getReq, getRes) {
    headers.setHeaders(getRes);
    getReq.on('data', function (chunk) {
        console.log(chunk)
    });
    getReq.on('end', function (getData) {
        switch (getReq.path) {
            // default page
            case '/': {
                // getRes.sendfile("index.html");
                getRes.sendFile("index.html", {root: __dirname});
                break;
            }

            case '/404': {
                getRes.sendFile("404.png", {root: __dirname});
                break;
            }

            default: {
                getRes.sendFile(getReq.path.replace('/', ''), {root: __dirname});
            }
        }
    });
});

app.post('/*', function (postReq, postRes) {
    var bodyStringData = '';
    var bodyData = {};
    postReq.on("data", function (chunk) {
        bodyStringData = bodyStringData + chunk;
    });

    postReq.on("end", function () {
        bodyData = JSON.parse(bodyStringData);
        console.log("bodyStringData ", bodyStringData);
        console.log("bodyData ", bodyData);
        var result = {};
        switch (postReq.path) {


            // получить расписание,
            // содержимое определяется автоматически по токену
            // TODO: сделать фильтрацию по дате
            case '/get/scheduler': {
                console.log(bodyData);
                sqlScript = 'select role from auth where ?';
                connection.query(
                    sqlScript,
                    {token: bodyData.token},
                    function (err, sqlResRole) {
                        var sqlFile = '';
                        var role = sqlResRole[0].role;
                        switch (role) {
                            case 'S': {
                                console.log('STUDENT');
                                sqlFile = 'sql/getSchedulerStudentByToken.sql';
                                break;
                            }
                            case 'T': {
                                console.log('teacher');
                                sqlFile = 'sql/getSchedulerTeacherByToken.sql';
                                break;
                            }
                        }
                        fs.readFile(
                            sqlFile,
                            'utf-8',
                            function (err, data) {
                                var sqlScript = data.replace("__TOKEN__", bodyData.token);
                                if (bodyData.date) {
                                    sqlScript = sqlScript.replace(new RegExp("__DATE__", 'g'), bodyData.date);
                                }
                                else {
                                    sqlScript = sqlScript.replace(new RegExp("__DATE__", 'g'), "2015-05-15")
                                }
                                console.log(sqlScript);
                                connection.query(sqlScript, {}, function (sqlErr, sqlRes, sqlFields) {
                                    console.log(sqlErr);
                                    console.log(sqlRes);
                                    result = sqlRes;
                                    postRes.end(JSON.stringify(result));
                                });
                            })
                    });
                break;
            }

            //
            // получить список студентов в зависимости от урока
            // TODO: сделать проверку безопасности по токену
            case '/get/students': {
                sqlFile = 'sql/getListStudentsByLessonId.sql';
                fs.readFile(
                    sqlFile,
                    'utf-8',
                    function (err, data) {
                        console.log(err);
                        sqlScript = data.replace("__IDLESSON__", bodyData.idLesson);
                        connection.query(sqlScript, {}, function (sqlErr, sqlRes, sqlFields) {
                            console.log(sqlRes);
                            var sqlScript = 'insert into attendance set ?';
                            for (var i = 0; i < sqlRes.length; i++) {
                                var sqlSet = {
                                    idUserStudent: sqlRes[i].idStudent,
                                    idLesson: sqlRes[i].idLesson,
                                    notes: '',
                                    presense: 0
                                };
                                connection.query(
                                    sqlScript,
                                    sqlSet,
                                    function (sqlErr, sqlRes) {
                                        console.log(sqlRes);
                                        console.log(sqlErr);
                                    })
                            }


                            postRes.send(JSON.stringify(sqlRes))
                        });
                    })
                break;
            }

            // Установить присутсвие группе студентов
            // TODO: сделать проверку безопасности по токену
            case '/set/attendance': {
                var arrayStates = bodyData;
                var sqlFile = 'sql/setPresense.sql';
                fs.readFile(sqlFile, 'utf-8', function (err, data) {
                    var sqlScript = data;
                    var fullSqlScript = '';
                    for (var j = 0; j < bodyData.length; j++) {
                        fullSqlScript = fullSqlScript +
                            sqlScript
                                .replace('_1_', bodyData[j].presense)
                                .replace('_2_', bodyData[j].notes)
                                .replace('_3_', bodyData[j].idUserStudent)
                                .replace('_4_', bodyData[j].idLesson)
                            + '\n';
                    }
                    console.log(bodyData);
                    console.log(fullSqlScript);
                    connection.query(fullSqlScript, {}, function (sqlErr, sqlRes, sqlFields) {
                        console.log(sqlErr, sqlFields, sqlRes);
                    });
                    postRes.send(JSON.stringify(result));
                });
                break;
            }

            // получить посещаемость по токену
            case '/get/attendance': {
                sqlFile = 'sql/getAttendanceStudent.sql';
                fs.readFile(sqlFile, 'utf-8', function (err, data) {
                    var sqlScript = data
                        .replace('__TOKEN__', bodyData.token)
                        .replace(new RegExp("__DATE__", 'g'), bodyData.date);
                    console.log(sqlScript);
                    connection.query(sqlScript, {}, function (sqlErr, sqlRes, sqlFields) {
                        console.log(sqlErr, sqlFields, sqlRes);
                        postRes.send(JSON.stringify(sqlRes));

                    });

                });
                break;
            }

            //получить новый токен по логину и паролю
            case '/login/user':
            case '/set/token': {
                sqlScript = "select login,pass,role from auth where ?"
                sqlBody = {login: bodyData.login}
                console.log(sqlBody);
                connection.query(sqlScript, sqlBody, function (sqlErr, sqlRes, sqlFields) {
                    if (sqlErr) {
                        result.status = 'error';
                        result.reason = 'sql error';
                        result.fullErrorText = sqlErr;
                        postRes.end(JSON.stringify(result));
                    }
                    else if (sqlRes.length == 0) {
                        result.status = 'error';
                        result.reason = 'login not found';
                        postRes.end(JSON.stringify(result));
                    }
                    else if (bodyData.pass.valueOf() == sqlRes[0].pass.valueOf()) {
                        result.status = 'ok';
                        result.newToken = uid(32);
                        result.role = sqlRes[0].role;
                        console.log('newToken: ', result.newToken, " ");
                        sqlScriptToken = "UPDATE `auth` SET `token` = '" + result.newToken + "' WHERE ?";
                        connection.query(sqlScriptToken, {login: bodyData.login}, function (sqlErr, sqlRes, sqlFields) {
                            result.sqlStatus = sqlRes;
                            postRes.end(JSON.stringify(result));
                        });
                    }
                    else {
                        result.status = 'error';
                        result.reason = 'password not match';
                        result.sqlStatus = sqlRes;
                        postRes.end(JSON.stringify(result));

                    }
                });


                break;
            }

            //провека соответствия токен-логин
                //
                //
            case '/check/token': {
                result = {};
                sqlScript = 'select * from auth where ?';
                login = bodyData.login;
                token = bodyData.token;
                connection.query(sqlScript, {token: token, login: login}, function (sqlErr, sqlRes, sqlFields) {
                        if (sqlErr) {
                            result.status = 'error';
                            result.reason = 'sql reqest failed';
                            result.fullErrorText = sqlErr;
                        }
                        else if (sqlRes.length == 0) {
                            result.status = 'error';
                            result.reason = 'token not found';
                        }
                        else if (sqlRes[0].currentToken.valueOf() == token.valueOf()) {
                            result.status = 'ok';
                            result.reason = 'token passed';
                            result.accessLevel = sqlRes[0].role;
                            result.login = sqlRes[0].login;
                        }
                        postRes.end(JSON.stringify(result));
                    }
                )
                break;
            }

            //получить инфу о пользвователе по токену
            case '/get/bio': {
                token = bodyData.token;
                sqlScript = 'select * from users where idUser = (select idUser from auth where ?)';
                sqlBody = {token: token};
                connection.query(sqlScript, sqlBody, function (sqlErr, sqlRes) {
                    postRes.end(JSON.stringify(sqlRes));
                });
                break;
            }

            // генерируем новых пользователей
            case '/gen/user': {
                // console.log("Name#" + ((Math.random() + "").slice(2,7)));
                // console.log((Math.random()+"").slice(2));
                // bodyData.role;
                var user = {
                    name: "Name#" + (Math.random() + "").slice(2, 7),
                    lastName: "LastName#" + (Math.random() + "").slice(2, 7),
                    passportID: (Math.random() + "").slice(2, 11),
                    address: "Street#" + (Math.random() + "").slice(2, 7),
                    telephone: (Math.random() + "").slice(2, 11),
                    eMail: "user" + (Math.random() + "").slice(2, 7) + "@mail.ru"
                };
                sqlScript = 'insert into users set ?';
                connection.query(sqlScript, user, function (sqlErr, sqlRes, sqlFields) {
                    console.log('_______________________');
                    console.log(sqlErr, '\n', sqlRes, '\n', sqlFields);
                    console.log('_______________________');
                    sqlScript = 'select idUser,name from users where ?';
                    studentSet = {
                        lastName: user.lastName
                    }
                    connection.query(sqlScript, studentSet, function (sqlErr, sqlRes, sqlFields) {
                        console.log('_______________________')
                        console.log(sqlErr, '\n', sqlRes, '\n', sqlFields)
                        console.log('_______________________')
                        authSet = {
                            idUser: sqlRes[0].idUser,
                            token: (Math.random() + "").slice(2, 11),
                            login: sqlRes[0].name.replace("Name", "Login"),
                            pass: 'pass',
                            role: bodyData.role
                        }
                        sqlScript = 'insert into auth set ?';
                        connection.query(sqlScript, authSet, function (sqlErr, sqlRes, sqlFields) {
                            console.log('_______________________')
                            console.log(sqlErr, '\n', sqlRes, '\n', sqlFields)
                            console.log('_______________________')
                        });
                    });
                });


                break;
            }

            default: {
                postRes.sendFile('404.png', {root: __dirname});
                console.log("default");
            }
        }

    });
});
