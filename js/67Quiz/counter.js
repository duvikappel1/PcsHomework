window.app = function (module){
'use strict'

    let count=0;

    module.increaseCounter=function(){
    count++;
}
    module.getCount=function(){
        console.log(count);
}
    
    return module;

}(window.app || {});



