(function () {
    'use strict';
  
    const clock = document.createElement('div');
  
    document.body.appendChild(clock);
    
    const clock2=document.getElementById('clock1');
    
    function updateClock() {
      clock.innerText = new Date().toLocaleTimeString();
      clock2.innerText = new Date().toLocaleTimeString();
    }
  
    setInterval(updateClock, 1000);
    
  }());