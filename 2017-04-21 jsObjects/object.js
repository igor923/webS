/**
 * Created by a on 21.04.2017.
 */
var object = Object.create({x: 10, y: 10});
object.x = 20;

delete object.x;
object.hasOwnProperty('x');


var person = {
    name: "Sorax",
    age: 20,
    get _age() {
        return this.age
    },
    set _age(v) {
        this.age = v < 0 ? 0 : v > 120 ? 120 : v
    }
};

var Per = {
    constructor: function (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greed: function () {
        console.log('Hi my name is'+this.name)
    }
};

var igor = Object.create(Per).constructor('Igor',33,'male');
var petya = Object.create(Per).constructor('Petya',3,'male');


var Webdev = Object.create(Per);
 Webdev.constructor = function (name,age,gendder,skills) {
     Per.constructor.apply(this,arguments);
     this.skills =skills || [];
     return this
 };