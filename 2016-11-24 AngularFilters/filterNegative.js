/**
 * Created by a on 24.11.2016.
 */
var mod = angular.module("redNegatives",[]);
mod.controller("redNegativesCntr",["$scope",function ($scope) {
    $scope.first=0;
    $scope.second=0;
    $scope.third=0;
    $scope.total=function () {
        return $scope.first+$scope.second+$scope.third;
    };

}])


mod.filter("redNeg",function () {
    return function(num){
        return num==0 ? "black" : num  > 0 ? "green" : "red"
    }
})