/**
 * Created by a on 20.04.2017.
 */
var app = angular.module('CompileApp',[]);
app.directive('btn',function () {
    return{
        restrict: 'E',
        scope:{'val':'@'},
        template:'<button>{{val}}</button>',
        link:function (scope,element,attrs) {
            element.on('click',function () {
                alert(attrs.val)
            })
        }
    }
})
app.controller('theController',['$scope','$compile',function ($scope,$compile) {
    $scope.addVal=function (v) {
        var btn = $compile('<btn val="'+v+'"></btn>')($scope);
        angular.element(document.getElementById('holder')).append(btn)
    }
}]);