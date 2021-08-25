
var utils = function (module){
    'use strict';
    const days=['Sunday','Monday','Tuesday']
    module.getDays = function (index){
        return days[index];
    }
    module.getIndex = function (day){
        const dow = day.toLowerCase();
        return days.findIndex(day => dow === day.toLowerCase());
    }
    return module;

}(utils || {});

console.log(utils.getDays(1));
console.log(utils.getIndex('Sunday'));