/**
 * Created by a on 22.11.2016.
 */
var mod  = angular.module("finances",[]);
mod.service("currencyBackend",["$http",function ($http) {
    var currList={};
    return $http.get("http://api.fixer.io/latest").then(function(res) {   /*начиная с этой строчки идет код , стакан пустой */
        currList[res.data.base] = 1;
        for (var key in res.data.rates) {
            currList[key] = res.data.rates[key];
        }
        return currList;                                       /*этот ретурн заполняет стакан а верхний возвращает стакан заполненный в след зен+ передается в лекс окружение*/

    });

}]);