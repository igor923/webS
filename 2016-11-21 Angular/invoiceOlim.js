/**
 * Created by a on 21.11.2016.
 */
var mod =  angular.module("invoice",[]);
mod.controller("invoiceCntr",["$scope",/*"$http",*/"currencyBackend",
    function ($scope,/*$http,*/currencyBackend) {

    $scope.qty = 1;
    $scope.prc = 2.5;
    $scope.currList = {};

        currencyBackend
            .then(function (res) {$scope.currList = res;})
            .then(function(){$scope.sel = Object.keys($scope.currList)[0];});
   /* $http.get("http://api.fixer.io/latest").then(function(res) {
        $scope.currList[res.data.base] = 1;
        for (var key in res.data.rates) {
            $scope.currList[key] = res.data.rates[key];
        }
        $scope.sel = Object.keys($scope.currList)[0];
    });*/


  /*  $scope.tot =$scope.prc*$scope.qty;   razmestit fiksirovann znachenia*/
    $scope.total = function (c) {return $scope.qty*$scope.prc*$scope.currList[c]/$scope.currList[$scope.sel];};

}]);

mod.service("currencyBackend",["$http",function ($http) {
    var currList={};
   return $http.get("http://api.fixer.io/latest").then(function(res) {   /*начиная с этой строчки идет код , стакан пустой */
        currList[res.data.base] = 1;
        for (var key in res.data.rates) {
            currList[key] = res.data.rates[key];
        }
        return currList;                                       /*этот ретурн заполняет стакан а верхний возвращает стакан заполненный в след зен+ передается в лекс окружение*/

    });

}]);