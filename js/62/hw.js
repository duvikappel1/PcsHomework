

const private=(function(){
    'use strict'; 
const days=['Sunday','Monday','Tuesday'];

function getDay(index){
    return days[index];
}

function getIndex(day){
    for(let i = 0; i < days.length; i++) {
        if (days[i] === day) {
          return i;
}
}
}
return {
    getIndex: getIndex,
    getDay: getDay
  };

}());
console.log(private.getDay(1));
console.log(private.getIndex('Sunday'));
