/**
 * Created by a on 09.04.2017.
 */
angular.module('myApp', [])
    .controller('MyCtrl', function($scope) {

        $scope.initialize = function() {
            var map = new google.maps.Map(document.getElementById('map_div'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        }

        google.maps.event.addDomListener(window, 'load', $scope.initialize);

    });