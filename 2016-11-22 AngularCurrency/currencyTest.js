/**
 * Created by a on 22.11.2016.
 */
var mod =  angular.module("invoice",["finances"]);
mod.controller("invoiceCntr",["$scope",/*"$http",*/"currencyBackend",
    function ($scope,/*$http,*/currencyBackend) {
        $scope.currList = ["USD","EUR","ILS","RUB"];
        $scope.currossList = {};
        $scope.qty = 1;
        $scope.prc = 2.5;
        var cl = $scope.currList.length;



        currencyBackend
            .then(function (res) {
                for (var i = 0; i < cl; i++) {
                    var c = $scope.currList[i];
                    $scope.currossList[c] = [];
                    for (var j = 0; j < cl; j++) {
                        $scope.currossList[c].push(
                            res[$scope.currList[j]] / res[c]
                        )

                    }


                }
                console.log($scope.currossList)
            })
    }]);
        /* $http.get("http://api.fixer.io/latest").then(function(res) {
         $scope.currList[res.data.base] = 1;
         for (var key in res.data.rates) {
         $scope.currList[key] = res.data.rates[key];
         }
         $scope.sel = Object.keys($scope.currList)[0];
         });*/


        /*  $scope.tot =$scope.prc*$scope.qty;   razmestit fiksirovann znachenia*/


