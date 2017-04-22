/**
 * Created by a on 29.11.2016.
 */
var db = [];
db.push(["Israel",4,"Tel-Aviv","New-York","Jerusalem","Haifa"]);
db.push(["USA",5,"New-York","Moscow","Los-Angeles","Washington"]);
db.push(["France",4,"Bordeaux","Marseille","Paris","Lyon"]);
db.push(["Ukraine",2,"Kiev","Moscow","Minsk","Washington"]);
db.push(["Russia",3,"St.Peterburg","Moscow","Grozniy","Washington"]);

var mod =angular.module("geography",[]);

mod.controller("geographyCntr",["$scope",function ($scope) {
    $scope.counter = 0;
    $scope.answers = [];
    $scope.next = function () {

        if ($scope.counter < db.length-1) {
            if ($scope.answ) {
                $scope.counter++;
                $scope.answers.push($scope.answ);
                $scope.answ = undefined;

            }
        }else{
            var sum = 0;
            $scope.answers.push($scope.answ);
            for(var i=0;i<db.length;i++){
                if($scope.answers[i]==db[i][1])sum++;

            }
            $scope.result=sum/db.length*100 + "%";
            console.log($scope.result);
            $scope.next=null;


        }};

}]);


mod.directive("questions",function() {
    return function (scope, elem) {
        scope.$watch(function () {
            elem.empty();
            if(scope.counter <= db.length && scope.counter >=0)
            var par = angular.element("<p>");
            par.addClass("quest");
            par.text("What is the capital of " + db[scope.counter][0] + "?");
            elem.append(par);

            for (var i = 2; i < db[scope.counter].length; i++) {
                var q = angular.element("<p num=" + i + ">");
                q.text(db[scope.counter][i]);
                q.on('click', function (e) {
                    $(".answer").removeClass("answer");
                    var t = angular.element(e.target);
                    t.addClass("answer");
                    scope.answ = t[0].getAttribute("num");
                    /*q.toggleClass("answer");*/
                });
                elem.append(q);
            }
        })

    }
});