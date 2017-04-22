/**
 * Created by a on 16.11.2016.
 */
/*var fs = require('fs'); /!*подключение модулей*!/
fs.readFile("./test.txt",function (err,data) {
    console.log("1 "+data);
}); /!*асинхронное чтение*!/

var data=fs.readFileSync("./test.txt");
console.log("2 "+data.toString());


fs.writeFile("./test.txt","Long live Netania!",{flag: "w"},function(err){});*/

/*
модуль 'readline' - построчное чтение;*/
var fs = require('fs');
fs.writeFileSync("./test.txt","Long live Petah-Tiqua!",{flag : "a"});
var data=fs.readFileSync("./test.txt");
console.log(data.toString());


fs.writeFile(
    "./test.txt","Long live Ashdod!",{flag : "a"},function (err){
        fs.readFile("./test.txt",function (err,data){
    console.log(data.toString())
        })
});