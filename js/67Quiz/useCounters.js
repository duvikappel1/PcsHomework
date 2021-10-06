window.app.increaseCounter();
window.app.getCount();
window.app.increaseCounter();
window.app.getCount();

counter1=window.app.createCounters();
counter1.increaseCounter();
counter1.increaseCounter();
counter1.increaseCounter();
counter1.increaseCounter();
counter1.getCount();
counter1.increaseCounter();
counter1.getCount();

counter2=window.app.createCounters();
counter2.increaseCounter();
counter2.getCount();
counter2.increaseCounter();
counter2.getCount();

counter3=window.app.createCounters();

for ( let q=0; q<10; q++){
    counter3.increaseCounter();
}
counter3.getCount();