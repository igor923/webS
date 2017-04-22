/**
 * Created by a on 13.04.2017.
 */
let db = [];
db[0] = ["West", 2, "San Jose", "Portland", "Vancouver", "Seattle"];
db[1] = ["East", 5, "New-York", "New-Jersey", "Washington", "Pittsburgh"];
db[2] = ["Canada", 4, "Toronto", "Calgary", "Montreal", "Edmonton"];
db[3] = ["South", 3, "St.Louise", "Nashville", "Dallas", "Tampa Bay"];

var app = angular.module('TestApp', ['SimpleApp']);


app.directive('testdirective',function () {
    return function (scope,elem) {
        scope.$watch(function () {
                elem.empty();
                var hTag = angular.element("<h1>");
                hTag.text(db[0]);
                elem.append(hTag);

                for(let i=0;i<db.length;i++){
                    var q = angular.element("<p num=" + i + ">");
                    q.text(db[i]);
                    q.on('click',function (e) {
                        $('.answer').removeClass('answer');
                        var t = angular.element(e.target);
                        t.addClass('answer');
                    });
                    elem.append(q);
                }

        })
    }
});


