
var utils = function (){
    'use strict';
    const days=['Sunday','Monday','Tuesday']
    function getDays(index){
        return days[index];
    }
    function getIndex(day){
        const dow = day.toLowerCase();
        return days.findIndex(day => dow === day.toLowerCase());
    }
    return{
        getDays: getDays,
        getIndex: getIndex
    };

}();

console.log(utils.getDays(1));
console.log(utils.getIndex('Sunday'));