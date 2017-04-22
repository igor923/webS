/**
 * Created by a on 21.04.2017.
 */
var app = angular.module('APP',[]);
app.directive('x',function () {
    return {
        scope:{},
        restrict: 'E',
        template: '<h1>I am X</h1>',
        link:function (scope,element,attrs) {
            element.addClass('box');
            element.bind('click',function () {
                element.toggleClass('box');
                element.prepend('Prepend <hr />');
                element.append('<hr /> Append');
                var h1 = angular.element(element.children()[1]);
                var h2 = angular.element(element.children()[2]);
                h1.text('I am an X')
                h1.css({'color':'blue'})
                h2.css({'color':'green'})
            })
            
        }
    }
});