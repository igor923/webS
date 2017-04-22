/**
 * Created by a on 28.03.2017.
 */
var a = 1;

(function f() {
    console.log(a);

    var a = 0;
})();

console.log("1 ------------------------");

function f() {
    var x = 1;
    return function () {
        return x++;
    }
};
var b = f;
console.log(b()); // --> ?

console.log(" f (){return x++} ------------------------");

// чему равена переменная x после всех вызовов c();
var c = b();
console.log(c());
console.log(c());
console.log(c()); // c == ?

console.log("2,3,4------------------------");
var a = 1;

function foo(){
    console.log(a);
    a = 2;
};
foo(); // --> ?
console.log("1------------------------");



(function(){
    var q=j=3;
}());

console.log((typeof j !== 'undefiend'));
console.log((typeof q !== 'undefiend'));
console.log((typeof j));
console.log((typeof q));

