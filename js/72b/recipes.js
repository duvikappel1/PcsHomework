/*global pcs*/

console.log('js loaded');

(function () {
  'use strict';

  const recipeInput = $('#recipe');
  const result= $('#result');
  

  $('#load').click(() => {
    result.text('');
   
    fetch(recipeInput.val())
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.text();
      })
      .then(t => {
        console.log(t);
        result.text(`${t.food}`);
      })
      .catch(err => {
        pcs.messageBox.show(err, true);
        throw new Error('OOPS!!!');
      })
      
     
  });
}());