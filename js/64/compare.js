var utils = function (){
    'use strict';
    function compare(a, b){
        return a.toLowerCase() === b.toLowerCase();
    }
    return{
        compare: compare
    };
}();
console.log(utils.compare('A', 'a'));