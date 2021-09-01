
'use strict'
 let array=[1,2,3,4,5];   

function myMap(theArray, test) {
    let result = [];
  
    for (let i = 0; i < theArray.length; i++) {
       let a=test(theArray[i]); 
        result.push(a);
      
    }
    return result;
}
console.log(myMap(array, n => n+1));
console.log(array);

console.log(myMap(array, n => n*10));
console.log(array);

