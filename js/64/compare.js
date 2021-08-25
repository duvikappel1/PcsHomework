var utils = function (module){
    'use strict';
    module.compare = function (a, b){
        return a.toLowerCase() === b.toLowerCase();
    }
    return module;
    
    
}(utils || {});
console.log(utils.compare('A', 'a'));