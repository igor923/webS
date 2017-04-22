/**
 * Created by a on 23.03.2017.
 */
var my = 7785,
    you = 7786,
    he = 7787;

var ar = [1,2,3];
ar[1]= 5;
console.log(ar);
var n = new Number(400);
var f =  2.456;
console.log(f.toPrecision(2));
console.log("hello world".length);

var text =  "Hello world";
console.log(text.charAt(4));
console.log(text.substr(3));
console.log(text.substr(3,8));
console.log(text.slice(-2));
console.log(text.substr(0, 4));
console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));
console.log(text.replace("world","Igor"));
console.log(text.split(" "));
console.log(Boolean(4));
console.log(Boolean(0));

console.log(" ");
a=0;
var isTrue =  true;
isTrue && (a=5);
console.log(5);

console.log("");
var ferrari =  "vettel";
var bmw = ferrari || "rosberg";
console.log(bmw);

console.log(typeof (+"356"));
console.log(typeof (356+""));

console.log("");
console.log(parseInt("45 px", 10));


var a=7, b;
switch (a) {
    case 5:
        b = 4;
        break;
    case 6:
        b = 5;
        break;
    case 7:
        b = 6;break;
    default:
        b = 100;
}

console.log(b);

console.log("");

var greet =  function (name) {
    console.log(arguments);
    return "Hello "+ name;
    
};

console.log(greet("Igor", 4, 4, 6, 7).toUpperCase());


var func = function(calback){
    var a = 5;
    calback(2+a);
};
func(function (n) {
    console.log(1+n);
});
//
// zamykanie

var counter =  function (num) {
    // counter.count = 0;
    counter.count = num != undefined ? num : counter.count
    return counter.count++
};

counter.count =0;

console.log(counter());
console.log(counter());
console.log(counter(10));

var counter = (function () {
    var count = 0;
    return function (num) {
        count = num !=undefined ? num : count;
        return count++
    }
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


console.log("");

var Person = {
    constructor: function (name,age,gender) {
        this.name = name;
        this.age=age;
        this.gender = gender;
        return this
        
    },
    greet: function(){
        console.log(("Hi my name  is" + this.name));
    }
};

var WebDeveloper = Object.create(Person);
    WebDeveloper.constructor=function(name,age,gender,skills){
        Person.constructor.apply(this,arguments);
        this.skills = skills || [];
        return this;
    };

    WebDeveloper.develop =  function () {
        console.log("Working...");
    };

    var developer = Object.create(WebDeveloper).constructor("Igor",33,"M",["MEAN","JS","JAVA"]);

