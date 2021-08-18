'use strict';

console.log("My name is" + name);
console.log("My email is" + email);

function getBestGreeter(name) {
    return function () {
      console.log(`Hello ${name}`);
    };
  }
  let x=getBestGreeter('Joe');
  let bestGreeter = getBestGreeter('Joe');
  bestGreeter();
  console.log(x);
  x();