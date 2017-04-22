/**
 * Created by a on 18.04.2017.
 */
var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.name = 'Bob';
});

app.directive("foo", function() {
    // возвращаем объект определения директивы
    return {
        transclude: true,
        template: '<div>Это шаблон</div><div ng-transclude=""></div>'
    };
});


app.directive("foo2", function() {
    return {
        template: "<div>Это шаблон</div>",
        transclude: true,
        link: function(scope, element, attrs, ctrl, transclude) {
            transclude(function(clone) {
                element.append(clone);
            });
        }
    };
})