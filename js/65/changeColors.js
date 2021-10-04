(function () {
    'use strict';

    const theButton = document.getElementById('theButton');

    function setCss(element, property, value){
      element.style[property]=value;
           
}

     const colors=['red','blue','yellow'];
     const backgroundColor=['blue','green','red']

     setInterval(() => {
        for(let i=0; i < 3; i++){
        theButton.addEventListener('click', ()=>{
            setCss(document.body, 'color', colors[i]);
            setCss(document.body, 'backgroundColor', backgroundColor[i]);
            });
        }  
     }, 5000);
     
}());