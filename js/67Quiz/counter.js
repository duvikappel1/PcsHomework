window.app = function (module){
'use strict'

    let count=0;

    // SL - indentation is off - very hard to follow...
    module.increaseCounter=function(){
    count++;
}
    module.getCount=function(){
      // SL - this should be returning the count, not console logging it. Who says caller wants to do that?
        console.log(count);
}

    return module;

}(window.app || {});

// SL - nice



