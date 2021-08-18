

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



function r(){
    'use strict';
    
    let years;
    let rate;

    function setYears(y){
        years=y;
    }
    function setRate(r){
        rate=r;
    }
    function getInterest(p){
        let principle;
        principle=p;
        for(let i=0; i<years; i++ ){
            principle += principle * rate;
        }
         return principle-p;
    }
    years

    return{
        setRate: setRate,
        setYears: setYears,
        getInterest: getInterest
    }
};
const c=r();
c.setYears(2);
c.setRate(.1);
console.log(c.getInterest(100));
const q=r();
q.setYears(3);
q.setRate(.2)
console.log(q.getInterest(200));