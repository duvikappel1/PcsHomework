(function (){
    'use strict';
    const button = $('button');
    const display = $('#display');
    const input = $('#input');
    
    
    button.click( () => {
        display.text(`Hi ${ input.val()}, Welcome to live Server! `);
    });
}());