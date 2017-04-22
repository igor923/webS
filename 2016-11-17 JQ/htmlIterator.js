/**
 * Created by a on 17.11.2016.
 */
function htmlIterator() {
    var elements=[];
    recurse($(document.body)[0]);
    var current=0;


    return{
        next : function () {
            if(current >elements.length-1)return null;

            return elements[current++];
        },
        hasNext : function () {
            return current <elements.length
        }
    };



    function recurse(node) {
        var ch =$(node).children();
        for (var i=0;i<ch.length; i++)recurse(ch[i]);
        elements.push(node);

    }

}