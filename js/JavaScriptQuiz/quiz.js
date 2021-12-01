//This is what I thought should work but it doesn't.
(function(){
  'use strict';
  
  const display = document.getElementById('orders');

  fetch('quiz.json')
    .then(r => r.json())
    .then(t => {
      t.forEach(order => { 
        const item = new Item(order.items);
        const order3 = new Order(order.customer, order.address, item);
        order3.print();
      });
    });
  

  class Item {
    
    constructor(items) {
     for(let x=0; x < items.length; x++){
       this.item = item;
       this.price = price/quantity;
       this.quantity = quantity;
       }   
    }

    print() {
      display.append(`The price for ${this.name} is ${this.price}. There are ${this.quantity} in stock.`);
    }
}

  class Order {
    
    constructor(customerName, customerAddress, item) {
      this.customerName = customerName;
      this.customerAddress = customerAddress;
      this.item = item;

    }

    print() {
       
      display.append(`customer: ${this.customerName} Address: ${this.customerAddress}`);
      for(let x = 0; x < this.item.length; x++){
        display.append(`item: ${this.item.item} quantity: ${this.item.quantity} price: ${this.item.price}`) 
      }
      
      
    }
}

}())