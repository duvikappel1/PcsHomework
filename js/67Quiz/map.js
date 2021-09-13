
'use strict'
 let array=[1,2,3,4,5];

 // SL - test isnt a very descriptive name here. test what? were not testing anything...
function myMap(theArray, test) {
    let result = [];

    for (let i = 0; i < theArray.length; i++) {
       let a=test(theArray[i]); // SL - not a problem but so simple why not just combine these two lines...
        result.push(a); // SL - indentation is off...

    }
    return result;
}

// SL - I asked for doubling...
console.log(myMap(array, n => n+1));
console.log(array);

console.log(myMap(array, n => n*10));
console.log(array);

// SL - nice

