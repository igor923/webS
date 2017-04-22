/**
 * Created by a on 09.04.2017.
 */


var  app =  angular.module('weatherApp',[]);
app.controller('weatherCtrl',['$scope','$http',function ($scope,$http) {
    var vm = $scope;

    vm.test="test"

        $http.get("http://ip-api.com/json").then(function (res) {

            vm.lat = res.data.lat;
            console.log(vm.lat);
            vm.lon = res.data.lon;
            console.log(vm.lon);
            var openweaterUrl="http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat+ "&lon=" + vm.lon+"&appid=a950eae0c70d6142f7c784aa1679e803";
        $http.get(openweaterUrl).then(function(res){
            vm.description = res.data.weather[0].description;
            console.log(vm.description);
            vm.speed=res.data.wind.speed;
            console.log(vm.speed);
        })
    })

}]);