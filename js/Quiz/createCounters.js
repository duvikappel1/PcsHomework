
 function createCounters(){
    'use strict'
    
        let count=0;
    
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

    
    
    