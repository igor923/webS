/**
 * Created by a on 23.11.2016.
 */
var mod  = angular.module("financesYahoo",[]);
mod.service("currencyBackend",["$http",function ($http) {
    var YAHOO_FINANCE_URL_PATTERN =
        '//query.yahooapis.com/v1/public/yql?q=select * from ' +
        'yahoo.finance.xchange where pair in ("PAIRS")&format=json&' +
        'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';

    return function(currList) {
       /* var currList = ["USD", "EUR", "ILS", "RUB"];*/

        var base = currList[0];
        var pairsArr = [];
        for (var i = 0; i < currList.length; i++)pairsArr.push(base + currList[i]);

        var url = YAHOO_FINANCE_URL_PATTERN.replace("PAIRS", pairsArr.join());

        var rates = {};
        return $http.jsonp(url).then(function (res) {
            var arr = res.data.query.results.rate;
            console.log(arr);
            for (var i = 0; i < arr.length; i++) {
                var key = arr[i].id.slice(3);
                console.log(key);
                var val = arr[i].Rate;
                console.log(val);
                rates[key] = val;
            }
            console.log(rates);
            return rates
        })
    }

}]);