'use strict'

function onlyIf(theArray, test, action){
    for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
          action(theArray[i]);
        }
       }
}

let numbers=[1,2,3,4,5,6];
onlyIf(numbers,n => n%2===0,console.log)

function onlyIf2(theArray, test, action){
    let filtered=theArray.filter(test);
    filtered.forEach(action);
    }

    onlyIf2(numbers,n => n%2===0,console.log)    