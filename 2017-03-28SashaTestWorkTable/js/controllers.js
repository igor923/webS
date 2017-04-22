/**
 * Created by a on 28.03.2017.
 */
var tableApp = angular.module('tableApp',['ngRoute']);

tableApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when("/table1",{
            templateUrl:"template/table1.html",
            controller:"tableController"
        })
        .when("/table2",{
            templateUrl:"template/table2.html",
            controller:"tableController"
        })
        .otherwise({
            redirectTo:"/table1",
            controller:"tableController"
        })

}]);

tableApp.controller('tableController',['$scope','$http',function ($scope,$http) {


    $http.get('tableData/tableJson.json').then(function (res) {
        $scope.resArr =  res.data;
        $scope.resList={};

        for(i=0;i<$scope.resArr.length;i++){
            person = $scope.resArr[i];


            if($scope.resList[person["Team"]]==undefined){
                $scope.resList[person["Team"]]={};
                $scope.resList[person["Team"]].persCount=1;

                $scope.resList[person["Team"]].persAmount=(person["Contributions"]-0);

            }
            else{
                $scope.resList[person["Team"]].persCount+=1;
                $scope.resList[person["Team"]].persAmount+=(person["Contributions"]-0);
            }

        }
        console.log($scope.resList);

        $scope.contrListArray=[];
        for(comp in $scope.resList){
            var temp={};
            temp["team"]=comp;
            temp["count"]=$scope.resList[comp].persCount;
            temp["contrib"]=$scope.resList[comp].persAmount;
            $scope.contrListArray.push(temp);
        }

        console.log($scope.contrListArray);

    });



}]);



