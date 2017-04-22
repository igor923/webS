var express = require('express');
var Address = require("bitmessage").Address;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var FormData = require('form-data');
var fs = require('fs');
var request = require('request');
var http = require('http');
var querystring = require('querystring');
var windows1251 = require('windows-1251');
var index = require('./routes/index');
var users = require('./routes/users');
// var dflt = require('./routes/dflt.html');


var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var cheerio = require("cheerio");
var sleep = require('sleep');
var iconv = require('iconv-lite');
const autoenc = require('node-autodetect-utf8-cp1251-cp866');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/def', function (req, res) {
    // console.log(req);
    req.on('data', function (chunk) {
        console.log(chunk)
    });
    req.on('end', function (getData) {
        console.log("tryToSent");
        res.sendFile('./bin/index.html', {root: __dirname}, function () {
            console.log("sent");
        })
    })
});

app.get('/lib/bundle.js', function (req, res) {
    req.on('data', function (chunk) {
        console.log(chunk)
    });
    req.on('end', function (getData) {
        console.log("tryToSent");
        res.sendFile('./bin/lib/bundle.js', {root: __dirname}, function () {
            console.log("sent");
        })
    })
});


app.get('/get/translate', function (req, res) {
    res.send('{trololo:test}')
});

app.post('/get/translation', function (req, res) {

    console.log('req');
    console.log(req.body);

    var allTranslations = [];

    getTranslate({word: req.body.word, lang: 2})
        .then(function (data) {
            console.log(data);
            allTranslations = allTranslations.concat(data);
            getTranslate({word: req.body.word, lang: 1})
                .then(function (data) {
                    allTranslations = allTranslations.concat(data);
                    getTranslate({word: req.body.word, lang: 1, trn: 1})
                        .then(function (data) {
                            allTranslations = allTranslations.concat(data);
                            console.log(allTranslations);
                            res.send(allTranslations)
                        })})});

    // res.send('')
});

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // console.log(req);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;


