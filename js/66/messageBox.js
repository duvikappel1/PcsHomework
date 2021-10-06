(function(){
    'use strict';

    
      const messageButton=document.getElementById('messageButton');
      const messageBox=document.getElementById('messageBox');

      messageButton.addEventListener('click', () => {
      messageBox.style.display = 'block';
      });
}());