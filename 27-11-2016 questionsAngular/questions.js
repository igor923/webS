
/**
 * Created by a on 27.11.2016.
 */
var obj ={"wife name" : ["Masha","Sasha","Gulchatay"],
           "favorite meal" : ["Borzhch","Sashlyk","Forshmack"]};


var mod = angular.module("quest",[]);


mod.controller("questCntr",["$scope",function ($scope) {

    $scope.key="favorite meal";
    $scope.wife=function (){$scope.key = "wife name"};

    $scope.meal=function (){$scope.key = "favorite meal"};
}]);


mod.directive("questions",function () {

    return function (scope,elem) {
        scope.$watch("key",function () {          /*кей чтобы не реагировало на все измениния в глобальном скоупе*/
            elem.empty();
            var par = angular.element("<p>");
            console.log(par);
            var ea = scope.key;
            console.log(ea);
            par.text("What is your"+ea+"?");
            console.log(par);
            elem.append(par);
            var sel= angular.element("<select>");
            var arr = obj[ea];
            console.log(arr);
            for(var i=0;i<arr.length;i++){
                var opt = angular.element("<option>");
                opt.text(arr[i]);
                sel.append(opt);
            }
            elem.append(sel);

        });


    }



});




