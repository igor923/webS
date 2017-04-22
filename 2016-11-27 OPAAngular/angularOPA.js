/**
 * Created by a on 27.11.2016.
 */
var mod= angular.module("opa",[]);

mod.controller("opaCntr",["$scope",function ($scope) {
    $scope.page="sasha.html";
    $scope.sasha=function () {$scope.page = 'sasha.html'}
    $scope.masha=function () {$scope.page = 'masha.html'}
    $scope.misha=function () {$scope.page = 'misha.html'}
}]);