/**
 * Created by a on 21.11.2016.
 */
var mod = angular.module('currencyBase',[]);
    mod.controller('currencyCntr',["$scope","$http",function ($scope,$http) {
        $scope.start=0;
        $scope.listCurr={};

        $http.get("http://api.fixer.io/latest").then(function (res) {
            $scope.listCurr[res.data.base]=1;
            $scope.sel=Object.keys($scope.listCurr)[0];
            for(key in res.data.rates){
                $scope.listCurr[key]=res.data.rates[key];
            }

        })



    }]);