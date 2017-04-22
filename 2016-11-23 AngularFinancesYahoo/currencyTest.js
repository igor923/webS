/**
 * Created by a on 22.11.2016.
 */
var mod =  angular.module("invoice",["financesYahoo"]);
mod.controller("invoiceCntr",["$scope",/*"$http",*/"currencyBackend","$interval",
    function ($scope,/*$http,*/currencyBackend,$interval) {
        $scope.currList = ["USD","EUR","ILS","RUB"];

        $scope.qty = 1;
        $scope.prc = 2.5;
        var cl = $scope.currList.length;
        $scope.currossList = {};

        getRates();
        $interval(getRates,1500);

        function EmptyObj(){
            this.act = undefined;
            this.cls = "black";
        }

        for(var i=0;i<cl;i++){
            $scope.currossList[$scope.currList[i]]=[];
            for(var j = 0; j < cl; j++){
                $scope.currossList[$scope.currList[i]].push(new EmptyObj);
            }
        }

        function getRates() {

            currencyBackend($scope.currList)
                .then(function (res) {
                    for (var i = 0; i < cl; i++) {
                        var c = $scope.currList[i];
                        for (var j = 0; j < cl; j++) {
                            var newRate = res[$scope.currList[j]] / res[c];
                            var oldRate = $scope.currossList[c][j].act;
                            if(oldRate == undefined || oldRate == newRate){
                                $scope.currossList[c][j].cls ="black"
                            }else if (oldRate > newRate){
                                $scope.currossList[c][j].cls ="red";
                            }else{
                                $scope.currossList[c][j].cls ="green";

                            }
                            $scope.currossList[c][j].act = newRate;


                        }


                    }

                })

        }


    }]);
        /* $http.get("http://api.fixer.io/latest").then(function(res) {
         $scope.currList[res.data.base] = 1;
         for (var key in res.data.rates) {
         $scope.currList[key] = res.data.rates[key];
         }
         $scope.sel = Object.keys($scope.currList)[0];
         });*/


        /*  $scope.tot =$scope.prc*$scope.qty;   razmestit fiksirovann znachenia*/


