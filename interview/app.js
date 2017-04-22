var app = angular
    .module('app',['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/t1', {
                templateUrl: 't1.html'
            })
            .when('/t2', {
                templateUrl: 't2.html'
            })
            .when('t1', {
                templateUrl: 't1.html'
            })
            .when('t2', {
                templateUrl: 't2.html'
            })
    }]);


/**
 * Created by dev on 3/15/17.
 */
