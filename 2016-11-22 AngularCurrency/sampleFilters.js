/**
 * Created by a on 23.11.2016.
 */
var mod = angular.module("filters",[]);
mod.controller("filtersCntr",["$scope",function ($scope) {
    $scope.inp="";

    /*$scope.inp={name: "Sasha", age: "58"}*/
   /* $scope.inp= new Date();*/
}]);

mod.filter("binary",function () {
    return function (decimal,p) {
        var base = p || 2;
        var res ="";
        while(decimal>0){
            res=decimal%base+res;
            decimal=Math.floor(decimal/base);
        }

        return res;

    }
})