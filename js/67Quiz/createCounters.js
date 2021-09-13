
 // SL - ok - but this is not inside an IIFE or "module". It also doesnt keep track of how many were created
 function createCounters(){

    'use strict'

        let count=0;
    // SL - indentation is off - very hard to follow...
        let increaseCounter=function(){
        count++;
    }
       let getCount=function(){
            console.log(count);
    }

        return {
            increaseCounter,
            getCount
        }

    }



