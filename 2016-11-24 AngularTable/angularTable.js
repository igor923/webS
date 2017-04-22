/**
 * Created by a on 24.11.2016.
 */
var mod = angular.module("friends",[]);
mod.controller("friendsCntr",["$scope",function ($scope) {

    function Friend(lName,fName,city,age,children) {
        this.lName=lName;
        this.fName=fName;
        this.city=city;
        this.age=age;
        this.children=children;
    }

    $scope.friends=[];
    $scope.friends.push(new Friend("Katz","David","Netanya",28,3));
    $scope.friends.push(new Friend("Katz","Saraha","Eilat",28,0));
    $scope.friends.push(new Friend("Cohen","Alex","Netanya",5,0));
    $scope.friends.push(new Friend("Hait","Alex","Haifa",45,2));
    $scope.friends.push(new Friend("Katz","Vasia","Tel-Aviv",25,1));


 /*   $scope.key = "lName";
    $scope.rev = false;
    $scope.fullNameCity = function (f) {return f.city+" "+f.lName+" "+f.fName};
    $scope.fullLName = function (f) {return f.lName+" "+f.fName};
    $scope.fullFName = function (f) {return f.fName+""+f.lName};
    var obj  = {
        fName : $scope.fullFName,
        lName : $scope.fullLName,
        city : $scope.fullNameCity,
        age : "age",
        children : "children"
    };


   var oldKey = "lName";
    $scope.sort = function (name) {
        if(name == oldKey){
            $scope.rev = !$scope.rev;
        }else{
            $scope.rev=false;
            oldKey=name;
        }
       /!*$scope.key == name ? $scope.rev = !$scope.rev : $scope.rev=false;*!/
        $scope.key=obj[name];

    }

    $scope.rev=false;*/
/*--------------------------------*/

/*$scope.fo={fName: "ra"}*/

    $scope.min =0;
    $scope.max=120;
    $scope.lNameFilter= "";
    $scope.fNameFilter= "";
    $scope.cityFilter= "";

}]);

mod.filter("range",function () {
    return function (arr,min,max) {
        var res=[];
        for (var i=0;i<arr.length;i++){
            if (arr[i].age >= min && arr[i].age <= max){
                res.push(arr[i])
            }
        }
        return res
    }
});

mod.filter("names",function () {
    return function (arr,key,str) {
        var res = [];
        for(var i=0;i<arr.length;i++){
            if(!str || str.length == 0 || arr[i][key].startsWith(str))res.push(arr[i])
        }

        return res
    }
})