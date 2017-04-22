/**
 * Created by a on 01.04.2017.
 */
angular.module('app', [])
    .run(['$rootScope', function($rootScope){
        $rootScope.data = {counter: 0};
    }])
    .controller('BlackController', ['$scope', function($scope){
        $scope.digestTest = function(){
            $scope.data.counter++;
            $scope.$digest();
        };

        $scope.applyTest = function(){
            $scope.data.counter++;
            $scope.$apply();
        };
    }])
    .controller('RedController', ['$scope', function($scope){
        $scope.digestTest = function(){
            $scope.data.counter++;
            $scope.$digest();
        };

        $scope.applyTest = function(){
            $scope.data.counter++;
            $scope.$apply();
        };
    }])
    .controller('GreenController', ['$scope', function($scope){
        $scope.digestTest = function(){
            $scope.data.counter++;
            $scope.$digest();
        };

        $scope.applyTest = function(){
            $scope.data.counter++;
            $scope.$apply();
        };
    }])
    .controller('BlueController', ['$scope', function($scope){
        $scope.digestTest = function(){
            $scope.data.counter++;
            $scope.$digest();
        };

        $scope.applyTest = function(){
            $scope.data.counter++;
            $scope.$apply();
        };
    }])
    .directive('testClick', [function(){
        return {
            restrict: 'A',
            scope: {
                testClick: '&'
            },
            link: function(scope, el){
                el.bind('click', function(){
                    scope.testClick();
                });
            }
        };
    }]);