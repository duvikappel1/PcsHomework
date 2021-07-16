'use strict'

let letters3 = ['a','b','c'];
let letters4 = ['a','B','c'];

function mySome(theArray, test) {
  
  for (let i = 0; i < theArray.length; i++) {
    if (test(theArray[i])) {
      return true;
    }
   }
  return false;
  }

  console.log(mySome(letters3, n => n === n.toUpperCase()));
  console.log(mySome(letters4, n => n === n.toUpperCase()));

  console.log(mySome(letters3, n => n === n.toLowerCase()));
  console.log(mySome(letters4, n => n === n.toLowerCase()));

  console.log(letters3.some( n => n === n.toUpperCase())) 
  console.log(letters4.some( n => n === n.toUpperCase())) 
  console.log(letters3.some( n => n === n.toLowerCase())) 
  console.log(letters4.some( n => n === n.toLowerCase())) 