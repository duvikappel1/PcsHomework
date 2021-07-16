'use strict'

let letters = ['a','b','c'];
let letters2 = ['a','B','c'];

function myEvery(theArray, test) {
  
  for (let i = 0; i < theArray.length; i++) {
    if (!test(theArray[i])) {
      return false;
    }
   }
  return true;
  }

  console.log(myEvery(letters, n => n === n.toUpperCase()));
  console.log(myEvery(letters2, n => n === n.toUpperCase()));

  console.log(myEvery(letters, n => n === n.toLowerCase()));
  console.log(myEvery(letters2, n => n === n.toLowerCase()));

  console.log(letters.every( n => n === n.toUpperCase())) 
  console.log(letters2.every( n => n === n.toUpperCase())) 
  console.log(letters.every( n => n === n.toLowerCase())) 
  console.log(letters2.every( n => n === n.toLowerCase())) 
  


  




    
  
    
    
  
   
  
  
  