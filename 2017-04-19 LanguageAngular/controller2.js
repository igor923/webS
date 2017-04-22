/**
 * Created by a on 20.04.2017.
 */
var app = angular
    .module('langApp',['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
        .when('/page21',{

            templateUrl: 'page21.html'
        })
        .when('/page22',{

            templateUrl: 'page22.html'
        })
            .when('/page23',{

                templateUrl: 'page23.html'
            })

}]);
