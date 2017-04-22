/**
 * Created by a on 24.11.2016.
 */
var mod = angular.module("myController",[]);
mod.controller("controllerCntr",["$scope",function ($scope) {
    $scope.hello="Hello";
    $scope.name=""


}]);


mod.controller("contrl",["$scope",function ($scope) {
    $scope.name ="A"
}]);

mod.controller("contr2",["$scope",function ($scope) {
    $scope.name ="B"
}]);
