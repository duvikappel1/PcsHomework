'use strict'

function multiply(x, y){
  return x*y; 
}
console.log(multiply(2,3)) 
console.log(multiply(3,3))
console.log(multiply(4,3))

function getMuliplier() {
    return function (q,w) {
      return q*w;
    };
  }
let betterMultiplier=getMuliplier();
console.log(betterMultiplier(3,2)) 

function getMuliplier2(q) {
    return function (w) {
      return q*w;
    };
  }
let betterMultiplier2=getMuliplier2(3);
console.log(betterMultiplier2(2)) 



