/**
 * Created by a on 19.04.2017.
 */
var app = angular.module('moduleApp',[]);

app.controller('langCtrl', ['$scope', '$http',function ($scope, $http) {


   $scope.btnClick = function (lang) {

       $scope.url="data_"+lang+".json";
       console.log($scope.url);

           $http.get($scope.url).then(function (res,err) {
               console.log(res.data.text.name);
               $scope.res=res.data.text.name;

           })
       };



}]);