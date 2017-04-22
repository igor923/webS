/**
 * Created by a on 04.04.2017.
 */
var app = angular.module('clockApp',[]);
app.controller('clockCntr',['$scope','$timeout',function ($scope,$timeout) {
    $scope.res="";
    $scope.interval=1000;

    var tick = function () {
        $scope.res = new Date();
        $timeout(tick,$scope.interval);
    };

   tick();
}]);