//
function getNettoByBrutto(parameters) {
    var brutto = parameters.brutto;
    var to = parameters.to;
    var step = parameters.step;
    var year = parameters.year;
    var month = parameters.month;
    // console.log(brutto, to, step);
    var form = {
        field1010: 0,
        yy: year,
        mm: month,
        field1021: 0,
        field1020: brutto,
        field1030: 0,
        field1031: 0,
        field1040: 0,
        field1045: 0


    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    request({
        headers: {
            'Content-Length': contentLength,
            'Content-Type': 'application/x-www-form-urlencoded'
        },

    }, function (err, res, body) {
        res.on('data', function (chunk) {
            console.log(chunk);
        });
        res.on('end', function () {
            console.log("end");
        });

        var $ = cheerio.load(body);
        var data = $("div table tr td font[color='red'] b ");
        // console.log(data.length);
        console.log(
            data[0].firstChild.data.replace(",", "").replace(".00", "\t"),
            data[2].firstChild.data.replace(",", "").replace(".", ",")
        );
        // sleep.msleep(1000);
        if (brutto <= to) {
            getNettoByBrutto({brutto: brutto + step, to: to, step: step, year: year, month: month})
        }
    });

}
function getBrutoByNetto(netto) {
    var form = {
        field1010: 0,
        yy: 2017,
        mm: '03',
        field1021: 0,
        field1150: netto,
        field1030: 0,
        field1031: 0,
        field1040: 0,
        field1045: 0
    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    request({
        headers: {
            'Content-Length': contentLength,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        uri: 'http://www.payway.co.il/calculator/ru/nb3_show.asp',
        body: formData,
        method: 'POST'
    }, function (err, res, body) {
        var $ = cheerio.load(body);
        var data = $("div table tr td font[color='red'] b ");
        console.log(
            data[0].firstChild.data.replace(",", "").replace(".00", "\t"),

            data[2].firstChild.data.replace(",", "").replace(".", ",")
        );
        // sleep.msleep(1000);
    });
}
// getNettoByBrutto({brutto: 10000, to: 20000, step: 1000, year: 2018, month: '01'});

/// /// /// /// /// /// /// /// /// /// ///
// var bizForm = {
//     name: 'SnapChatDevil',
//     pass: 'SnapChatDevil',
//     color: 'H',
//     sx: 'f',
//     room: '4-',
//     room_I: 'I+',
//     room_U: 'U+'
// };
//
// var bizContentLength = bizForm.length;
// var bizFormData = querystring.stringify(bizForm);
//
//
// var bizOptions = {
//     headers: {
//
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//         'Accept-Encoding': 'gzip, deflate',
//         'Accept-Language': 'en-US,en;q=0.8',
//         'Cache-Control': 'max-age=0',
//         'Connection': 'keep-alive',
//         'DNT': '1',
//         'Host': 'bizarre.kiev.ua',
//         'Origin': 'http://bizarre.kiev.ua',
//         'Referer': 'http://bizarre.kiev.ua/ch/login.html',
//         'Content-Length': bizContentLength,
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
//
//     },
//     uri: 'http://bizarre.kiev.ua/cgi-bin/ch/cht.pl',
//     body: bizFormData,
//     method: 'POST',
//     encoding: 'binary'
//
// };
//
// var bizfunc = function (err, res, body) {
//     // body = new Buffer(body, 'binary');
//     str = iconv.decode(new Buffer(body, 'binary'), 'CP1251');
//     console.log(str);
//     var $ = cheerio.load(body);
//     var data = $("script");
//     // console.log(data[0].firstChild.data.split(';')[0]).trim();
//     // console.log(data[0].firstChild.data.split(';')[1]).trim();
//
//     var bizStreamUrl =
//         'http://bizarre.kiev.ua/cgi-bin/ch/stream.cgi?' +
//         data[0].firstChild.data.split(';')[1].replace("\n",'') + '&' +
//         data[0].firstChild.data.split(';')[0].replace("\n",'') + '&sx=f&col=0&lp=838&lc=838&lu=0&st=a';
//
//     console.log(bizStreamUrl);
//
//     bizOptions.uri = bizStreamUrl;
//     bizOptions.method = 'GET';
//
//     request(bizOptions,function (err, res, bdy) {
//         res.on('data',function (chnk) {
//             console.log(chnk);
//         });
//         console.log(bdy);
//         console.log(err);
//
//         console.log("som");
//     });
//
//     //'http://bizarre.kiev.ua/cgi-bin/ch/stream.cgi?room=1-&uid=dpKRLGt0uy8XxyhtA3&sx=f&col=0&lp=838&lc=838&lu=0&st=a'
//
//
// };
//
//
// request(bizOptions, bizfunc);
/// /// /// /// /// /// /// /// /// /// ///

// ruero.com
// request({uri: 'http://ruero.com'}, function (err, res, bdy) {
//     // console.log(bdy);
//     var $ = cheerio.load(bdy);
//     var data = $('tr td[class="slink"] span[class="stext"] a[href*="ruero"]');
//     console.log(data.length);
//     var urls = [];
//
//
//     for (i = 0; i < data.length; i++) {
//         urls[i] = data[i].attribs.href
//     }
//
//     console.log(urls);
//
//     getPicsFromUrl(urls);
// });
// var getPicsFromUrl = function (urls) {
//     if (urls.length == 0) {
//         console.log("nigmar-a-seret");
//     } else {
//         console.log(urls[0]);
//         request(
//             {
//                 uri: urls[0],
//                 headers: {
//                     // 'Content-Type':'text/html; charset=windows-1251'
//                     'Content-Type': 'application/xhtml+xml; charset=utf-8'
//
//                 }
//             },
//             function (err, res, bdy) {
//                 console.log(err);
//                 // bdy = iconv.decode(bdy, 'CP1251');
//                 // console.log(new Buffer(bdy));
//
//                 var $ = cheerio.load(bdy);
//                 var data1 = $('*[itemprop="name"]');
//                 var data2 = $('div[itemprop="articleBody"] div[style="display:inline;"]');
//                 var data3 = $('div[itemprop="articleBody"] div[style="display:inline;"] img');
//                 console.log("H2", data1[0].firstChild.data);
//                 var result = iconv.encode(iconv.decode(new Buffer(data1[0].firstChild.data, 'binary'), 'win1251'), 'utf8');
//                 console.log(result.toString());
//
//
//                 console.log("DIV", data2[0].firstChild.data);
//                 console.log(data3.length);
//
//                 urls.splice(0, 1);
//                 getPicsFromUrl(urls)
//             });
//     }
// };

// slovar co il

// getTranslate({word: "укус", lang: 2});
// getTranslate({word: "бакаша", lang: 1, trn: 1});


// getTranslate({word: "קו", lang: 1})
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


function getTranslate(parameters) {
    return new Promise(function (resolve, reject) {
        var word = parameters.word;
        var nikud = parameters.nikud ? parameters.nikud : 1;
        var word_enc = parameters.word_enc ? parameters.word_enc : '';
        var transcription = parameters.transcription ? parameters.transcription : 1;
        var lang = parameters.lang ? parameters.lang : 1;
        var trn = parameters.trn;


        var frm = {
            xajax: 'XTranslate',
            xajaxr: 111222333,
            'xajaxargs[]': '<xjxquery>' +
            '<q>' +
            'word=' + word +
            '& ' +
            'word_enc=' + word_enc +
            '&' +
            'lang=' + lang +
            '&' +
            'nikud=' + nikud +
            '&' +
            'transcription=' + transcription +
            '&' +
            'trn=' + trn +
            '</q>' +
            '</xjxquery>'

        };

        var frmData = querystring.stringify(frm);
        // console.info(frm, frmData);
        var hdrs = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'ru,en-US;q=0.8,en;q=0.6,uk;q=0.4,en-GB;q=0.2',
            'Connection': 'keep-alive',
            'Content-Length': frmData.length,
            'Content-Type': 'application/x-www-form-urlencoded',
            'DNT': '1',
            'Host': 'www.slovar.co.il',
            'Method': 'POST txajax.php HTTP/1.1',
            'Origin': 'http://www.slovar.co.il',
            'Referer': 'http://www.slovar.co.il/translate.php',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
        };
        var cardsData = [];
        var flag = false;
        request(
            {
                uri: 'http://www.slovar.co.il/txajax.php',
                headers: hdrs,
                method: 'POST',
                body: frmData
            },
            function (err, res, bdy) {
                if (err) {
                    reject(err)
                } else {
                    bdy = bdy
                        .replace('<?xml version="1.0" encoding="utf-8" ?><xjx><cmd n="as" t="translation" p="innerHTML"><![CDATA[<div align="center">Loading...</div>]]></cmd><cmd n="as" t="translation" p="innerHTML"><![CDATA[', '')
                        .replace(']]></cmd></xjx>', '')
                        .replace('cycle-1', 'cycle1');
                    var $ = cheerio.load(bdy);
                    var cardsWords = $('div[class="cycle1"] * *[class="word"]');
                    var cardsTranslit = $('div[class="cycle1"] * *[class="translit"]');
                    var cardsTranslation = $('div[class="cycle1"] * *[class="translation"]');

                    for (i = 0; i < cardsWords.length; i++) {
                        cardsData[i] = {};
                        cardsData[i]["word"] = "";
                        cardsData[i]["translit"] = "";
                        cardsData[i]["translation"] = "";
                        for (j = 0; j < cardsWords[i].children.length; j++) {
                            cardsData[i]["word"] += cardsWords[i].children[j].data ? cardsWords[i].children[j].data : cardsWords[i].children[j].firstChild.data + "́";
                            cardsData[i]["translit"] += cardsTranslit[i].children[j] ? cardsTranslit[i].children[j].data ? cardsTranslit[i].children[j].data : cardsTranslit[i].children[j].firstChild.data + "́" : "";
                            cardsData[i]["translation"] += cardsTranslation[i] ? (cardsTranslation[i].children[j] ? cardsTranslation[i].children[j].data : "") : "";
                        }
                    }

                    //TODO: MAKE recursively



                    resolve(cardsData)
                }
            }
        );

        // form-data rus-heb
        /*
         *
         xajax:
         XTranslate
         xajaxr:
         1490775592588
         xajaxargs[]:
         <xjxquery>
         <q>
         word=%D0%B1%D0%B0%D1%80&
         word_enc=&
         lang=2&
         nikud=1&
         transcription=1
         </q>
         </xjxquery>
         *
         *
         * */

        // form-data heb-rus(transcription)
        /*
         *
         xajax:
         XTranslate
         xajaxr:
         1490776281281
         xajaxargs[]:
         <xjxquery>
         <q>
         word=%D0%B1%D0%B0%D1%80&
         word_enc=&
         lang=1&
         trn=1&
         nikud=1&
         transcription=1
         </q>
         </xjxquery>
         * */

        // form-data heb-rus
        /*
         xajax:
         XTranslate
         xajaxr:
         1490776445290
         xajaxargs[]:
         <xjxquery>
         <q>
         word=%D7%91%D7%A8&
         word_enc=&
         lang=1&
         nikud=1&
         transcription=1
         </q>
         </xjxquery>
         *
         * */

        // HEADERS
        /*   Accept:* / *
         Accept-Encoding:gzip, deflate
         Accept-Language:ru,en-US;q=0.8,en;q=0.6,uk;q=0.4,en-GB;q=0.2
         Connection:keep-alive
         Content-Length:2190
         Content-Type:application/x-www-form-urlencoded
         DNT:1
         Host:www.slovar.co.il
         Method:POST txajax.php HTTP/1.1
         Origin:http://www.slovar.co.il
         Referer:http://www.slovar.co.il/translate.php
         User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
         */

    });
}


// // Generate a new random Bitmessage identity.
// var addr1 = Address.fromRandom();
// console.log("New random Bitmessage address:", addr1.encode());
// // Or create it from passphrase.
// var addr2 = Address.fromPassphrase("habrahabr");
// console.log("Deterministic Bitmessage address:", addr2.encode());