/**
 * Created by a on 25.03.2017.
 */


var myApp = angular.module('myApp', []);

myApp.controller('DemoCtrl', function ($scope) {
    alert('Hello World!');
    $scope.name = "Hi"
});

myApp.controller("testCntrl", function ($scope) {
    $scope.testVar = "Igor";

});

myApp.controller("MyCity",["$scope","$http", function ($scope,$http) {

    $http.get('phones.json').success(function (data,status,headers,config) {
        console.log("data",data, "\n\n status",status, "\n\n headers",headers,"\n\n config",config);
        $scope.phones=data;
        
    }).error(function () {
        
    });
    $scope.myList = [
        {
            'city': "Baku",
            'team': "Neftchi",
            'status': false,
            'priority': 2
        },
        {
            'city': "Tbiliso",
            'team': "Dinamo",
            'status': true,
            'priority': 1
        },
        {
            'city': "Erevan",
            'team': "Ararat",
            'status': true,
            'priority': 2
        },
        {
            'city': "Kutaisy",
            'team': "Dinamo",
            'status': true,
            'priority': 1
        },
    ]
    $scope.title = "Phones"

    var date = new Date();
    $scope.today = date;

    $scope.doneAndFilter = function (clubItem) {
        return clubItem.city &&  clubItem.priority > 1;
    }
    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function (fieldName) {
        if ($scope.sortField=fieldName){
            $scope.reverse= !$scope.reverse;
        }else{
            $scope.sortField=fieldName;
            $scope.reverse=false;
        }
    }
}]);