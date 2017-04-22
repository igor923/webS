/**
 * Created by a on 01.04.2017.
 */
var app = angular.module('moduleApply',[]);
app.controller('controllerApply',['$scope',function ($scope) {
    $scope.getMessage = function () {
        setTimeout(function () {
            $scope.$apply(function () {

            $scope.message = 'Получено через 2 секунды';
            console.log('Сообщение: ' + $scope.message);
            })
        },2000);


    };
    $scope.getMessage();
}]);