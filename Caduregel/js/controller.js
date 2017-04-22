/**
 * Created by a on 01.04.2017.
 */
var app = angular.module("appModule",[]);

// app.controller('controllerGames',['$scope','$http',function ($scope,$http,hexafy) {
//         $scope.maccabiYaffo={};
//     $http.get('http://127.0.0.1:8888').then(function (res) {
//         let temp = res.data.when.split(" ");
//         $scope.maccabiYaffo.time = temp[0];
//         $scope.maccabiYaffo.date = temp[1].substr(1);
//         $scope.maccabiYaffo.day = temp[2].concat(" "+temp[3]);
//
//     })
// }]);

app.factory('myhttpserv', function ($http) {
    return $http.get('http://127.0.0.1:8889');
});

app.constant('resources',{


        STADIONS_COORDINATES : [
            {
                name:	"איצטדיון נתניה-חדש",
                lat: 32.2936176,
                lang: 34.8640948
            },
            {
                name:  "עכו איצטדיון טוטו",
                lat: 32.9078706,
                lang: 35.086186
            },
            {
                name: 'אצטדיון ר"ג',
                lat: 32.1005909,
                lang: 34.8222763,
            },
            {
                name: 'מחנה יהודה/ע"ש זכריה רצאבי ז"ל',
                lat: 32.077373,
                lang: 34.8983344
            },
            {
                name: 'איצטדיון המושבה',
                lat: 32.1042324,
                lang: 34.8633265

            },
            {
                name: 'לוד איצטדיון טוטו',
                lat: 31.9395585,
                lang: 34.8930209
            }
        ]

    
});

app.controller('mapCtrl',['$scope','resources',function ($scope,resources) {


    var myLatLng = {lat: 32.109333, lng: 34.855499};

    $scope.initialize = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 9
        });

        console.log(resources.STADIONS_COORDINATES);

        var markers=[];
        for(let i=0;i<resources.STADIONS_COORDINATES.length;i++){
            var position = new google.maps.LatLng(resources.STADIONS_COORDINATES[i].lat, resources.STADIONS_COORDINATES[i].lang);
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: resources.STADIONS_COORDINATES[i].name
            });

            markers.push(marker);
        }
    };

    google.maps.event.addDomListener(window, 'load', $scope.initialize);
}]);

app.controller('controllerGames',['$scope','myhttpserv','hexafy','weatherCtrl','resources', function ($scope,myhttpserv,hexafy,weatherCtrl,resources) {

     //$scope.temp=hexafy.myFunc(225);


         $scope.alertStadio=function (stadio) {
             $scope.stad = stadio;
             alert(stadio);
             for(let i=0;i<resources.STADIONS_COORDINATES.length;i++) {
                 if (resources.STADIONS_COORDINATES[i].name === $scope.stad) {
                     weatherCtrl.a(resources.STADIONS_COORDINATES[i].lang, resources.STADIONS_COORDINATES[i].lat).then(
                         function (data) {
                             $scope.wind = data.data.wind.speed;
                             $scope.$digest();
                             console.log($scope.wind);
                         }
                     );

                 }
             }

         };
    myhttpserv.then(function(res){
        console.log(res.data);
        $scope.tableTitle=[];
         $scope.tableTitle.push(res.data[0].days[0]);
         $scope.tableTitle.push(res.data[0].time[0]);
         $scope.tableTitle.push(res.data[0].team1[0]);
         $scope.tableTitle.push(res.data[0].team2[0]);
         $scope.tableTitle.push(res.data[0].stadio[0]);


        $scope.calendar=[];
        for(let j=0;j<res.data.length;j++) {
            for (let i = 0; i < res.data[j].days.length - 1; i++) {
                $scope.game = {};
                $scope.game.days = res.data[j].days[i + 1];
                $scope.game.time = res.data[j].time[i + 1];
                $scope.game.team1 = res.data[j].team1[i + 1];
                $scope.game.team2 = res.data[j].team2[i + 1];
                $scope.game.stadio = res.data[j].stadio[i + 1];
                $scope.calendar.push($scope.game);

            }

        }
        console.log($scope.calendar);

    });
}]);






app.controller('hexCtrl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);

});

app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.service('weatherCtrl',['$q','$http',function ($q,$http) {
    this.a =  function (lat,lon) {

        var q = $q.defer();
        var openweaterUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=a950eae0c70d6142f7c784aa1679e803";
        console.log(openweaterUrl);
        $http.get(openweaterUrl).then(function (res) {
            console.log(res);
            q.resolve(res);
        });
        console.log(q.promise);
        return q.promise;

    };


    // this.a = function (lat,lon) {
    //     return new Promise(function (resolve,reject) {
    //          var temp = {};
    //          temp.lat = lat;
    //          temp.lon = lon;
    //          var openweaterUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + temp.lat + "&lon=" + temp.lon + "&appid=a950eae0c70d6142f7c784aa1679e803";
    //
    //          $http.get(openweaterUrl).then(function (res) {
    //                 resolve(res);
    //             })
    //         })
    //
    //     }

    }

]);







