(function () {
    'use strict';

    const theButton = document.getElementById('theButton');

    function setCss(element, property, value){
      element.style[property]=value;
           
}

     const colors=['red','blue','yellow'];
     
     let i=0;
     theButton.addEventListener('click', ()=>{
     setInterval(() => {
        
        
            setCss(document.body, 'color', colors[i++]);
            if(i>=colors.length){
                i=0;
            }
            setCss(document.body, 'backgroundColor', colors[i]);
            
        }, 1000);
     })
}());