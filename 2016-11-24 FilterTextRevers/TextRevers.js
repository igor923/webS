 /**
 * Created by a on 24.11.2016.
 */
var mod = angular.module("textRevers",[]);

mod.controller("textReversCntr",["$scope",function ($scope) {
    $scope.myText="";



}]);


mod.filter("revers",function () {
    return function(str) {
        var res;
            res=str.split(" ")
            reverse(res);
           function reverse(s) {
            for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
            console.log(o);
        }






        return res;

    }
})