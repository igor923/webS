 /**
 * Created by a on 22.11.2016.
 */
var mod =  angular.module("getDate",[]);
mod.controller("getDateCntr",["$scope","dateService","$interval",
    function ($scope, dateService,$interval) {
    $scope.d = dateService();

        $interval(function () {
            $scope.d =dateService();
            console.log($scope.d);

        },1000);
       /* $scope.greeting ="hello";
        $scope.hello = function () {
            $scope.greeting ="Go to hell!"}*/

       $scope.divClass="sq r";
        $scope.divHide=false;
        /*$scope.hello=function () {$scope.divHide=true

        };*/
        $scope.pIf=false;
        $scope.divStyle = {
            width : "200px",
            height: "200px",
            backgroundColor: "red",
            border: "10px solid blue"
        };

        $scope.hello =function () {
            $scope.divStyle.backgroundColor="yellow"
            $scope.divStyle.border = "10px solid lightblue"
        }
        /*$scope.hello=function () {$scope.pIf=true

        };*/
        /*$scope.hello=function () {$scope.divClass=$scope.divClass.replace("r","g")};*/
}]);


mod.service("dateService",[function () {
     return function(){return new Date()};
}]);
