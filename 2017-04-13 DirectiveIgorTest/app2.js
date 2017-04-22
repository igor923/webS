/**
 * Created by a on 13.04.2017.
 */
var app = angular.module('SimpleApp',[]);

app.directive('cities', function () {

    return  {
        scope:true,
        restrict:'E',
        link:function (scope,e,a) {
            scope.fullName = a.last+" "+ a.first
        },
        replace: true,
        template:'<h1>{{fullName}}</h1>'

    }

});