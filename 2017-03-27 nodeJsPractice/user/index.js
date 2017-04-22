/**
 * Created by a on 27.03.2017.
 */
var db = require('db');
var log = require('logger')(module);


function User(name) {
    this.name=name;
}

User.prototype.hello = function (who) {
    // console.log(db.getPhrase("Hello")+" ,"+who.name)
    log(db.getPhrase("Hello") + ", " + who.name);


};

console.log("user js is required!");


// exports.User = User;
module.exports=User;