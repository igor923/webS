/**
 * Created by a on 21.11.2016.
 */

var mod = angular.module("sampleTable",[]);


mod.controller("sampleTableCntr",["$scope","$http",function ($scope,$http) {
    $http.get("http://127.0.0.1:8081").then(function (res) {
        $scope.objArray =  res.data;
    });

}]);