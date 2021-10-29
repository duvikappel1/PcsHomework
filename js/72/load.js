/*global pcs*/

console.log('js loaded');

(function () {
  'use strict';

  const fileNameInput = $('#fileName');
  const result= $('#result');
  const htmlResult = $('#htmlResult');
  const spinner = $('#spinner');

  $('#load').click(() => {
    result.text('');
    spinner.show();
    fetch(fileNameInput.val())
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.text();
      })
      .then(t => {
        result.text(t);
        htmlResult.html(t);
      })
      .catch(err => {
        pcs.messageBox.show(err, true);
        throw new Error('OOPS!!!');
      })
      
      .finally(() => {
        spinner.hide();
      });
  });
}());